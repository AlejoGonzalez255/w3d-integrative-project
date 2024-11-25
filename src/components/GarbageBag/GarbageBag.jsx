
import React, { useCallback, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export function GarbageBag(props) {
  const { nodes, materials } = useGLTF('models-3d/garbagebag.glb')
  const trashRef = useRef(null);
  const handleBall = useCallback(() => {
    trashRef.current.applyImpulse({ x: -0.7, y: 1.4, z: -0.3 }, true);
  }, []);
  return (
    <RigidBody {...props} ref={trashRef} type="dynamic" colliders="cuboid">
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