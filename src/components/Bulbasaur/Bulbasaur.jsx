import React from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier';


const Bulbasaur = ({ position = [0, 0, 0], ...props }) => {
  const { nodes, materials } = useGLTF('models-3d/Bulbasaur.glb')
  const bulbasaurObjects = [
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Plane_1.geometry} material={materials.Skin} />
      <mesh castShadow receiveShadow geometry={nodes.Plane_2.geometry} material={materials.Eyes} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane_3.geometry}
        material={materials.Material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane_4.geometry}
        material={materials['Material.002']}
      />
      <mesh castShadow receiveShadow geometry={nodes.Plane_5.geometry} material={materials.Tooth} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane_6.geometry}
        material={materials['Material.003']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane_7.geometry}
        material={materials['Material.001']}
      />
    </group>
  ];

return (
  <RigidBody type="fixed">
    <group position={position} {...props}>
      {bulbasaurObjects}
    </group>
    </RigidBody>
  );
};

useGLTF.preload("models-3d/Bulbasaur.glb")
export default Bulbasaur;