import { RigidBody } from "@react-three/rapier";

const Floor = () => {
  return (
    <RigidBody type="fixed" position={[0, 0, 0]} > {/* Asegúrate de ajustar la altura si es necesario */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="green" />
      </mesh>
    </RigidBody>
  );
};

export default Floor;

