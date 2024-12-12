import React, { useEffect, useState } from 'react';
import './Clock.css';
import useQuizStore from '../../stores/use-quiz-store';

export default function Clock() {
  const [time, setTime] = useState(60); 

  const { quizStarted, setQuizStarted, quizPoints, setQuizFinished } = useQuizStore();

  useEffect(() => {
    let timer;
    if (quizStarted && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    if (time === 0) {
      setQuizStarted(false);
      setQuizFinished(true);
    }

    return () => clearInterval(timer); // Limpieza del intervalo
  }, [quizStarted, time]);

  // Formatear tiempo en minutos:segundos
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className='clock'>
      <div className="cloader">
        <div className="clface">
          <div className="top"></div>
          <div className="bottom"></div>
          <div className="left"></div>
          <div className="right"></div>
          <div id="h1" className="hand"></div>
          <div id="main" className="pin"></div>
        </div>
      </div>
      <p className='timer'>{formatTime(time)}</p>
      <p className='counter'>Puntos: {quizPoints}</p>
    </div>
  );
}
