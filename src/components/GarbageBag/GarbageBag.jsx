import React, { useCallback, useRef } from 'react'
import { Html, PositionalAudio, useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import generarNumeroAleatorio from '../../utils/randomNumberGenerator'
import useQuizStore from '../../stores/use-quiz-store'

export function GarbageBag(props) {
  const { nodes, materials } = useGLTF('models-3d/garbagebag.glb')
  const trashRef = useRef(null);
  const { quizStarted,setQuizPoints , setQuizStarted, quizPointReset} = useQuizStore();
  const audioRef = useRef(null);


  const reproducir = () => {
    audioRef.current.volume = 0.5;
    audioRef.current.play();
  };


  return (
    <RigidBody name='GarbageBag' {...props} ref={trashRef} type="dynamic" colliders="cuboid" 
      onCollisionEnter={({ other }) => {
        if(other.rigidBodyObject.name === "bulbasaur"){
          if(!quizStarted){
            setQuizStarted(true);
            quizPointReset();
            return;
          }
          setQuizPoints();
          reproducir();
          trashRef.current.setTranslation({ x: generarNumeroAleatorio(), y: 2, z: generarNumeroAleatorio() }, true);
          
        }
      }}>
        <group dispose={null}>
        <mesh
            // onClick={handleBall}
            castShadow
            receiveShadow
            geometry={nodes.Type_A.geometry}
            material={materials.A}
            position={[-0.5, 0, 0]}
        />
        </group>
        <Html>
          <audio ref={audioRef} src="/sounds/collect-points.mp3" />
        </Html>
      </RigidBody>
  )
}

useGLTF.preload('models-3d/garbagebag.glb')