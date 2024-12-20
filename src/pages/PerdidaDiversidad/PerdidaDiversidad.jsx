import React from "react";
import "./PerdidaDiversidad.css";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Suspense, useState } from "react";
import { KeyboardControls, Text } from "@react-three/drei";
import Ecctrl, { EcctrlAnimation } from "ecctrl";

import Floor from "../../components/PerdidaDiversidad/Floor/Floor";
import DestroyedNature from "../../components/PerdidaDiversidad/DestroyedNature/DestroyedNature";
import Bulbasaur from "../../components/Bulbasaur/Bulbasaur";
import Chikorita from "../../components/Chikorita/Chikorita";
import Typhlosion from "../../components/Typhlosion/Typhlosion";
import Charizard from "../../components/Charizard/Charizard";
import Lights from "../../components/lights/Lights";
import Staging from "../../components/staging/Staging";
import ButtonStart from "../../components/ButtonStart/ButtonStart";
import { useCombat } from "../../components/CombatLogic/CombatLogic";
import Video from "../../components/PerdidaDiversidad/Video/Video";
import { GarbageCan } from "../../components/PerdidaDiversidad/GarbageCan/GarbageCan";
import { GarbageBag1 } from "../../components/PerdidaDiversidad/GarbageBag/GarbageBag";
import ButtonGoBack from "../../components/ButtonGoBack/ButtonGoBack";

const PerdidaDiversidad = () => {
  const [ready, setReady] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [greetingPlayed, setGreetingPlayed] = useState(false);

  const {
    isInCombat,
    playerHP,
    enemyHP,
    typhlosionVisible,
    charizardVisible,
    combatMessage,
    enemyMessage,
    startCombat,
    playerAttack,
    enemyAttack,
    exitCombat,
    isPlayerTurn,
    currentEnemy,
    enemyPosition,
  } = useCombat();

  const texts = [
    `Bienvenido, sabias que antes este lugar
    estaba lleno de vida y naturaleza`,

    `Pero lastimosamente una gran cantidad de problemas llegaron..., 
    la contaminacion, especies invasoras, la caceria ilegal y incendios
    lo han dejado asi....`,

    `Quizas puedas ayudar al medioambiente 
    combatiendo estos problemas`,
  ];

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
      <ButtonGoBack />
      <Canvas shadows={true}>
        <Lights />
        <Staging />
        <Suspense fallback={null}>
          <Physics timeStep="vary">
            <DestroyedNature />
            <GarbageCan />
            <GarbageBag1 />
            {typhlosionVisible && (
              <Typhlosion onClick={() => startCombat("Typhlosion")} />
            )}
            {charizardVisible && (
              <Charizard onClick={() => startCombat("Charizard")} />
            )}
            <Chikorita
              onClick={handleChikoritaClick}
              onPointerOver={() => (document.body.style.cursor = "pointer")}
              onPointerOut={() => (document.body.style.cursor = "default")}
            />
            <KeyboardControls map={keyboardMap} enabled={!isInCombat}>
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
            <Floor />
          </Physics>

          <Video
            name="screen"
            position={[-10, 6, 22]}
            rotation={[0, 9, 0]}
            scale={7}
          />

          {/* Mensaje de Chikorita */}
          {greetingPlayed && (
            <Text
              position={[-5, 4, 4]}
              rotation={[0, 2, 0]}
              color="Black"
              fontSize={0.4}
              outlineWidth={0.9}
              outlineColor="White"
            >
              {texts[clickCount]}
            </Text>
          )}

          {/* Mensajes de combate */}
          {combatMessage && (
            <Text
              position={enemyPosition}
              rotation={[0, Math.PI, 0]}
              color="Red"
              fontSize={0.8}
              outlineWidth={0.9}
              outlineColor="Black"
            >
              {combatMessage}
            </Text>
          )}
          {enemyMessage && (
            <Text
              position={[
                enemyPosition[0],
                enemyPosition[1] - 3,
                enemyPosition[2],
              ]}
              rotation={[0, Math.PI, 0]}
              color="Orange"
              fontSize={0.6}
              outlineWidth={0.9}
              outlineColor="Black"
            >
              {enemyMessage}
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
              <div
                className="health-fill"
                style={{ width: `${playerHP}%` }}
              ></div>
            </div>
          </div>

          {/* Barra de vida del enemigo */}
          <div className="combat-stats enemy-bar">
            <p>Enemigo: {currentEnemy}</p>
            <div className="health-bar">
              <div
                className="health-fill"
                style={{ width: `${enemyHP}%` }}
              ></div>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="combat-actions">
            <button onClick={playerAttack} disabled={!isPlayerTurn}>
              Atacar
            </button>
            <button onClick={enemyAttack} disabled={!isPlayerTurn}>
              Defender
            </button>
            <button onClick={exitCombat}>Huir</button>
          </div>
        </div>
      )}

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

export default PerdidaDiversidad;
