import { useState } from "react";

export const initialPlayerHP = 100;
export const initialEnemyHP = 100;

export const useCombat = () => {
  const [isInCombat, setIsInCombat] = useState(false);
  const [playerHP, setPlayerHP] = useState(initialPlayerHP);
  const [enemyHP, setEnemyHP] = useState(initialEnemyHP);
  const [typhlosionVisible, setTyphlosionVisible] = useState(true);
  const [combatMessage, setCombatMessage] = useState(null);
  const [typhlosionMessage, setTyphlosionMessage] = useState("");
  const [isPlayerTurn, setIsPlayerTurn] = useState(true); // Nuevo estado para manejar el turno del jugador

  const typhlosionPhrases = [
    "¡No te dejaré ganar!",
    "¡Siente mi poder!",
    "¡Vas a arrepentirte!",
    "¡No te escaparás tan fácil!",
    "¡Esto apenas comienza!",
  ];

  const getRandomTyphlosionMessage = () => {
    const randomIndex = Math.floor(Math.random() * typhlosionPhrases.length);
    return typhlosionPhrases[randomIndex];
  };

  const startCombat = () => {
    setIsInCombat(true);
    setPlayerHP(initialPlayerHP);
    setEnemyHP(initialEnemyHP);
    setCombatMessage(null);
    setTyphlosionMessage("");
    setIsPlayerTurn(true);
  };

  const playerAttack = () => {
    if (!isPlayerTurn) return; // Bloquea si no es el turno del jugador

    const damage = Math.floor(Math.random() * 20) + 10;
    setEnemyHP(prev => {
      const newHP = Math.max(prev - damage, 0);
      if (newHP === 0) {
        setCombatMessage("¡Ganaste el combate!");
        setTimeout(() => {
          setIsInCombat(false);
          setTyphlosionVisible(false);
          setCombatMessage(null);
          setTyphlosionMessage(""); // Esconde el mensaje al final del combate
        }, 2000);
      }
      return newHP;
    });

    setTyphlosionMessage(getRandomTyphlosionMessage());
    setIsPlayerTurn(false); // Cambia turno al enemigo

    // Retraso de 2 segundos antes del ataque del enemigo
    setTimeout(() => {
      enemyAttack();
      setIsPlayerTurn(true); // Vuelve a ser el turno del jugador
    }, 2000);
  };

  const enemyAttack = () => {
    const damage = Math.floor(Math.random() * 15) + 5;
    setPlayerHP(prev => {
      const newHP = Math.max(prev - damage, 0);
      if (newHP === 0) {
        setCombatMessage("Has perdido el combate...");
        setTimeout(() => {
          setIsInCombat(false);
          setCombatMessage(null);
          setTyphlosionMessage(""); // Esconde el mensaje al final del combate
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
      setTyphlosionMessage(""); // Esconde el mensaje al salir del combate
    }, 2000);
  };

  return {
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
  };
};

