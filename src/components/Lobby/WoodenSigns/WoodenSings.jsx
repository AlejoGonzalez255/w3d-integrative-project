
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { deflate } from 'three/examples/jsm/libs/fflate.module.js'
import { useNavigate } from "react-router-dom";

export function WoodenSings(props) {
  const { nodes, materials } = useGLTF('models-3d/WoodenSigns.glb')
  const navigate = useNavigate();

  const handleNavigatetoPerdidaDiversidad = () => {
    navigate("/PerdidaDiversidad");
  };

  const handleNavigatetoDeforestacion = () => {
    navigate("/Deforestacion");
  };

  const handleNavigatetoErosionSuelo = () => {
    navigate("/ErosionSuelo");
  };
  return (
    <group {...props} dispose={null}>
        {/*Cartel pequeño
      <group position={[6, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign1_1.geometry}
          material={materials['Light Wood']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign1_2.geometry}
          material={materials['Dark Wood']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign1_3.geometry}
          material={materials.Herbs}
        />
      </group>

      */}
        {/*Cartel japones Circulo
      <group position={[9, 0, 0]} rotation={[0, -1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign2_1.geometry}
          material={materials.Rocks}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign2_2.geometry}
          material={materials['Dark Wood']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign2_3.geometry}
          material={materials['Light Wood']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign2_4.geometry}
          material={materials.Herbs}
        />
      </group>
      */}
      {/*Cartel de señalizacion 3 tablas
      <group position={[-0.185, 0, -3]} rotation={[0, -1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign3_1.geometry}
          material={materials['Dark Wood']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign3_2.geometry}
          material={materials['Light Wood']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign3_3.geometry}
          material={materials.Herbs}
        />
      </group>
      */}
      {/*Cartel cuadrado pequeño
      <group position={[3, 0, -3]} rotation={[0, -1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign4_1.geometry}
          material={materials.Rocks}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign4_2.geometry}
          material={materials['Dark Wood']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign4_3.geometry}
          material={materials['Light Wood']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign4_4.geometry}
          material={materials.Herbs}
        />
      </group>
      */}
      {/*2 Cartel de señalizacion 3 tablas
      <group position={[6, 0, -3]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign5_1.geometry}
          material={materials['Light Wood']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign5_2.geometry}
          material={materials['Dark Wood']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign5_3.geometry}
          material={materials.Herbs}
        />
      </group>
      */}
      {/*Cartel de señalizacion 2 tablas
      <group position={[9, 0, -3]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign6_1.geometry}
          material={materials['Light Wood']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign6_2.geometry}
          material={materials['Dark Wood']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign6_3.geometry}
          material={materials.Herbs}
        />
      </group>
      */}
      {/*2 Cartel cuadrado pequeño
      <group position={[0.01, 0, -6]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign7_1.geometry}
          material={materials['Light Wood']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign7_2.geometry}
          material={materials['Dark Wood']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign7_3.geometry}
          material={materials.Herbs}
        />
      </group>
      */}
      {/*Cartel Cuadrado Mediano
      <group position={[0.295, 0, -8.675]} rotation={[0, -1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign8_1.geometry}
          material={materials['Dark Wood']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign8_2.geometry}
          material={materials['Light Wood']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign8_3.geometry}
          material={materials.Herbs}
        />
      </group>
      */}
      {/*3 Cartel cuadrado pequeño
      <group position={[6, 0, -6]} rotation={[0, -1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign9_1.geometry}
          material={materials['Dark Wood']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign9_2.geometry}
          material={materials['Light Wood']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign9_3.geometry}
          material={materials.Rocks}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign9_4.geometry}
          material={materials.Herbs}
        />
      </group>
      */}
      {/*3 Cartel cuadrado pequeño bordeado
      <group position={[9, 0, -6]} rotation={[0, -1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign10_1.geometry}
          material={materials['Dark Wood']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign10_2.geometry}
          material={materials['Light Wood']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign10_3.geometry}
          material={materials.Rocks}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign10_4.geometry}
          material={materials.Herbs}
        />
      </group>
      */}
      {/*4 Cartel cuadrado pequeño
      <group position={[2.84, 0, -5.938]} scale={0.312}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign11_1.geometry}
          material={materials.Herbs}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign11_2.geometry}
          material={materials['Light Wood']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign11_3.geometry}
          material={materials['Dark Wood']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign11_4.geometry}
          material={materials.Rocks}
        />
      </group>
      */}
      {/*Cartel Cuadrado Grande*/}
      <group position={[-11, 0, 10]} rotation={[0, 1.571, 0]} scale={[2,2,3]} onClick={handleNavigatetoErosionSuelo}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign12_1.geometry}
          material={materials['Dark Wood']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign12_2.geometry}
          material={materials['Light Wood']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign12_3.geometry}
          material={materials.Herbs}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign12_4.geometry}
          material={materials.Rocks}
        />
      </group>
      {/*Cartel Cuadrado Grande*/}
      <group position={[10, 0, 10]} rotation={[0, 1.571, 0]} scale={[2,2,3]} onClick={handleNavigatetoDeforestacion}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign12_1.geometry}
          material={materials['Dark Wood']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign12_2.geometry}
          material={materials['Light Wood']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign12_3.geometry}
          material={materials.Herbs}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign12_4.geometry}
          material={materials.Rocks}
        />
      </group>
      {/*Cartel Cuadrado Grande*/}
      <group position={[0, 0, 10]} rotation={[0, 1.571, 0]} scale={[2,2,3]} onClick={handleNavigatetoPerdidaDiversidad}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign12_1.geometry}
          material={materials['Dark Wood']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign12_2.geometry}
          material={materials['Light Wood']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign12_3.geometry}
          material={materials.Herbs}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign12_4.geometry}
          material={materials.Rocks}
        />
      </group>
      {/*5 Cartel Cuadrado Pequeño
      <group position={[-0.347, 0, -0.062]} rotation={[0, -1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign13_1.geometry}
          material={materials.Rocks}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign13_2.geometry}
          material={materials['Dark Wood']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign13_3.geometry}
          material={materials['Light Wood']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign13_4.geometry}
          material={materials.Herbs}
        />
      </group >
      */}
      {/*Rocas decorativas
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rock_4.geometry}
        material={materials.Rocks}
        position={[5.035, -0.011, -9.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rock_1.geometry}
        material={materials.Rocks}
        position={[3, 0, -8.878]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rock_3.geometry}
        material={materials.Rocks}
        position={[6.738, 0.011, -9.117]}
      />
      */}
      {/*Hierbas decorativas
      <group position={[9.602, -0.011, -9.193]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rock_2_1.geometry}
          material={materials['Herbs.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rock_2_2.geometry}
          material={materials['Rocks.001']}
        />
      </group>
      */}
    </group>
  )
}

useGLTF.preload('/Lowpoly Wooden Signs.glb')
export default WoodenSings;