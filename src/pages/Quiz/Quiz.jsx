import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Suspense, useEffect, useState } from "react";
import { KeyboardControls, Text3D } from "@react-three/drei";
import Ecctrl, { EcctrlAnimation } from "ecctrl";

import Lights from "../../components/lights/Lights";
import Staging from "../../components/staging/Staging";
import Floor from "../../components/Lobby/Floor/Floor";
import NatureItems from "../../components/Lobby/NatureItems/NatureItems";
import Bulbasaur from "../../components/Bulbasaur/Bulbasaur";

import { Loader } from "@react-three/drei";
import ButtonStart from "../../components/ButtonStart/ButtonStart";
import ButtonGoBack from "../../components/ButtonGoBack/ButtonGoBack";
import Clock from "../../components/Clock/Clock";
import { GarbageBag } from "../../components/GarbageBag/GarbageBag";
import generarNumeroAleatorio from "../../utils/randomNumberGenerator";
import useQuizStore from "../../stores/use-quiz-store";
import useAuthStore from "../../stores/use-auth-store";
import QuizDAO from "../../daos/QuizDao";
import { useNavigate } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalQuiz({onHide, ...props}) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          ¡Felicidades!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Haz salvado al planeta de la contaminación. ¡Gracias por jugar!
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Volver al Lobby</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Quiz = () => {
  const [ready, setReady] = useState(false);
  const [scores, setScores] = useState([]); // Estado para almacenar los puntajes
  const { quizStarted, quizFinished, quizPoints, setQuizFinished } = useQuizStore();
  const { user } = useAuthStore();
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);

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

  // Función para obtener y actualizar los mejores puntajes
  const fetchTopScores = async () => {
    try {
      const topScores = await QuizDAO.getTopScores();
      setScores(topScores);
    } catch (error) {
      console.error("Error fetching top scores:", error);
    }
  };

  // Efecto para guardar datos del quiz y actualizar los puntajes
  useEffect(() => {
    const saveQuizData = async () => {
      if (quizFinished) {
        const userName = user.displayName || user.email;
        const points = quizPoints;

        try {
          await QuizDAO.createQuizRecord({ name: userName, points });
          setQuizFinished(false);
          setModalShow(true);
          fetchTopScores(); // Actualiza los puntajes después de guardar
        } catch (error) {
          console.error("Error saving quiz data:", error);
        }
      }
    };

    saveQuizData();
    fetchTopScores(); // Recupera los puntajes al montar el componente
  }, [quizFinished]);

  return (
    <>
      <ModalQuiz show={modalShow} onHide={() => navigate("/lobby")} />
      <ButtonGoBack />
      <Clock />

      {/* Sección para mostrar los mejores puntajes */}
      <div className="top-scores">
        <h2>🏆 Mejores Puntajes</h2>
        <ol>
          {scores.map((score, index) => (
            <li key={index}>
              {score.name} - {score.points} puntos
            </li>
          ))}
        </ol>
      </div>

      <Canvas shadows={true}>
        <Lights />
        <Staging />
        <Suspense fallback={null}>
          <Physics timeStep="vary">
            <NatureItems />
            {
              !quizStarted ? (
                <>
                  <Text3D font={"/fonts/Archivo Black_Regular.json"} position={[-4.3, 2, 5.5]} rotation={[0, 2, 0]} lineHeight={0.6} size={0.4}>
                    {`Comenzar el Juego`}
                    <meshNormalMaterial color="black" />
                  </Text3D>
                  <GarbageBag scale={0.3} position={[-5.5, 2, 2.5]} />
                </>
              ) :
                Array.from({ length: 20 }, (_, i) => (
                  <GarbageBag key={i} scale={0.5} position={[generarNumeroAleatorio(), 2, generarNumeroAleatorio()]} />
                ))
            }

            <KeyboardControls map={keyboardMap}>
              <Ecctrl name="bulbasaur" animated scale={2} capsuleHalfHeight={0.05} capsuleRadius={0.2}>
                <EcctrlAnimation characterURL="models-3d/Bulbasaur.glb" animationSet={animationSet}>
                  <Bulbasaur />
                </EcctrlAnimation>
              </Ecctrl>
            </KeyboardControls>
            <Floor />
          </Physics>
        </Suspense>
      </Canvas>
      <div
        onClick={() => setReady(true)}
        className={`fullscreen bg ${ready ? "ready" : "notready"} ${ready && "clicked"}`}
      >
        <ButtonStart />
      </div>
      <Loader />
    </>
  );
};

export default Quiz;


