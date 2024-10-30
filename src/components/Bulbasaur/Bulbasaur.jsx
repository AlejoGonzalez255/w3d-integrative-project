import React from 'react'
import { useGLTF} from '@react-three/drei'


const Bulbasaur = ({ ...props }) => {
  const { nodes, materials } = useGLTF('models-3d/Bulbasaur2.glb')

  return (

    <group scale={0.01} position={[0,-0.25,0]} rotation={[0,0,0]}>
      <group name="Scene">
        <group name="pm0001_00">
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
          <skinnedMesh
            name="Mesh_5"
            geometry={nodes.Mesh_5.geometry}
            material={materials.Material_5}
            skeleton={nodes.Mesh_5.skeleton}
          />
          <primitive object={nodes.pm0001_001} />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("models-3d/Bulbasaur2.glb");
export default Bulbasaur;
