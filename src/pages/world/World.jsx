import "./World.css";
import { Canvas } from "@react-three/fiber";
import TestDummy3d from "../../components/TestDummy/TestDummy3d";
import Floor from "../../components/Floor/Floor";
import NatureItems from "../../components/NatureItems/NatureItems";
import Bulbasaur from "../../components/Bulbasaur/Bulbasaur";
import { Physics } from "@react-three/rapier";
import { useState } from "react";
import Lights from "../lights/Lights";
import Staging from "../staging/Staging";
import House from "../../components/House/House";
import WoodenSings from "../../components/WoodenSigns/WoodenSings";

const World = () => {
  const [ready, setReady] = useState(false);

  return (
    <>
      <Canvas>
        <Lights/>
        <Staging/>
        <Physics gravity={[0, -9.81, 0]} timeStep="vary" debug={true}>
          <Bulbasaur/> 
          <TestDummy3d />
          <NatureItems/>
          <Floor />
          <House/>
          <WoodenSings/>
        </Physics>
      </Canvas>

      <div
        onClick={() => setReady(true)}
        className={`fullscreen bg ${ready ? "ready" : "notready"} ${ready && "clicked"}`}
      >
        <button>Iniciar</button>
      </div>
    </>
  );
};

export default World;

