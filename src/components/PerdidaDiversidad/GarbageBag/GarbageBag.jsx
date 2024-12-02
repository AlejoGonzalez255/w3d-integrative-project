import React, { useCallback, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'

export function GarbageBag1(props) {
  const { nodes, materials } = useGLTF('models-3d/garbageBag1.glb')
  const trashRef = useRef(null);
  const handleBall = useCallback(() => {
    trashRef.current.applyImpulse({ x: 6, y: 28, z: 0 }, true);
  }, []);
  useFrame(() => {
    const position = trashRef.current.translation();
    if (position.y < -5) {
      // Si cae fuera del mundo, reposicionarlo
      trashRef.current.setTranslation({ x: 2, y: 2, z: 2 }, true);
      trashRef.current.setLinvel({ x: 0, y: 0, z: 0 }, true); // Reinicia velocidad
      trashRef.current.setAngvel({ x: 0, y: 0, z: 0 }, true); // Reinicia rotación
    }

    if( position.x < -1.5 || position.z < 0.7){
      setTimeout(() => {
        trashRef.current.setTranslation({ x: 2, y: 0.35, z: 2 }, true);
        trashRef.current.setLinvel({ x: 0, y: 0, z: 0 }, true); // Reinicia velocidad
        trashRef.current.setAngvel({ x: 0, y: 0, z: 0 }, true); // Reinicia rotación
      }, 1000); 
    }
    
  });

  return (
    <RigidBody {...props} ref={trashRef} type="dynamic" colliders="cuboid">
    <group {...props} dispose={null} position={[4,0,15]} onClick={handleBall}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.trash_bag.geometry}
        material={materials['trash bag']}
        position={[-0.462, 0.654, -0.097]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.trash_bag001.geometry}
        material={materials['trash bag']}
        position={[0.66, 0.492, 0.029]}
      />
    </group>
    </RigidBody>
  )
}

useGLTF.preload('models-3d/garbageBag1.glb')