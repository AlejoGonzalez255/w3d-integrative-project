import { RigidBody } from "@react-three/rapier";

export default function Walls() {
  const wallThickness = 1;
  const wallHeight = 10; 
  const floorSize = 101; 

  return (
    <>
      {/* Muro frontal */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[0, wallHeight / 2, floorSize / 2]}>
          <boxGeometry args={[floorSize, wallHeight, wallThickness]} />
          <meshStandardMaterial color="transparent" transparent={true} opacity={0} />
        </mesh>
      </RigidBody>

      {/* Muro trasero */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[0, wallHeight / 2, -floorSize / 2]}>
          <boxGeometry args={[floorSize, wallHeight, wallThickness]} />
          <meshStandardMaterial color="transparent" transparent={true} opacity={0} />
        </mesh>
      </RigidBody>

      {/* Muro izquierdo */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[-floorSize / 2, wallHeight / 2, 0]}>
          <boxGeometry args={[wallThickness, wallHeight, floorSize]} />
          <meshStandardMaterial color="transparent" transparent={true} opacity={0} />
        </mesh>
      </RigidBody>

      {/* Muro derecho */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[floorSize / 2, wallHeight / 2, 0]}>
          <boxGeometry args={[wallThickness, wallHeight, floorSize]} />
          <meshStandardMaterial color="transparent" transparent={true} opacity={0} />
        </mesh>
      </RigidBody>
    </>
  );
}