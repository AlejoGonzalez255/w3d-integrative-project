import { RigidBody } from "@react-three/rapier";

const Floor = (props) => {
  return (
    <RigidBody
      type="fixed"
      colliders="cuboid"    
      ccd                
      friction={0.65}
      restitution={0.2}
      {...props}          
    >
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
        receiveShadow={true}
      >
        <circleGeometry args={[100, 100]} />
        <meshStandardMaterial color="#228B22" />
      </mesh>
    </RigidBody>
  );
};

export default Floor;



