import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three';

export function House(props) {
  const { nodes, materials } = useGLTF('models-3d/house.glb')
  return (
    <group {...props} dispose={null}>
    <group position={[-45, 0, 25]} scale={0.055} rotation={[0,-3.2,0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wooden_Cabin_updated_Obj.geometry}
        material={new THREE.MeshStandardMaterial({ color: "#6E4C12" })}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
    </group>
  )
}

useGLTF.preload('/house.glb')
export default House;