import "./World.css";
import { Canvas } from "@react-three/fiber";
import House3d from "../../components/House3d/House3d";
import Tree from "../../components/Tree/Tree";
import TestDummy3d from "../../components/TestDummy/TestDummy3d";
import Floor from "../../components/Floor/Floor";
import Bulbasaur from "../../components/Bulbasaur/Bulbasaur";
import { Physics } from "@react-three/rapier";
import { useState } from "react";

const World = () => {
  const [ready, setReady] = useState(false);

  return (
    <>
      <Canvas>
        <ambientLight intensity={1.5} />
        <directionalLight position={[0, 10, 10]} />

        <Physics timeStep="vary" debug={true}>
          <Bulbasaur/> {/* Pasar keyboardMap aquí */}
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

