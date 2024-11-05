import { useState } from "react";

export const initialPlayerHP = 100;
export const initialEnemyHP = 100;

export const useCombat = () => {
  const [isInCombat, setIsInCombat] = useState(false);
  const [playerHP, setPlayerHP] = useState(initialPlayerHP);
  const [enemyHP, setEnemyHP] = useState(initialEnemyHP);
  const [typhlosionVisible, setTyphlosionVisible] = useState(true);
  const [charizardVisible, setCharizardVisible] = useState(true);
  const [combatMessage, setCombatMessage] = useState(null);
  const [enemyName, setEnemyName] = useState(""); // Nombre del enemigo actual
  const [enemyMessage, setEnemyMessage] = useState("");
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);

  const enemyPhrases = {
    Typhlosion: [
      "¡No te dejaré ganar!",
      "¡Siente mi poder!",
      "¡Vas a arrepentirte!",
      "¡No te escaparás tan fácil!",
      "¡Esto apenas comienza!",
    ],
    Charizard: [
      "¡Prepárate para arder!",
      "¡Mi fuego es imparable!",
      "¡Te consumiré en llamas!",
      "¡Esta es mi zona!",
      "¡No tienes escapatoria!",
    ],
  };

  const getRandomEnemyMessage = (enemy) => {
    const phrases = enemyPhrases[enemy];
    const randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex];
  };

  const startCombat = (enemy) => {
    setIsInCombat(true);
    setPlayerHP(initialPlayerHP);
    setEnemyHP(initialEnemyHP);
    setEnemyName(enemy);
    setCombatMessage(`¡Te enfrentas a ${enemy}!`);
    setEnemyMessage("");
    setIsPlayerTurn(true);
  };

  const playerAttack = () => {
    if (!isPlayerTurn) return;

    const damage = Math.floor(Math.random() * 20) + 10;
    setEnemyHP((prev) => {
      const newHP = Math.max(prev - damage, 0);
      if (newHP === 0) {
        setCombatMessage(`¡Ganaste el combate contra ${enemyName}!`);
        setTimeout(() => {
          setIsInCombat(false);
          if (enemyName === "Typhlosion") setTyphlosionVisible(false);
          if (enemyName === "Charizard") setCharizardVisible(false);
          setCombatMessage(null);
          setEnemyMessage("");
        }, 2000);
      }
      return newHP;
    });

    setEnemyMessage(getRandomEnemyMessage(enemyName));
    setIsPlayerTurn(false);

    setTimeout(() => {
      enemyAttack();
      setIsPlayerTurn(true);
    }, 2000);
  };

  const enemyAttack = () => {
    const damage = Math.floor(Math.random() * 15) + 5;
    setPlayerHP((prev) => {
      const newHP = Math.max(prev - damage, 0);
      if (newHP === 0) {
        setCombatMessage("Has perdido el combate...");
        setTimeout(() => {
          setIsInCombat(false);
          setCombatMessage(null);
          setEnemyMessage("");
        }, 2000);
      }
      return newHP;
    });
  };

  const exitCombat = () => {
    setIsInCombat(false);
    setCombatMessage("Has escapado del combate");
    setTimeout(() => {
      setCombatMessage(null);
      setEnemyMessage("");
    }, 2000);
  };

  return {
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
    enemyName,
  };
};

