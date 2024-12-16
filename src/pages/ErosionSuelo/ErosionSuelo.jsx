import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Suspense, useState } from "react";
import { KeyboardControls, Text } from "@react-three/drei";
import Ecctrl, { EcctrlAnimation } from "ecctrl";

import Lights from "../../components/lights/Lights";
import ButtonStart from "../../components/ButtonStart/ButtonStart";
import Bulbasaur from "../../components/Bulbasaur/Bulbasaur";
import Chikorita from "../../components/Chikorita/Chikorita";
import Floor from "../../components/ErosionSuelo/Floor/Floor";
import Walls from "../../components/ErosionSuelo/Walls/Walls";
import Vegetaion from "../../components/ErosionSuelo/Vegetation/Vegetation";
import WoodenSign from "../../components/ErosionSuelo/WoodenSign/WoodenSign";
import Staging from "../../components/ErosionSuelo/Staging/Staging";
import Video from "../../components/ErosionSuelo/Video/Video";
import ButtonGoBack from "../../components/ButtonGoBack/ButtonGoBack";

const ErosionSuelo = () => {
  const [ready, setReady] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [greetingPlayed, setGreetingPlayed] = useState(false);

  const texts = [
    "Hola, bienvenido a este mundo",

    `Hace mucho tiempo, este suelo era fértil y lleno de vida, 
la tierra era firme, y las raíces de los árboles eran fuertes 
frente a cualquier adversidad. `,

    `    Pero con el tiempo, el suelo empezó a perder vida, los árboles
    fueron talados y la tierra quedo expuesta al clima, las fuertes 
    lluvias se llevaron capas de la tierra fértil, sin esa barrera 
    que los protegía, el suelo empezó a erosionarse. `,

    `     Cada año que pasaba, el suelo se volvía más débil, incapaz de 
    mantener vida, lo que antes era un hermoso paisaje verde y 
    sano, es ahora un terreno seco y sin vida. `,

    `sin nutrientes, ni raíces, el suelo es desliza fácil en cada tormenta
y las plantas ya no florecen más. `,

    `    pero nunca es tarde para salvar algo de vida, con ayuda esta 
    tierra podrá volver de nuevo a la vida, plantando árboles 
    y cubriéndolo con tierra fértil. `,

    `     Poco a poco, esta tierra sin vida podrá renacer de nuevo, 
    aun que la erosión haya dejado su marca, está siempre 
    nos recordara que siempre habrá una oportunidad para 
    devolverle a la tierra lo que se le ha quitado. `,

    `     Poco a poco, esta tierra sin vida podrá renacer de nuevo, 
    aun que la erosión haya dejado su marca, está siempre 
    nos recordara que siempre habrá una oportunidad para 
    devolverle a la tierra lo que se le ha quitado. `,

    `     A continuación, en el cartel grande hallaras un video
    que habla sobre la erosión del suelo. Para reproducirlo, 
    solo tienes que darle clic a la pantalla negra y para 
    pausarlo solo tienes que volver a dar un clic.
`,
  ];

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
      <ButtonGoBack />
      <Canvas shadows={true}>
        <Lights />
        <Staging />
        <Suspense fallback={null}>
          <Physics timeStep="vary">
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
            <Chikorita
              onClick={handleChikoritaClick}
              onPointerOver={() => (document.body.style.cursor = "pointer")}
              onPointerOut={() => (document.body.style.cursor = "default")}
            />
            <Floor />
            <Walls />
            <Staging />
            <Vegetaion />
            <WoodenSign />
            <Video
              position={[2.99, 6.689, 13.31]}
              rotation={[0, 9.424, 0.01]}
            />
          </Physics>
        </Suspense>
        {greetingPlayed && (
          <Text
            position={[-4, 4.3, 4]}
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
