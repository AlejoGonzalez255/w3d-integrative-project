import React from 'react';
import { useGLTF } from '@react-three/drei';
import Ecctrl from "ecctrl"; // Asegúrate de importar desde "ecctrl"
import { KeyboardControls } from '@react-three/drei';

const Bulbasaur = ({ ...props}) => {
  const { nodes, materials } = useGLTF('models-3d/Bulbasaur.glb');  

  const keyboardMap = [
    { name: "forward", keys: ["ArrowUp", "KeyW"] },
    { name: "backward", keys: ["ArrowDown", "KeyS"] },
    { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
    { name: "rightward", keys: ["ArrowRight", "KeyD"] },
    { name: "jump", keys: ["Space"] },
    { name: "run", keys: ["Shift"] },
    // Optional animation key map
    { name: "action1", keys: ["1"] },
    { name: "action2", keys: ["2"] },
    { name: "action3", keys: ["3"] },
    { name: "action4", keys: ["KeyF"] },
  ];

  return (
    <KeyboardControls map={keyboardMap}>
    <Ecctrl 
      followCamera
      scale={2}
      speed={5}
      jumpForce={10}
      rotateSpeed={2}
      onMove={(direction) => {
        console.log("Moving:", direction); // Verificar que detecta movimiento
      }}
    >
      <group dispose={null}>
        <mesh castShadow receiveShadow geometry={nodes.Plane_1.geometry} material={materials.Skin} />
        <mesh castShadow receiveShadow geometry={nodes.Plane_2.geometry} material={materials.Eyes} />
        <mesh castShadow receiveShadow geometry={nodes.Plane_3.geometry} material={materials.Material} />
        <mesh castShadow receiveShadow geometry={nodes.Plane_4.geometry} material={materials['Material.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane_5.geometry} material={materials.Tooth} />
        <mesh castShadow receiveShadow geometry={nodes.Plane_6.geometry} material={materials['Material.003']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane_7.geometry} material={materials['Material.001']} />
      </group>
    </Ecctrl>
    </KeyboardControls>
  );
};

useGLTF.preload("models-3d/Bulbasaur.glb");
export default Bulbasaur;
