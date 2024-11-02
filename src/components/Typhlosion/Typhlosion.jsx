import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import * as THREE from 'three'

export default function Typhlosion(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('models-3d/Typhlosion.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    if (actions.Appears) {
      actions.Appears.reset().setLoop(THREE.LoopOnce).play()
      actions.Appears.clampWhenFinished = true

      actions.Appears.getMixer().addEventListener('finished', () => {
        actions.Idle?.reset().play()
      })
    }
  }, [actions])

  const handleGreeting = () => {
    if (actions.Greeting) {

      actions.Idle?.stop()
      actions.Greeting.reset().setLoop(THREE.LoopOnce).play()



      actions.Greeting.getMixer().addEventListener('finished', () => {
        actions.Idle?.reset().play()

      })
    }
  }
  return (
    <group ref={group} {...props} dispose={null} scale={0.03} position={[0,0,70]} rotation={[0,3,0]}>
      <group name="Scene" onClick={handleGreeting}>
        <group name="CharacterArmature">
          <skinnedMesh
            name="Mesh_0"
            geometry={nodes.Mesh_0.geometry}
            material={materials.Material_0}
            skeleton={nodes.Mesh_0.skeleton}
          />
          <skinnedMesh
            name="Mesh_1"
            geometry={nodes.Mesh_1.geometry}
            material={materials.Material_1}
            skeleton={nodes.Mesh_1.skeleton}
          />
          <skinnedMesh
            name="Mesh_2"
            geometry={nodes.Mesh_2.geometry}
            material={materials.Material_2}
            skeleton={nodes.Mesh_2.skeleton}
          />
          <skinnedMesh
            name="Mesh_3"
            geometry={nodes.Mesh_3.geometry}
            material={materials.Material_3}
            skeleton={nodes.Mesh_3.skeleton}
          />
          <group name="Typhlosion71" rotation={[-Math.PI / 2, 0, 0]} />
          <primitive object={nodes.pm0157_001} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('models-3d/Typhlosion.glb')
