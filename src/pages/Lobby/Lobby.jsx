import "./Lobby.css";
import { Canvas } from "@react-three/fiber";
import TestDummy3d from "../../components/Lobby/TestDummy/TestDummy3d";
import Floor from "../../components/Lobby/Floor/Floor";
import NatureItems from "../../components/Lobby/NatureItems/NatureItems";
import Bulbasaur from "../../components/Bulbasaur/Bulbasaur";
import { Physics } from "@react-three/rapier";
import { Suspense, useState } from "react";
import Lights from "../../components/lights/Lights";
import Staging from "../../components/staging/Staging";
import House from "../../components/Lobby/House/House";
import WoodenSings from "../../components/Lobby/WoodenSigns/WoodenSings";
import { Loader, Text } from "@react-three/drei";
import ButtonStart from "../../components/ButtonStart/ButtonStart";
import ModalSummary from "../../components/Lobby/ModalSummary/ModalSummary";
import useModalSummaryStore from "../../stores/use-modalSummary-state";

const Lobby = () => {
  const [ready, setReady] = useState(false);

  const { modalSummary, setModalSummary } = useModalSummaryStore();

  console.log(modalSummary);

  return (
    <>
      <Canvas shadows={true}>
        <Suspense fallback={null}>

          <Lights />
          <Staging />
          <Physics gravity={[0, -9.81, 0]} timeStep="vary" debug={true}>
            <Bulbasaur />
            <TestDummy3d />
            <NatureItems />
            <Floor />
            <House />
            <WoodenSings />
          </Physics>
          <Text position={[0, 6.5, 10]} rotation={[0, -3.15, 0]} color={"black"}>
            {"Bienvenido a ECOEARTH!"}
          </Text>
          <Text position={[0, 5.5, 10]} rotation={[0, -3.15, 0]} color={"black"} scale={0.5}>
            {"Presiona uno de las carteles para aprender sobre los problemas de nuestro medioambiente"}
          </Text>
          <Text position={[0, 3.5, 9.9]} rotation={[0, -3.15, 0]} color={"black"} scale={0.5}>
            {"La Perdidad de Diversidad"}
          </Text>
          <Text position={[10, 3.5, 9.9]} rotation={[0, -3.15, 0]} color={"black"} scale={0.5}>
            {"La Deforestacion"}
          </Text>
          <Text position={[-11, 3.5, 9.9]} rotation={[0, -3.15, 0]} color={"black"} scale={0.5}>
            {"Erosion del Suelo"}
          </Text>
        </Suspense>
      </Canvas>
      <ModalSummary show={modalSummary} onHide={() => setModalSummary(false)} />
      <div
        onClick={() => setReady(true)}
        className={`fullscreen bg ${ready ? "ready" : "notready"} ${ready && "clicked"}`}
      >
        <ButtonStart />
        <Loader />
      </div>
    </>
  );
};

export default Lobby;

