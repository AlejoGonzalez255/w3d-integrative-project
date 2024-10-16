import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";
import { CapsuleCollider, RigidBody } from "@react-three/rapier";

const SPEED = 5;
const direction = new THREE.Vector3();
const frontVector = new THREE.Vector3();
const sideVector = new THREE.Vector3();

export function Player() {
  const playerRef = useRef();
  const [, get] = useKeyboardControls();

  useFrame((state) => {
    if (!playerRef.current) return;

    const { forward, backward, left, right } = get();
    const velocity = playerRef.current.linvel();

    // Movimiento de la cámara 
    const playerPosition = playerRef.current.translation();
    state.camera.position.set(playerPosition.x, playerPosition.y, playerPosition.z); 
    
    // Movimiento del jugador
    frontVector.set(0, 0, backward - forward);
    sideVector.set(left - right, 0, 0);

    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)
      .applyEuler(state.camera.rotation);

    playerRef.current.setLinvel({ x: direction.x, y: velocity.y, z: direction.z });
  });

  return (
    <RigidBody
      ref={playerRef}
      colliders="capsule"
      mass={1}
      type="dynamic"
      position={[0, 1, 0]} // Iniciar el jugador justo encima del suelo
      enabledRotations={[false, false, false]}
    >
      <CapsuleCollider args={[0.75, 0.5]} />
    </RigidBody>
  );
}
