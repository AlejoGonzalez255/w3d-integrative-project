import React from "react";
import { useGLTF } from "@react-three/drei";

const Tree = ({ position = [0, -1, 6], ...props }) => {
  const { nodes, materials } = useGLTF("models-3d/tree.glb");

  // Crear un grupo para solo los objetos del árbol, excluyendo el suelo (Plane)
  const treeObjects = [
    <mesh
      key="cube"
      castShadow
      receiveShadow
      geometry={nodes.Cube.geometry}
      material={materials["Material.001"]}
      position={[0, 0.827, 0]}
      scale={3.58}
    />,
    <mesh
      key="icosphere"
      castShadow
      receiveShadow
      geometry={nodes.Icosphere.geometry}
      material={materials["Material.002"]}
      position={[0, 10.323, -3.024]}
    />,
    <mesh
      key="icosphere1"
      castShadow
      receiveShadow
      geometry={nodes.Icosphere001.geometry}
      material={materials["Material.003"]}
      position={[-0.747, 14.895, -2.207]}
      scale={1.301}
    />,
    <mesh
      key="icosphere2"
      castShadow
      receiveShadow
      geometry={nodes.Icosphere002.geometry}
      material={materials["Material.005"]}
      position={[0.765, 14.702, 4.05]}
      scale={1.697}
    />,
    <mesh
      key="icosphere3"
      castShadow
      receiveShadow
      geometry={nodes.Icosphere003.geometry}
      material={materials["Material.004"]}
      position={[-1.802, 13.475, 0.353]}
      scale={0.533}
    />,
  ];

  return (
    <group position={position} {...props}>
      {treeObjects}
    </group>
  );
};

useGLTF.preload("models-3d/tree.glb");

export default Tree;