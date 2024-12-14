import { useGLTF } from "@react-three/drei";

export function WoodenSings(props) {
  const { nodes, materials } = useGLTF("models-3d/WoodenSigns.glb");

  return (
    <group {...props} dispose={null}>
      <group
        position={[3, 0, 8]}
        rotation={[0, 1.571, 0]}
        scale={[9, 4, 4]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign12_1.geometry}
          material={materials["Dark Wood"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign12_2.geometry}
          material={materials["Light Wood"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign12_3.geometry}
          material={materials.Herbs}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign12_4.geometry}
          material={materials.Rocks}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Lowpoly Wooden Signs.glb");
export default WoodenSings;