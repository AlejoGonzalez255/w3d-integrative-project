import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export default function GarbageContainer(props) {
    const { nodes, materials } = useGLTF('models-3d/trash.glb')
    return (
        <RigidBody {...props} type="fixed" colliders="trimesh">
            <group  dispose={null}>
                <group position={[-0.012, 0.042, 0.002]} rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                    <group position={[-148.18, 0, 47.565]} rotation={[0, Math.PI / 3, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.cap_trash_can_mat_0001.geometry}
                        material={materials.trash_can_mat}
                        position={[3.666, 121.795, -58.184]}
                        rotation={[1.772, 0, 0]}
                        scale={100}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.trash_can_finish_trash_can_mat_0001.geometry}
                        material={materials.trash_can_mat}
                        position={[3.73, 70.102, 0.195]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.wheel_1_trash_can_mat_0001.geometry}
                        material={materials.trash_can_mat}
                        position={[-35.224, 19.525, 35.597]}
                        rotation={[-Math.PI / 2, 0, 1.92]}
                        scale={100}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.wheel_2_trash_can_mat_0001.geometry}
                        material={materials.trash_can_mat}
                        position={[42.683, 19.525, 35.597]}
                        rotation={[-Math.PI / 2, 0, 1.745]}
                        scale={100}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.wheel_3_trash_can_mat_0001.geometry}
                        material={materials.trash_can_mat}
                        position={[-35.224, 19.525, -35.208]}
                        rotation={[-Math.PI / 2, 0, -2.443]}
                        scale={100}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.wheel_4_trash_can_mat_0001.geometry}
                        material={materials.trash_can_mat}
                        position={[42.683, 19.525, -35.208]}
                        rotation={[-Math.PI / 2, 0, 2.182]}
                        scale={100}
                    />
                    </group>
                </group>
                </group>
            </group>
        </RigidBody>
    )
}

useGLTF.preload('models-3d/trash.glb')
