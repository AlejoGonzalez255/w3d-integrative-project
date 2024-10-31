import "./PerdidaDiversidad.css";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Perf } from 'r3f-perf'
import { Suspense, useState } from "react";
import { KeyboardControls } from "@react-three/drei";
import Ecctrl, { EcctrlAnimation } from "ecctrl";

import FloorPerdidaDiversidad from "../../components/PerdidaDiversidad/FloorPerdidaDiversidad/FloorPerdidaDiversidad";
import DestroyedNature from "../../components/PerdidaDiversidad/DestroyedNature/DestroyedNature";
import Bulbasaur from "../../components/Bulbasaur/Bulbasaur";
import Lights from "../../components/lights/Lights";
import Staging from "../../components/staging/Staging";
import ButtonStart from "../../components/ButtonStart/ButtonStart";

const PerdidaDiversidad = () => {
    const [ready, setReady] = useState(false);

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
    idle: 'Idle',
    walk: 'Walk',
    run: 'Run',
    jump: 'Jump',
    jumpIdle: 'JumpIdle',
    jumpLand: 'JumpLand',
    fall: 'Fall',
  };
    return (
        <>
        <Canvas shadows={true}>
          <Lights />
          <Staging />
          <Perf position="top-left" minimal />
        <Suspense fallback={null}>
          <Physics timeStep="vary" debug={true}>
            <KeyboardControls map={keyboardMap}>
              <Ecctrl animated scale={2} capsuleHalfHeight={0.05} capsuleRadius={0.2}>
                <EcctrlAnimation characterURL="models-3d/Bulbasaur.glb" animationSet={animationSet}>
                  <Bulbasaur />
                </EcctrlAnimation>
              </Ecctrl>
            </KeyboardControls>
            <FloorPerdidaDiversidad/>
          </Physics>
        </Suspense>
      </Canvas>

      <div
        onClick={() => setReady(true)}
        className={`fullscreen bg ${ready ? "ready" : "notready"} ${ready && "clicked"}`}
      >
        <ButtonStart />
      </div>
        </>

    );
};

export default PerdidaDiversidad;