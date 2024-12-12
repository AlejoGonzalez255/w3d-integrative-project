
import React, { useCallback, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'


export function GarbageBag(props) {
  const { nodes, materials } = useGLTF('models-3d/garbagebag.glb')
  const trashRef = useRef(null);
  const handleBall = useCallback(() => {
    trashRef.current.applyImpulse({ x: -0.7, y: 1.4, z: -0.3 }, true);
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
    <RigidBody name='GarbageBag' {...props} ref={trashRef} type="dynamic" colliders="cuboid">
        
        <group dispose={null}>
        <mesh
            onClick={handleBall}
            castShadow
            receiveShadow
            geometry={nodes.Type_A.geometry}
            material={materials.A}
            position={[-0.5, 0, 0]}
        />
        </group>
        </RigidBody>
  )
}

useGLTF.preload('models-3d/garbagebag.glb')