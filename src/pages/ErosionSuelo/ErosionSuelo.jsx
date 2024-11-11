import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Perf } from "r3f-perf";
import { Suspense, useState } from "react";
import { KeyboardControls, Text } from "@react-three/drei";
import Ecctrl, { EcctrlAnimation } from "ecctrl";

import Lights from "../../components/lights/Lights";
import Staging from "../../components/staging/Staging";
import ButtonStart from "../../components/ButtonStart/ButtonStart";
import Bulbasaur from "../../components/Bulbasaur/Bulbasaur";
import Chikorita from "../../components/Chikorita/Chikorita";
import Floor from "../../components/ErosionSuelo/Floor/Floor";
import Vegetaion from "../../components/ErosionSuelo/Vegetation/Vegetation";

const ErosionSuelo = () => {
  const [ready, setReady] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [greetingPlayed, setGreetingPlayed] = useState(false);

  const texts = [
    "Bienvenido, mi nombre es Chikorita",

    `Hace mucho tiempo, este suelo era fertil y lleno de vida, 
la tierra era firme, y las raices de los arboles eran fuertes frente
a cualquier anversidad.`,

    `Pero con el tiempo, el suelo empezo a perder vida, los arboles fueron talados y la tierra
quedo expuesta al clima, las fuertes lluvias se llevaron capas de la tierra fértil y los
vientos, sin esa barrera que los protegia, el suelo empezo a erosionarse.`,

    `Cada año que pasaba, el suelo se volvia mas debil, incapaz de mantener la vida,
ahora lo que antes era un hermoso paisaje verde y sano, es ahora un terreno seco
y sin vida, sin nutrientes, ni raices, el suelo es desliza facil en cada tormeta
y las plantas ya no creen ni florecen en este lugar`,];

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
            <Vegetaion />
            <Floor />
          </Physics>
        </Suspense>
        {greetingPlayed && (
          <Text
            position={[-5, 4.3, 4]}
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

export default ErosionSuelo;