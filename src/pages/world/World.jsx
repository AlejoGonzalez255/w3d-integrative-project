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
  const [ready, set] = useState(false)
  return (
    <>
      <Canvas camera={{ position: [0, 3, -5], fov: 75 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[0, 10, 10]} />
        <Physics gravity={[0, -1, 0]} >
          <TestDummy3d />
          <Bulbasaur scale={[2, 2, 2]} />
          <Floor />
        </Physics>
      </Canvas>
      <div onClick={() => set(true)} className={`fullscreen bg ${ready ? "ready" : "notready"} ${ready && "clicked"}`}>
        <button>Iniciar</button>
      </div>
    </>
  );
};

export default World;

