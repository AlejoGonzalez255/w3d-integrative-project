import "./Lobby.css";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Perf } from 'r3f-perf'
import { Suspense, useEffect, useState } from "react";
import { KeyboardControls, Text3D } from "@react-three/drei";
import Ecctrl, { EcctrlAnimation } from "ecctrl";

import Lights from "../../components/lights/Lights";
import Staging from "../../components/staging/Staging";
import Floor from "../../components/Lobby/Floor/Floor";
import NatureItems from "../../components/Lobby/NatureItems/NatureItems";
import Bulbasaur from "../../components/Bulbasaur/Bulbasaur";
import Squirtle from "../../components/Lobby/Squirtle/Squirtle";
import TestDummy3d from "../../components/Lobby/TestDummy/TestDummy3d";
import House from "../../components/Lobby/House/House";
import WoodenSings from "../../components/Lobby/WoodenSigns/WoodenSings";
import { Text, Loader } from "@react-three/drei";
import ButtonStart from "../../components/ButtonStart/ButtonStart";
import ModalSummary from "../../components/Lobby/ModalSummary/ModalSummary";
import useModalSummaryStore from "../../stores/use-modalSummary-state";

const Lobby = () => {
  const [ready, setReady] = useState(false);
  const { modalSummary, setModalSummary } = useModalSummaryStore();
  const [clickCount, setClickCount] = useState(0);
  const [greetingPlayed, setGreetingPlayed] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  
  const texts = [
    `¡Hola! Bienvenido a esta experiencia 3D interactiva. 
    Yo seré tu guía. Para moverte por la página, utiliza 
    las teclas W, A, S y D o las flechas del teclado. 
    ¿Listo para explorar?`, 
    
    `Si quieres ver alrededor, 
    solo mantén presionado el clic izquierdo y arrastra el cursor. 
    ¡Así puedes mover la cámara! Y si necesitas saltar, 
    solo presiona la barra espaciadora (Espacio). ¡Dale una prueba!`, 
    
    `Cuando veas el cursor cambiar a una mano, 
    eso significa que puedes hacer clic en el objeto. 
    Eso te permitirá descubrir más información o interactuar. 
    Explora bien cada rincón; algunas sorpresas te esperan.`,

    `Ahora, 
    esta página trata de algunos problemas ambientales 
    importantes que enfrentamos hoy en día. 
    Aquí podrás aprender más sobre temas como la deforestación, 
    la erosión del suelo, y la pérdida de biodiversidad.`,

    `Verás algunos carteles alrededor de esta área. 
    Al hacer clic en ellos, 
    podrás profundizar en cada problema. 
    Cada cartel te llevará a un espacio 
    que te explica el tema y qué puedes hacer para ayudar. 
    ¡Explora cada uno!`,  
  
  ];

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


  const handleSquirtleClick = () => {
    if (!greetingPlayed) {
      setGreetingPlayed(true);
      setClickCount(0); // Mostrar el primer mensaje
      startTextRotation(); // Iniciar el cambio automático de mensajes
    }
  };

  const startTextRotation = () => {
    // Configura un intervalo para cambiar el mensaje cada 3 segundos (3000 ms)
    const id = setInterval(() => {
      setClickCount(prevCount => {
        if (prevCount < texts.length - 1) {
          return prevCount + 1;
        } else {
          // Si llega al último mensaje, limpia el intervalo y reinicia
          clearInterval(id);
          setGreetingPlayed(false);
          return 0;
        }
      });
    }, 10000); // Cambiar cada 10 segundos (ajusta este valor si deseas otro intervalo)
    setIntervalId(id);
  };

  // Limpiar el intervalo cuando el componente se desmonte
  useEffect(() => {
    return () => clearInterval(intervalId);
  }, [intervalId]);

  return (
    <>
      <Canvas shadows={true}>
          <Lights />
          <Staging />
          <Perf position="top-left" minimal />
        <Suspense fallback={null}>
          <Physics timeStep="vary" debug={true}>
            <NatureItems />
            <House />
            <WoodenSings />
            <TestDummy3d />
            {!greetingPlayed && (
              <>
                <Text3D font={"/fonts/Archivo Black_Regular.json"} position={[-4.3,2, 5.5]}  rotation={[0,2,0]} lineHeight={0.6} size={0.4}>
                {`Dame Click 
        v`}
              <meshNormalMaterial color="black" />
            </ Text3D>
              </>
            )}
            
            <Squirtle onClick={handleSquirtleClick}/>
            <KeyboardControls map={keyboardMap}>
              <Ecctrl animated scale={2} capsuleHalfHeight={0.05} capsuleRadius={0.2}>
                <EcctrlAnimation characterURL="models-3d/Bulbasaur.glb" animationSet={animationSet}>
                  <Bulbasaur />
                </EcctrlAnimation>
              </Ecctrl>
            </KeyboardControls>
            <Floor />
          </Physics>
          <Text position={[0, 6.5, 10]} rotation={[0, -3.15, 0]} color={"black"}>
            {"Bienvenido a ECOEARTH!"}
          </Text>
          <Text position={[0, 5.5, 10]} rotation={[0, -3.15, 0]} color={"black"} scale={0.5}>
            {"Presiona uno de las carteles para aprender sobre los problemas de nuestro medioambiente"}
          </Text>
          <Text position={[0, 3.5, 9.9]} rotation={[0, -3.15, 0]} color={"black"} scale={0.5}>
            {"La Perdidad de Diversidad"}
          </Text>
          <Text position={[10, 3.5, 9.9]} rotation={[0, -3.15, 0]} color={"black"} scale={0.5}>
            {"La Deforestacion"}
          </Text>
          <Text position={[-11, 3.5, 9.9]} rotation={[0, -3.15, 0]} color={"black"} scale={0.5}>
            {"Erosion del Suelo"}
          </Text>

          {greetingPlayed && (
            <Text
              position={[-5, 3, 4]} 
              rotation={[0, 2, 0]}
              color="Black"
              fontSize={0.2}
              outlineWidth={0.5}
              outlineColor="White"
            >
              {texts[clickCount]}
            </Text>
          )}
        </Suspense>
      </Canvas>
      <ModalSummary show={modalSummary} onHide={() => setModalSummary(false)} />
      <div
        onClick={() => setReady(true)}
        className={`fullscreen bg ${ready ? "ready" : "notready"} ${ready && "clicked"}`}
      >
        <ButtonStart />
        <Loader />
      </div>
    </>
  );
};

export default Lobby;


