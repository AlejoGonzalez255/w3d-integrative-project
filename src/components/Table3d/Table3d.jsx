import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Table3d(props) {
  const { nodes, materials } = useGLTF('/models-3d//table.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.5, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Table_1.geometry}
          material={materials.Legs}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Table_2.geometry}
          material={materials.TableTop}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models-3d/table.glb')