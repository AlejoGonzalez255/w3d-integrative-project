import { RigidBody } from "@react-three/rapier";

export default function Floor(props) {
  return (
    <RigidBody
      type="fixed"
      colliders="cuboid"
      ccd
      friction={0.65}
      restitution={0.3}
      {...props}
    >
      <mesh position={[0, -5, 0]} receiveShadow={true}>
 
        <boxGeometry args={[100, 10, 100]} />
        <meshStandardMaterial color={"#f9d54e"} />
      </mesh>
    </RigidBody>
  );
}