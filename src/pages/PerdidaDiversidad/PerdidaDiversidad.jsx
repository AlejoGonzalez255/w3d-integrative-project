import React from "react";
import "./PerdidaDiversidad.css";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Perf } from "r3f-perf";
import { Suspense, useState } from "react";
import { KeyboardControls, Text } from "@react-three/drei";
import Ecctrl, { EcctrlAnimation } from "ecctrl";

import Floor from "../../components/PerdidaDiversidad/Floor/Floor";
import DestroyedNature from "../../components/PerdidaDiversidad/DestroyedNature/DestroyedNature";
import Bulbasaur from "../../components/Bulbasaur/Bulbasaur";
import Chikorita from "../../components/PerdidaDiversidad/Chikorita/Chikorita";
import Typhlosion from "../../components/Typhlosion/Typhlosion";
import Lights from "../../components/lights/Lights";
import Staging from "../../components/staging/Staging";
import ButtonStart from "../../components/ButtonStart/ButtonStart";
import { useCombat } from "../../components/CombatLogic/CombatLogic";

const PerdidaDiversidad = () => {
  const [ready, setReady] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [greetingPlayed, setGreetingPlayed] = useState(false);

  const {
    isInCombat,
    playerHP,
    enemyHP,
    typhlosionVisible,
    combatMessage,
    typhlosionMessage,
    startCombat,
    playerAttack,
    enemyAttack,
    exitCombat,
    isPlayerTurn,
  } = useCombat();

  const texts = ["¡Hola!", "¿Cómo estás?", "¡Cuida la naturaleza!"];

  const keyboardMap = [
    { name: "forward", keys: ["ArrowUp", "KeyW"] },
    { name: "backward", keys: ["ArrowDown", "KeyS"] },
    { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
    { name: "rightward", keys: ["ArrowRight", "KeyD"] },
    { name: "jump", keys: ["Space"] },
    { name: "run", keys: ["Shift"] },
  ];

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
            <DestroyedNature />
            {typhlosionVisible && <Typhlosion onClick={startCombat} />}
            <Chikorita onClick={handleChikoritaClick} />
            <KeyboardControls map={keyboardMap} enabled={!isInCombat}>
              <Ecctrl animated scale={2} capsuleHalfHeight={0.05} capsuleRadius={0.2}>
                <EcctrlAnimation characterURL="models-3d/Bulbasaur.glb" animationSet={animationSet}>
                  <Bulbasaur />
                </EcctrlAnimation>
              </Ecctrl>
            </KeyboardControls>
            <Floor />
          </Physics>

          {/* Mensaje de Chikorita */}
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

          {/* Mensaje de combate */}
          {combatMessage && (
            <Text
              position={[0, 4, 65]}
              rotation={[0, 3, 0]}
              color="Red"
              fontSize={0.8}
              outlineWidth={0.9}
              outlineColor="Black"
            >
              {combatMessage}
            </Text>
          )}

          {/* Mensaje de Typhlosion */}
          {typhlosionMessage && (
            <Text
              position={[0, 6, 68]}
              rotation={[0, 3, 0]}
              color="Orange"
              fontSize={0.7}
              outlineWidth={0.9}
              outlineColor="Black"
            >
              {typhlosionMessage}
            </Text>
          )}
        </Suspense>
      </Canvas>

      {isInCombat && (
        <div className="combat-interface">
          {/* Barra de vida del jugador */}
          <div className="combat-stats player-bar">
            <p>Tu vida:</p>
            <div className="health-bar">
              <div className="health-fill" style={{ width: `${playerHP}%` }}></div>
            </div>
          </div>

          {/* Barra de vida del enemigo */}
          <div className="combat-stats enemy-bar">
            <p>Enemigo:</p>
            <div className="health-bar">
              <div className="health-fill" style={{ width: `${enemyHP}%` }}></div>
            </div>
          </div>

          {/* Botones de acción centrados en la parte inferior */}
          <div className="combat-actions">
            <button onClick={playerAttack} disabled={!isPlayerTurn}>Atacar</button>
            <button onClick={enemyAttack} disabled={!isPlayerTurn}>Defender</button>
            <button onClick={exitCombat}>Huir</button>
          </div>
        </div>
      )}

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





