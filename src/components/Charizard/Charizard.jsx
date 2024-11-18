import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import * as THREE from 'three'

export default function Charizard(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('models-3d/Charizard.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    if (actions.Appers) {
      actions.Appers.reset().setLoop(THREE.LoopOnce).play()
      actions.Appers.clampWhenFinished = true

      actions.Appers.getMixer().addEventListener('finished', () => {
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
    <group ref={group} {...props} dispose={null} scale={0.03} position={[0,0,-70]} >
      <group name="Scene" onClick={handleGreeting}>
        <group name="CharacterArmature">
          <group name="Charizard87" rotation={[-Math.PI / 2, 0, 0]} />
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
          <skinnedMesh
            name="Mesh_4"
            geometry={nodes.Mesh_4.geometry}
            material={materials.Material_4}
            skeleton={nodes.Mesh_4.skeleton}
          />
          <primitive object={nodes.pm0006_001} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('models-3d/Charizard.glb')
