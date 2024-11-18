import React, { useCallback, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export function PokeBall(props) {
  const { nodes, materials } = useGLTF('models-3d/pokeball.glb')
  const pokeBallRef = useRef(null);
  const handleBall = useCallback(() => {
    pokeBallRef.current.applyImpulse({ x: -1, y: 1, z: 0 }, true);
  }, []);

  return (
    <RigidBody ref={pokeBallRef} type="dynamic" colliders="hull" >
        <group onClick={handleBall} {...props}  dispose={null}>
        <group position={[1.997, 2.361, 0]} rotation={[0, 0, -1.568]} scale={[0.657, 0.112, 0.657]}>
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001.geometry}
            material={materials['Material.004']}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001_1.geometry}
            material={materials['Material.005']}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001_2.geometry}
            material={materials['Material.001']}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001_3.geometry}
            material={materials['Material.002']}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001_4.geometry}
            material={materials['Material.003']}
            />
        </group>
        </group>
    </RigidBody>
  )
}

useGLTF.preload('models-3d/pokeball.glb')