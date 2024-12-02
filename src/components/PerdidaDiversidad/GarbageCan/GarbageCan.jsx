import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three';
import { RigidBody, CuboidCollider } from '@react-three/rapier';

export function GarbageCan(props) {
  const { nodes, materials } = useGLTF('models-3d/garbageCan.glb')
  return (
    <RigidBody type="fixed" colliders="trimesh">
    <group {...props} dispose={null} scale={0.8} position={[10,0,17]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle.geometry}
        material={new THREE.MeshStandardMaterial({ color: '#4a901e' })}
        position={[0, 0.18, 0]}
        scale={1.22}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle001.geometry}
        material={new THREE.MeshStandardMaterial({ color: '#6b6e58' })}
        position={[0, 0.18, 0]}
        scale={1.22}
      />
    </group>
    </RigidBody>
  )
}

useGLTF.preload('models-3d/garbageCan.glb')