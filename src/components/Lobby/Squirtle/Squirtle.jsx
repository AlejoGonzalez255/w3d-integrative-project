import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import * as THREE from 'three'
import { RigidBody, CuboidCollider } from '@react-three/rapier';

export default function Squirtle(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('models-3d/Squirtle.glb')
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
    <RigidBody type="fixed" colliders={false}>
    <group ref={group} {...props} dispose={null} scale={0.03} position={[-5,0,4]} rotation={[0,2,0]}>
      <group name="Scene" onClick={handleGreeting}>
        <group name="CharacterArmature">
          <skinnedMesh
            name="Mesh_0"
            geometry={nodes.Mesh_0.geometry}
            material={materials.Material_0}
            skeleton={nodes.Mesh_0.skeleton}
            castShadow
            receiveShadow
          />
          <skinnedMesh
            name="Mesh_1"
            geometry={nodes.Mesh_1.geometry}
            material={materials.Material_1}
            skeleton={nodes.Mesh_1.skeleton}
            castShadow
            receiveShadow
          />
          <group name="Squirtle47" rotation={[-Math.PI / 2, 0, 0]} />
          <primitive object={nodes.pm0007_001} />
        </group>
      </group>
    </group>
    <CuboidCollider
          args={[0.3, 1.3, 0.3]}
          position={[-5,0,4]}
        />
    </RigidBody>
  )
}

useGLTF.preload('models-3d/Squirtle.glb')
