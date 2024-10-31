import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { color, Return } from "three/webgpu";

export function Vegetation(props) {
  const { nodes, materials } = useGLTF("models-3d/natureItems.glb");

  // Árboles pino
  const arbolPinoPosiciones = [[4, 0, 5], [1, 0, 9], [1.5, 0, -2.5], [-6, 0, 7], [-4, 0, -18], [6, 0, 15]];

  return (
    <group {...props} dispose={null}>
      {arbolPinoPosiciones.map((posicion, index) => (
        <group
          key={`arbol-pino-${index}`}
          position={posicion}
          scale={0.2 + Math.random() * 0.2}
        >
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
            material={new THREE.MeshStandardMaterial({ color: "#4a901e" })}
          />
        </group>
      ))}
    </group>
  );
}

useGLTF.preload("/natureItems.glb");
export default Vegetation;
