import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Suspense, useState } from "react";
import { KeyboardControls, Loader, Text } from "@react-three/drei";
import Ecctrl, { EcctrlAnimation } from "ecctrl";

import Lights from "../../components/lights/Lights";
import Staging from "../../components/staging/Staging";
import Bulbasaur from "../../components/Bulbasaur/Bulbasaur";
import FloorDeforestacion from "../../components/Deforestacion/FloorDeforestacion/FloorDeforestacion";
import ButtonStart from "../../components/ButtonStart/ButtonStart";
import DestroyedNature from "../../components/Deforestacion/DestroyedNature/DestroyedNature";
import Chikorita from "../../components/Chikorita/Chikorita";
import { PokeBall } from "../../components/PokeBall/PokeBall";
import GarbageContainer from "../../components/GarbageContainer/GarbageContainer";
import { Table3d } from "../../components/Table3d/Table3d";
import { Tv3d } from "../../components/Tv3d/Tv3d";
import { BeanBang } from "../../components/BeanBag3d/BeanBang";
import PostProcessing from "../../components/PostProcessing/PostProcessing";
import VideoDeforestation from "../../components/VideoDeforestation/VideoDeforestation";
import ButtonGoBack from "../../components/ButtonGoBack/ButtonGoBack";
import { GarbageBag } from "../../components/Deforestacion/GarbageBag/GarbageBag";

const Deforestacion = () => {
  const [ready, setReady] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [greetingPlayed, setGreetingPlayed] = useState(false);

  const texts = [
    `Hace unos años, este lugar era un paraíso. 
    Los árboles eran enormes y el aire fresco. 
    Ahora, la deforestación ha eliminado los bosques, 
    el aire está más pesado y la fauna ha desaparecido.`,
    `La deforestación afecta todo el ecosistema: el clima, 
    el suelo y los animales. Sin árboles, el CO2 no se absorbe, 
    el cambio climático se intensifica y la erosión del suelo se acelera.`,
    `Reforestar es clave. 
    Plantar árboles ayuda a restaurar el equilibrio ecológico. 
    También, la agroforestería combina cultivos con árboles, 
    protegiendo el suelo y evitando la tala masiva.`,
    `La educación es crucial. 
    Si más personas entienden el impacto de sus acciones, 
    podemos exigir políticas que promuevan la conservación 
    y el uso responsable de los recursos.`,
    `Restaurar ecosistemas es esencial. 
    No solo plantar árboles,
     sino también devolverle vida al suelo, 
     los ríos y los hábitats naturales, 
     aunque en algunos casos es necesario un enfoque más complejo.`,
    `Aunque la deforestación es un gran desafío, 
    con compromiso y pequeñas acciones podemos revertir sus efectos 
    y permitir que el planeta se recupere.`,
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
        {/* <Perf position="top-left" minimal /> */}
        <Suspense fallback={null}>
          <Physics>
            <PostProcessing />
            <Chikorita
              onClick={handleChikoritaClick}
              onPointerOver={() => (document.body.style.cursor = "pointer")}
              onPointerOut={() => (document.body.style.cursor = "default")}
            />
            <Table3d position={[6, 0, 6]} scale={2} />
            <VideoDeforestation
              position={[5.94, 1.57, 6]}
              rotation={[0, 11, 0]}
            />
            <Tv3d position={[6, 1, 6]} rotation={[0, 15.7, 0]} scale={1.5} />
            <BeanBang position={[2, 0, 6]} />
            <PokeBall position={[-4, 4, -4]} scale={0.2} />
            <GarbageBag scale={0.3} position={[2, 2, 2]} />
            <GarbageContainer scale={1.1} />
            <DestroyedNature />
            <Suspense fallback={null}>
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
            </Suspense>
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
      <Loader />
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
