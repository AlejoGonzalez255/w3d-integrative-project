import { RigidBody } from "@react-three/rapier";

export default function Floor(props){
  return (
    <RigidBody
      type="fixed"
      colliders="trimesh"    
      ccd                
      friction={0.65}
      restitution={0.2}
      {...props}          
    >
      <mesh
        position={[0,-5, 0]}
        receiveShadow={true}
      >
        <cylinderGeometry args={[100, 50, 10, 32]} />
        <meshStandardMaterial color="#228B22" />
      </mesh>
    </RigidBody>
  );
};


