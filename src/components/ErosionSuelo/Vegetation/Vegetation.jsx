import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function Vegetation(props) {
  const { nodes, materials } = useGLTF("models-3d/natureItems.glb");

  // Árboles Secos
  const arbolSecoPosiciones = [
    [-18, 0, -3],
    [-6, 0, 10],
    [3, 0, -5],
    [-16, 0, 9],
    [-9, 0, -7],
    [20, 0, 7],
    [7.5, 0, -5],
    [4, 0, 4],
    [12, 0, -12],
  ];

  const arbolSeco2Posiciones = [
    [-14, 0, -12],
    [-10, 0, 8],
    [6, 0, 15],
    [-8, 0, 13],
    [-5, 0, -6],
    [7, 0, 13],
    [12, 0, 11],
    [9, 0, 7],
    [15, 0, 5],
  ];

  return (
    <group {...props} dispose={null}>
      {arbolSecoPosiciones.map((posicion, index) => (
        <RigidBody type="fixed" colliders="trimesh">
          <mesh
            key={`arbol-seco-${index}`}
            castShadow
            receiveShadow
            geometry={nodes.Plane001.geometry}
            material={materials.tree}
            position={posicion}
            scale={13}
          />
        </RigidBody>
      ))}

      {arbolSeco2Posiciones.map((posicion, index) => (
        <RigidBody type="fixed" colliders="trimesh">
          <mesh
            key={`arbol-seco2-${index}`}
            castShadow
            receiveShadow
            geometry={nodes.Plane003.geometry}
            material={materials.tree}
            position={posicion}
            scale={10}
          />
        </RigidBody>
      ))}
    </group>
  );
}

useGLTF.preload("/natureItems.glb");
export default Vegetation;