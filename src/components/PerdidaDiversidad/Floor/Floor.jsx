import { RigidBody } from "@react-three/rapier";

const Floor = () => {
  return (
    <>
        <RigidBody type="fixed" friction={0.65} restitution={0.2}> 
          <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0,0,0]}
            receiveShadow
          >
            <circleGeometry args={[100, 100]} />
            <meshStandardMaterial
              color="#DFCD59"  
              roughness={1}
              metalness={0.1} 
            />
          </mesh>
        </RigidBody>
    </>
  );
};

export default Floor;


