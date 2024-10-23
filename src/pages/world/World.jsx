import "./World.css";
import { Canvas } from "@react-three/fiber";
import House3d from "../../components/House3d/House3d";
import Tree from "../../components/Tree/Tree";
import TestDummy3d from "../../components/TestDummy/TestDummy3d";
import Floor from "../../components/Floor/Floor";
import Bulbasaur from "../../components/Bulbasaur/Bulbasaur";
import { Physics } from "@react-three/rapier";
import { useState } from "react";
import Ecctrl, { EcctrlAnimation } from "ecctrl"; // Asegúrate de importar desde "ecctrl"

// Definir controles del teclado
const keyboardMap = [
  { name: "forward", keys: ["ArrowUp", "KeyW"] },
  { name: "backward", keys: ["ArrowDown", "KeyS"] },
  { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
  { name: "rightward", keys: ["ArrowRight", "KeyD"] },
  { name: "jump", keys: ["Space"] },
  // Puedes añadir más controles si lo necesitas
];

const World = () => {
  const [ready, setReady] = useState(false);

  return (
    <>
      <Canvas camera={{ position: [0, 3, -5], fov: 75 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[0, 10, 10]} />

        <Physics timeStep="vary">
          {/* Aquí se envuelve el modelo de Bulbasaur con Ecctrl */}
          <Ecctrl keyboardControls={keyboardMap} followCamera followLight>
            <Bulbasaur scale={[2, 2, 2]} />
          </Ecctrl>

          {/* Otros objetos de la escena */}
          <Tree />
          <TestDummy3d />
          <Floor />
        </Physics>
      </Canvas>

      {/* Botón para iniciar */}
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


