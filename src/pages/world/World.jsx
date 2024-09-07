import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, PointerLockControls } from "@react-three/drei";
import * as THREE from 'three';
import House3d from "../../components/House3d/House3d";
import Tree from "../../components/Tree/Tree";
import TestDummy3d from "../../components/TestDummy/TestDummy3d";
import Floor from "../../components/Floor/Floor";
import ButtonPanel from "../../components/ButtonPanel/ButtonPanel";

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
      const moveSpeed = 5;
      const moveVector = new THREE.Vector3();

      if (keyboard['KeyW']) {
        moveVector.z += moveSpeed * delta;
      }
      if (keyboard['KeyS']) {
        moveVector.z -= moveSpeed * delta;
      }
      if (keyboard['KeyA']) {
        moveVector.x -= moveSpeed * delta;
      }
      if (keyboard['KeyD']) {
        moveVector.x += moveSpeed * delta;
      }

      controls.moveRight(moveVector.x);
      controls.moveForward(moveVector.z);
    }
  });

  return <PointerLockControls ref={controlsRef} />;
};

const Raycaster = ({ onClick }) => {
  const raycasterRef = useRef(new THREE.Raycaster());
  const mouse = new THREE.Vector2(); // Actualizado para usar la posición del ratón
  const { camera, scene } = useThree();

  useEffect(() => {
    const handleMouseClick = (event) => {
      // Actualizar la posición del ratón
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      const raycaster = raycasterRef.current;
      raycaster.setFromCamera(mouse, camera);

      // Detectar intersecciones
      const intersects = raycaster.intersectObjects(scene.children, true);
      if (intersects.length > 0) {
        if (onClick) {
          onClick(intersects[0].object);
        }
      }
    };

    window.addEventListener('click', handleMouseClick);
    return () => {
      window.removeEventListener('click', handleMouseClick);
    };
  }, [camera, scene, mouse, onClick]);

  return null;
};

const Reticle = () => {
  return (
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '5px',
      height: '5px',
      backgroundColor: 'black',
      borderRadius: '50%',
      transform: 'translate(-50%, -50%)',
      pointerEvents: 'none'
    }} />
  );
};

const World = () => {
  const [intersected, setIntersected] = useState(null);

  const handleRaycastClick = (object) => {
    setIntersected(object);
    console.log("Clicked on:", object.name); // Manejar clic
  };

  return (
    <>
      <Canvas camera={{ position: [0, 1.5, 5], fov: 75 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[0, 10, 10]} />
        
        <CameraControls />
        <Raycaster onClick={handleRaycastClick} />
        
        <House3d />
        <TestDummy3d />
        <Tree />
        <Floor />
        <ButtonPanel />
      </Canvas>

      <Reticle /> {/* Retículo centrado */}
    </>
  );
};

export default World;
