import React, { useRef, useMemo } from 'react';
import { useGraph, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';

export function Xd(props) {
  const { scene } = useGLTF('/scene.gltf');
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);

  const groupRef = useRef(null);

  // Animar el modelo GLTF
  useFrame((state, delta) => {
    if (groupRef.current) {
      const elapsedTime = state.clock.getElapsedTime();
      groupRef.current.position.y = Math.sin(elapsedTime) * 2; // Movimiento vertical
      groupRef.current.position.x = Math.cos(elapsedTime) * 2; // Movimiento horizontal
      groupRef.current.rotation.y += 0.5 * delta; // Rotación
    }
  });

  return (
    <group {...props} dispose={null} ref={groupRef}>
      <group position={[10, 0, 1]} rotation={[-Math.PI / 1, -2, 1.5]} scale={0.1}>
        <primitive object={nodes._rootJoint} />
        <group position={[0, 1, 0]} scale={1}>
          <mesh geometry={nodes['0'].geometry} material={materials['Material.001']} />
          <mesh geometry={nodes['1'].geometry} material={materials.Material} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/scene.gltf');


const House = () => {
  const boxRef = useRef(null);
  const coneRef = useRef(null);

  useFrame((state, delta) => {
    const elapsedTime = state.clock.getElapsedTime();
    boxRef.current.position.y = Math.cos(elapsedTime) * 2;
    boxRef.current.position.x = Math.sin(elapsedTime) * 2;
    boxRef.current.rotation.y += 1 * delta;

    coneRef.current.position.y = Math.cos(elapsedTime) * 4;
    coneRef.current.position.x = Math.sin(elapsedTime) * 2;
    coneRef.current.rotation.y += 1 * delta;
  });

  return (
    <group scale={[2, 1, 3]}>
      <mesh ref={coneRef} position={[0, 1, 0]} rotation={[0, Math.PI * 0.25, 0]}>
        <coneGeometry args={[1, 1, 4]} />
        <meshStandardMaterial color="blue" />
      </mesh>
      <mesh ref={boxRef}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </group>
  );
};

const Scene = () => {
  return (
    <group>
      {/* Render the GLTF model */}
      <Xd position={[0, 0, 0]} />
      
      {/* Render the animated house */}
      <House position={[5, 0, 0]} />
    </group>
  );
};

export default Scene;
