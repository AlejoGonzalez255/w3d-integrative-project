import { useRef, useMemo} from "react";
import { useGraph, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";

function TestDummy3d(props) {
  const { scene } = useGLTF("/models-3d/scene.gltf");
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);

  const groupRef = useRef(null);

  // Animar el modelo GLTF
  useFrame((state, delta) => {
    if (groupRef.current) {
      const elapsedTime = state.clock.getElapsedTime();
      const distance = 20; // Distancia a moverse horizontalmente
  
      // Movimiento vertical 
      groupRef.current.position.y = Math.sin(elapsedTime) * 5;
  
      // Movimiento horizontal progresivo ida y vuelta
      groupRef.current.position.z = Math.sin(elapsedTime / 4) * distance; // Movimiento suavizado de ida y vuelta
  
      // Eliminamos la rotación
      groupRef.current.rotation.y = 0; // No hay más rotación

    }
  });
  

  return (
    <group {...props} dispose={null} ref={groupRef}>
      <group position={[10, 5, 1]} rotation={[1, 5, 1]} scale={0.1}>
        <primitive object={nodes._rootJoint} />
        <group position={[0, 1, 0]} scale={1}>
          <mesh
            geometry={nodes["0"].geometry}
            material={materials["Material.001"]}
          />
          <mesh geometry={nodes["1"].geometry} material={materials.Material} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/scene.gltf");

export default TestDummy3d;
