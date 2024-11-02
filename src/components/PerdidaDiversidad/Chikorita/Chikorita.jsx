import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import * as THREE from 'three'
import { RigidBody, CuboidCollider } from '@react-three/rapier';

export default function Chikorita(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('models-3d/Chikorita.glb')
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
          <skinnedMesh
            name="Mesh_2"
            geometry={nodes.Mesh_2.geometry}
            material={materials.Material_2}
            skeleton={nodes.Mesh_2.skeleton}
            castShadow
            receiveShadow
          />
          <skinnedMesh
            name="Mesh_3"
            geometry={nodes.Mesh_3.geometry}
            material={materials.Material_3}
            skeleton={nodes.Mesh_3.skeleton}
            castShadow
            receiveShadow
          />
          <skinnedMesh
            name="Mesh_4"
            geometry={nodes.Mesh_4.geometry}
            material={materials.Material_4}
            skeleton={nodes.Mesh_4.skeleton}
            castShadow
            receiveShadow
          />
          <skinnedMesh
            name="Mesh_5"
            geometry={nodes.Mesh_5.geometry}
            material={materials.Material_5}
            skeleton={nodes.Mesh_5.skeleton}
            castShadow
            receiveShadow
          />
          <skinnedMesh
            name="Mesh_6"
            geometry={nodes.Mesh_6.geometry}
            material={materials.Material_6}
            skeleton={nodes.Mesh_6.skeleton}
            castShadow
            receiveShadow
          />
          <skinnedMesh
            name="Mesh_7"
            geometry={nodes.Mesh_7.geometry}
            material={materials.Material_7}
            skeleton={nodes.Mesh_7.skeleton}
            castShadow
            receiveShadow
          />
          <primitive object={nodes.pm0152_001} />
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

useGLTF.preload('models-3d/Chikorita.glb')