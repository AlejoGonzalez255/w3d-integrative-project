import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function Vegetation(props) {
  const { nodes, materials } = useGLTF("models-3d/natureItems.glb");

  const arbolSecoPosiciones = [
    [-48, 0, -48], [-42, 0, -46], [-40, 0, -44], [-35, 0, -40],
    [-30, 0, -48], [-15, 0, -38], [-10, 0, -46], 
    [8, 0, -45], [15, 0, -42], [20, 0, -38],
    [35, 0, -42], [40, 0, -38], [45, 0, -48], [-48, 0, -30],
    [-42, 0, -28], [-38, 0, -25], [-30, 0, -35], [-15, 0, -30],
    [-10, 0, -20], [-5, 0, -25], [5, 0, -15], [10, 0, -28], [15, 0, -30],
    [40, 0, -30], [48, 0, -35], [-48, 0, -10],
    [-42, 0, -5], [-38, 0, 5], [-20, 0, -5],
    [-5, 0, -5], [5, 0, -5], [10, 0, -15], [15, 0, -10], [20, 0, -5],
    [25, 0, 0], [42, 0, -5], [48, 0, 5], 
    [48, 0, 15], [-18, 0, 38], [-12, 0, 20], [5, 0, -40],
    [20, 0, -35], [43, 0, -25], [40, 0, -10],
  ];

  const arbolSeco2Posiciones = [
    [-15, 0, 10], [-10, 0, -15], [-5, 0, 10], [8, 0, -10], [15, 0, 15],
    [25, 0, -10], [30, 0, 5], [38, 0, 15], [42, 0, -8], [45, 0, -5],
    [-48, 0, 10], [-35, 0, 10], [-28, 0, 15],
    [-25, 0, 20], [-15, 0, 30], [-10, 0, 35], [-5, 0, 40],
    [8, 0, 30], [15, 0, 38], [20, 0, 48], [25, 0, 44], [30, 0, 42],
    [35, 0, 38], [40, 0, 35], [45, 0, 30], [48, 0, 20], [-48, 0, 48],
    [-44, 0, 42], [-40, 0, 44], [-28, 0, 45],
    [-20, 0, 40], [-15, 0, 38], [-10, 0, 44], [-5, 0, 48], [8, 0, 42],
    [15, 0, 45], [20, 0, 38], [25, 0, 44], [30, 0, 48], [35, 0, 42],
    [40, 0, 38], [-38, 0, 0],
    [-30, 0, -15], [-28, 0, -10], [-20, 0, -5], [-15, 0, 0], [-10, 0, -15],
  ];

  const rocaPosiciones = [
    [31, 0, -40], [40, 0, -48], [-31, 0, 14], [-20, 0, 10], [-16, 0, 25],
    [21, 0, 7], [12, 0, 5], [18, 0, -15], [6, 0, 1], [-14, 0, 40], 
    [35, 0, 19], [17, 0, 21], [4, 0, 29], [-31, 0, 40], [35, 0, 19], 
    [-30, 0, 21], [-5, 0, -14], [-3, 0, 20], [-15, 0, 19], [-8, 0, -10]
  ];

  const troncoPosiciones = [[19, 0, 18], [-5, -0.4, 16], [25, -0.4, 11], [45, 0, 48], [-42, 0, 20]
                            [-30, 0, -35], [25, 0, -20], [38, 0, -10], [30, 0, -15, [-44, 0, 15]]];
                            
  const troncoCaidoPosiciones = [[-5, -0.4, 16], [-15, -0.4, -20], [5, -0.4, -8]];

  return (
    <group {...props} dispose={null}>
      {rocaPosiciones.map((posicion, index) => (
        <RigidBody type="fixed" colliders="trimesh" key={`roca-${index}`}>
          <mesh
            position={posicion}
            scale={4}
            castShadow
            receiveShadow
            geometry={nodes.Icosphere001.geometry}
            material={materials.Material}
          />
        </RigidBody>
      ))}

      {arbolSecoPosiciones.map((posicion, index) => (
        <RigidBody type="fixed" colliders="trimesh" key={`arbol-seco-${index}`}>
          <mesh
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
        <RigidBody
          type="fixed"
          colliders="trimesh"
          key={`arbol-seco2-${index}`}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane003.geometry}
            material={materials.tree}
            position={posicion}
            scale={10}
          />
        </RigidBody>
      ))}

      {troncoPosiciones.map((posicion, index) => (
        <RigidBody type="fixed" colliders="trimesh" key={`tronco-${index}`}>
          <group position={posicion} scale={0.8}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_1.geometry}
              material={materials.tree}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_2.geometry}
              material={materials["tree 2"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_3.geometry}
              material={materials["tree 3"]}
            />
          </group>
        </RigidBody>
      ))}

      {troncoCaidoPosiciones.map((posicion, index) => (
        <RigidBody
          type="fixed"
          colliders="trimesh"
          key={`tronco-caido-${index}`}
        >
          <group position={posicion} scale={0.8}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder001_1.geometry}
              material={materials.tree}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder001_2.geometry}
              material={materials["tree 2"]}
            />
          </group>
        </RigidBody>
      ))}
    </group>
  );
}

useGLTF.preload("/natureItems.glb");
export default Vegetation;