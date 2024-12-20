import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three';
import { RigidBody, CuboidCollider } from '@react-three/rapier';

export function DestroyedNature(props) {
  const { nodes, materials } = useGLTF('models-3d/natureItems.glb')

// Árboles pino
const arbolPinoPosiciones = [
];

// Árboles normales
const arbolNormalPosiciones = [
];

// Flores
const florPosiciones = [
];

// Hierba
const hierbaPosiciones = [
];

// Troncos en pie
const troncoPosiciones = [
  [-35, 0, 35], [25, 0, -25], [-30, 0, -5], [20, 0, 25], [-15, 0, 15],
  [10, 0, -30], [5, 0, 20], [-25, 0, 10], [30, 0, -15], [8, 0, -8],
  [-5, 0, -35], [18, 0, 10], [0, 0, 15], [-10, 0, 25], [22, 0, -22],
  [-18, 0, -15], [10, 0, 5], [15, 0, 35], [-25, 0, 30]
];

// Troncos caídos
const troncoCaidoPosiciones = [
  [-40, 0, -35], [15, 0, -25],  
];

// Rocas
const rocaPosiciones = [
  [12, 0, -18], [-10, 0, 20], [25, 0, -15], [18, 0, 28],
  [-20, 0, -10], [5, 0, -5], [30, 0, 20], [-15, 0, 35],
  [-22, 0, 22], [15, 0, -12], [5, 0, -25]
];


  const arbolSeco2Posiciones = [
    [-35, 0, 45], [40, 0, -50], [-45, 0, -15], [5, 0, 40], [-20, 0, -40], 
    [30, 0, -35], [45, 0, 15], [-5, 0, -45], [20, 0, -30], [-40, 0, 5],
    [10, 0, 40], [-35, 0, -25], [15, 0, -45], [5, 0, -35]
  ];

  const arbolSecoPosiciones = [
    [25, 0, 30], [-30, 0, 20], [10, 0, -35], [-20, 0, -20], [35, 0, 25],
    [-15, 0, 40], [25, 0, -20], [5, 0, 45], [50, 0, -30], [0, 0, -50],
    [-25, 0, 35], [15, 0, -45], [40, 0, -10], [-40, 0, 10]
  ];



  return (
    
    <group {...props} dispose={null}>

      {arbolPinoPosiciones.map((posicion, index) => (
        <RigidBody type="fixed" colliders="cuboid" scale={[3, 3, 3]}>
        <group key={`arbol-pino-${index}`} position={posicion} scale={0.2}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003_1.geometry}
            material={materials.tree}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003_2.geometry}
            material={new THREE.MeshStandardMaterial({ color: '#4a901e' })}
          />
        </group>
        </RigidBody>
      ))}
      

      {arbolNormalPosiciones.map((posicion, index) => (
        <RigidBody type="fixed" colliders="cuboid" scale={[3, 3, 3]}>
        <group key={`arbol-normal-${index}`} position={posicion} scale={7}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001_1.geometry}
            material={materials.look}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001_2.geometry}
            material={new THREE.MeshStandardMaterial({ color: "#58a528" })}
          />
        </group>
        </RigidBody>
      ))}


      {florPosiciones.map((posicion, index) => (
        <group key={`flor-${index}`} position={posicion} scale={0.03}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube014_1.geometry}
            material={new THREE.MeshStandardMaterial({ color: 'green' })}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube014_2.geometry}
            material={materials.oreng}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube014_3.geometry}
            material={materials['Material.003']}
          />
        </group>
      ))}


      {hierbaPosiciones.map((posicion, index) => (
        <mesh key={`hierba-${index}`} position={posicion} scale={0.03}
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={new THREE.MeshStandardMaterial({ color: 'green' })}
        />
      ))}


      {arbolSecoPosiciones.map((posicion, index) => (
        <RigidBody type="fixed" colliders={false}>
        <mesh
          key={`arbol-seco-${index}`}
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials.tree}
          position={posicion}
          scale={11}
        />
        <CuboidCollider
          args={[0.5, 11, 0.5]}
          position={posicion} 
        />
        </RigidBody>
      ))}

      {troncoPosiciones.map((posicion, index) => (
        <RigidBody type="fixed" colliders={false}>
        <group key={`tronco-${index}`} position={posicion} scale={0.8}>
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
            material={materials['tree 2']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_3.geometry}
            material={materials['tree 3']}
          />
        </group>
        <CuboidCollider
          args={[0.7, 1, 0.7]}
          position={posicion} 
        />
        </RigidBody>
      ))}

      {troncoCaidoPosiciones.map((posicion, index) => (
        <RigidBody type="fixed" colliders="cuboid">
        <group key={`tronco-caido-${index}`} position={posicion} scale={0.8}>
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
            material={materials['tree 2']}
          />
        </group>
        </RigidBody>
      ))}


      {arbolSeco2Posiciones.map((posicion, index) => (
        <RigidBody type="fixed" colliders={false}>
        <mesh
          key={`arbol-seco2-${index}`}
          castShadow
          receiveShadow
          geometry={nodes.Plane003.geometry}
          material={materials.tree}
          position={posicion}
          scale={8}
        />
        <CuboidCollider
          args={[0.5, 8, 0.5]}
          position={posicion} 
        />
        </RigidBody>
      ))}

      {rocaPosiciones.map((posicion, index) => (
        <RigidBody type="fixed" colliders={false}>
        <mesh key={`roca-${index}`} position={posicion} scale={4}
          castShadow
          receiveShadow
          geometry={nodes.Icosphere001.geometry}
          material={materials.Material}
        />
        <CuboidCollider
          args={[0.6, 0.6, 0.6]}
          position={posicion} 
        />
        </RigidBody>
      ))}

    </group>
  )
}

useGLTF.preload('/natureItems.glb')
export default DestroyedNature;