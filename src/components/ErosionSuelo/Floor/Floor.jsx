import { RigidBody } from "@react-three/rapier";
import { useTexture } from "@react-three/drei";

export default function Floor(props) {
  const floorTexture = useTexture("materials/floor/dry_floor.jpg");
  return (
    <RigidBody
      type="fixed"
      colliders="cuboid"
      ccd
      friction={0.65}
      restitution={0.2}
      {...props}
    >
      <mesh position={[0, -5, 0]} receiveShadow={true}>
        <cylinderGeometry args={[100, 50, 10, 32]} />
        <meshStandardMaterial map={floorTexture} />
      </mesh>
    </RigidBody>
  );
}