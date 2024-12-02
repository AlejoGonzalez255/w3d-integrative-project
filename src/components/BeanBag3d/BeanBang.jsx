import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export function BeanBang(props) {
  const { nodes, materials } = useGLTF('/models-3d/beanBag.glb')
  return (
    <RigidBody colliders="trimesh" type="fixed" {...props}>
      <group dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bean_bag.geometry}
          material={materials.Bean_bag}
        />
      </group>
    </RigidBody>  
  )
}

useGLTF.preload('/models-3d/beanBag.glb')