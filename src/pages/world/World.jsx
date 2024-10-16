import "./World.css";
import { Canvas } from "@react-three/fiber";
import { KeyboardControls, PointerLockControls } from "@react-three/drei";
import House3d from "../../components/House3d/House3d";
import TestDummy3d from "../../components/TestDummy/TestDummy3d";
import Floor from "../../components/Floor/Floor";
import { Player } from "./Player";
import { Physics } from "@react-three/rapier";
import { useState } from "react";

const World = () => {
  const [ready, set] = useState(false)
  return (
    <>
      <KeyboardControls
        map={[
          { name: "forward", keys: ["ArrowUp", "w", "W"] },
          { name: "backward", keys: ["ArrowDown", "s", "S"] },
          { name: "left", keys: ["ArrowLeft", "a", "A"] },
          { name: "right", keys: ["ArrowRight", "d", "D"] }
        ]}
      >
        <Canvas camera={{ position: [0, 1.5, 5], fov: 75 }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[0, 10, 10]} />
          <Physics gravity={[0, -30, 0]}>
            <Player />
            <House3d />
            <TestDummy3d />
            <Floor />
          </Physics>
          <PointerLockControls />
        </Canvas>
      </KeyboardControls>
      <div onClick={() => set(true)} className={`fullscreen bg ${ready ? "ready" : "notready"} ${ready && "clicked"}`}>
          <button>Iniciar</button>
      </div>
    </>  
);
};

export default World;
