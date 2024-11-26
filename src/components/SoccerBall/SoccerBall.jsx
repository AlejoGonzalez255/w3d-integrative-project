import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function SoccerBall(props) {
  const { nodes, materials } = useGLTF("models-3d/soccer_ball.glb");
  const soccerBallRef = useRef(null);

  const handleCollision = (event) => {
    console.log("Collision detected with:", event.colliderObject);
    soccerBallRef.current.applyImpulse({ x: 0.5, y: 0.3, z: -0.5 }, true);
  };

  const handleClick = () => {
    console.log("Soccer ball clicked!");
    soccerBallRef.current.applyImpulse({ x: 0.5, y: 0.5, z: 0 }, true);
  };

  return (
    <RigidBody
      ref={soccerBallRef}
      type="dynamic"
      colliders="hull"
      onCollisionEnter={handleCollision}
      mass={1}
      restitution={0.1}
      friction={0.9}
      linearDamping={0.5}
      angularDamping={0.5}
    >
      <group {...props} dispose={null} onClick={handleClick}>
        <group position={[0, 3, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere_1.geometry}
            material={materials.Base}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere_2.geometry}
            material={materials["Material.001"]}
          />
        </group>
      </group>
    </RigidBody>
  );
}

useGLTF.preload("models-3d/soccer_ball.glb");
