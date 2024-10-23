import "./World.css";
import { Canvas } from "@react-three/fiber";
import Tree from "../../components/Tree/Tree";
import TestDummy3d from "../../components/TestDummy/TestDummy3d";
import Floor from "../../components/Floor/Floor";
import Bulbasaur from "../../components/Bulbasaur/Bulbasaur";
import { Physics } from "@react-three/rapier";
import { useState } from "react";
import Lights from "../lights/Lights";
import Staging from "../staging/Staging";

const World = () => {
  const [ready, setReady] = useState(false);

  return (
    <>
      <Canvas>
        <Lights/>
        <Staging/>
        <Physics gravity={[0, -9.81, 0]} timeStep="vary" debug={true}>
          <Bulbasaur/> 
          <Tree />
          <TestDummy3d />
          <Floor />
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

