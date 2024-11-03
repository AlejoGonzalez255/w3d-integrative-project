import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Perf } from "r3f-perf";
import { Suspense, useState } from "react";
import { KeyboardControls, Text } from "@react-three/drei";
import Ecctrl, { EcctrlAnimation } from "ecctrl";

import Lights from "../../components/lights/Lights";
import Staging from "../../components/staging/Staging";
import Bulbasaur from "../../components/Bulbasaur/Bulbasaur";
import FloorDeforestacion from "../../components/Deforestacion/FloorDeforestacion/FloorDeforestacion";
import ButtonStart from "../../components/ButtonStart/ButtonStart";
import DestroyedNature from "../../components/Deforestacion/DestroyedNature/DestroyedNature";
import Chikorita from "../../components/Chikorita/Chikorita";

const Deforestacion = () => {
  const [ready, setReady] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [greetingPlayed, setGreetingPlayed] = useState(false);

  const texts = [
    `Aquí, hace unos años, todo esto era pura vida. 
    Árboles tan altos que apenas dejaban ver el cielo. 
    Las guacamayas pasaban volando de rama en rama, 
    y uno sentía que el aire era fresco, que respiraba salud.`, 
    "¿Cómo estás?", 
    "¡Cuida la naturaleza!"];

  // Mapeo de controles de teclado
  const keyboardMap = [
    { name: "forward", keys: ["ArrowUp", "KeyW"] },
    { name: "backward", keys: ["ArrowDown", "KeyS"] },
    { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
    { name: "rightward", keys: ["ArrowRight", "KeyD"] },
    { name: "jump", keys: ["Space"] },
    { name: "run", keys: ["Shift"] },
  ];

  // Animaciones de Bulbasaur
  const animationSet = {
    idle: "Idle",
    walk: "Walk",
    run: "Run",
    jump: "Jump",
    jumpIdle: "JumpIdle",
    jumpLand: "JumpLand",
    fall: "Fall",
  };

  const handleChikoritaClick = () => {
    if (!greetingPlayed) {
      setGreetingPlayed(true);
    } else if (clickCount < texts.length - 1) {
      setClickCount((prevCount) => prevCount + 1);
    } else {
      setClickCount(-1);
    }
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
              <Ecctrl
                animated
                scale={2}
                capsuleHalfHeight={0.05}
                capsuleRadius={0.2}
              >
                <EcctrlAnimation
                  characterURL="models-3d/Bulbasaur.glb"
                  animationSet={animationSet}
                >
                  <Bulbasaur />
                </EcctrlAnimation>
              </Ecctrl>
            </KeyboardControls>
            <Chikorita onClick={handleChikoritaClick} />
            <DestroyedNature />
            <FloorDeforestacion />
          </Physics>
        </Suspense>
        {greetingPlayed && (
          <Text
            position={[-5, 3, 4]}
            rotation={[0, 2, 0]}
            color="Black"
            fontSize={0.5}
            outlineWidth={0.9}
            outlineColor="White"
          >
            {texts[clickCount]}
          </Text>
        )}
      </Canvas>
      <div
        onClick={() => setReady(true)}
        className={`fullscreen bg ${ready ? "ready" : "notready"} ${
          ready && "clicked"
        }`}
      >
        <ButtonStart />
      </div>
    </>
  );
};

export default Deforestacion;
