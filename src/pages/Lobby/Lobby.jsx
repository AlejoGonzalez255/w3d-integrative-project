import "./Lobby.css";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Perf } from 'r3f-perf'
import { Suspense, useState } from "react";
import { KeyboardControls } from "@react-three/drei";
import Ecctrl, { EcctrlAnimation } from "ecctrl";

import Lights from "../../components/lights/Lights";
import Staging from "../../components/staging/Staging";
import Floor from "../../components/Lobby/Floor/Floor";
import NatureItems from "../../components/Lobby/NatureItems/NatureItems";
import Bulbasaur from "../../components/Bulbasaur/Bulbasaur";
import TestDummy3d from "../../components/Lobby/TestDummy/TestDummy3d";
import House from "../../components/Lobby/House/House";
import WoodenSings from "../../components/Lobby/WoodenSigns/WoodenSings";
import { Text, Loader } from "@react-three/drei";
import ButtonStart from "../../components/ButtonStart/ButtonStart";
import ModalSummary from "../../components/Lobby/ModalSummary/ModalSummary";
import useModalSummaryStore from "../../stores/use-modalSummary-state";

const Lobby = () => {
  const [ready, setReady] = useState(false);
  const { modalSummary, setModalSummary } = useModalSummaryStore();

  // Mapeo de controles de teclado
  const keyboardMap = [
    { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
    { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
    { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
    { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
    { name: 'jump', keys: ['Space'] },
    { name: 'run', keys: ['Shift'] },
  ];

  // Animaciones de Bulbasaur
  const animationSet = {
    idle: "idle",
    walk: "walk",
    run: "run",
    jump: "Jump_Start",
    jumpIdle: "Jump_Idle",
    jumpLand: "Jump_Land",
    fall: "Fall",
  };

  return (
    <>
      <Canvas shadows={true}>
          <Lights />
          <Staging />
          <Perf position="top-left" minimal />
        <Suspense fallback={null}>
          <Physics timeStep="vary" debug={true}>
            <NatureItems />
            <House />
            <WoodenSings />
            <TestDummy3d />
            <KeyboardControls map={keyboardMap}>
              <Ecctrl animated debug>
                <EcctrlAnimation characterURL="models-3d/Bulbasaur2.glb" animationSet={animationSet}>
                  <Bulbasaur />
                </EcctrlAnimation>
              </Ecctrl>
            </KeyboardControls>
            <Floor />
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


