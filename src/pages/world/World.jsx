import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PointerLockControls } from "@react-three/drei";
import * as THREE from 'three';
import House3d from "../../components/House3d/House3d";
import Tree from "../../components/Tree/Tree";
import TestDummy3d from "../../components/TestDummy/TestDummy3d";
import Floor from "../../components/Floor/Floor";
import Bulbasaur from "../../components/Bulbasaur/Bulbasaur";

const CameraControls = () => {
  const controlsRef = useRef();
  const [keyboard, setKeyboard] = useState({});

  useEffect(() => {
    const handleKeyDown = (event) => {
      setKeyboard((prev) => ({ ...prev, [event.code]: true }));
    };

    const handleKeyUp = (event) => {
      setKeyboard((prev) => ({ ...prev, [event.code]: false }));
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useFrame((state, delta) => {
    const controls = controlsRef.current;
    if (controls) {
      const moveSpeed = 2;
      const moveVector = new THREE.Vector3(0,0,0);

      if (keyboard['KeyW']) { // W key
        moveVector.z += moveSpeed * delta;
      }
      if (keyboard['KeyS']) { // S key
        moveVector.z -= moveSpeed * delta;
      }
      if (keyboard['KeyA']) { // A key
        moveVector.x -= moveSpeed * delta;
      }
      if (keyboard['KeyD']) { // D key
        moveVector.x += moveSpeed * delta;
      }

      controls.moveRight(moveVector.x);
      controls.moveForward(moveVector.z);
    }
  });

  return <PointerLockControls ref={controlsRef} />;
};

const World = () => {
  return (
    <Canvas camera={{ position: [0, 1.5, 5], fov: 75 }}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[0, 10, 10]} />

      <CameraControls />
      
      <House3d />
      <TestDummy3d />
      <Tree />
      <Floor />
      <Bulbasaur/>
    </Canvas>
  );
};

export default World;




