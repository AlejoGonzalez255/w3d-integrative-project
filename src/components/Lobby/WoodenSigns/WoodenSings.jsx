import { useGLTF } from '@react-three/drei'
import useModalSummaryStore from '../../../stores/use-modalSummary-state';

export function WoodenSings(props) {
  const { nodes, materials } = useGLTF('models-3d/WoodenSigns.glb')
  const { setModalSummary, setModalSummaryData } = useModalSummaryStore();

  const handleNavigatetoPerdidaDiversidad = () => {
    setModalSummaryData({ title: "Perdida de Diversidad", description: "La perdida de diversidad es un problema que afecta a la fauna y flora de nuestro planeta. La perdida de diversidad se produce por la destruccion de los habitats naturales, la caza furtiva y la contaminacion ambiental. La perdida de diversidad afecta a la cadena alimenticia y a la estabilidad de los ecosistemas.", navigate: "/PerdidaDiversidad" });
    setModalSummary(true);
  };

  const handleNavigatetoDeforestacion = () => {
    setModalSummaryData({ title: "Deforestacion", description: "La deforestacion es un problema que afecta a los bosques de nuestro planeta. La deforestacion se produce por la tala de arboles, la quema de bosques y la expansion de la agricultura y la ganaderia. La deforestacion afecta al clima, a la biodiversidad y a la calidad del aire y del agua.", navigate: "/Deforestacion" });
    setModalSummary(true);
  };
  
  const handleNavigatetoErosionSuelo = () => {
    setModalSummaryData({ title: "Erosion del Suelo", description: "La erosion del suelo es un problema que afecta a la fertilidad de la tierra. La erosion del suelo se produce por la deforestacion, la agricultura intensiva y el cambio climatico. La erosion del suelo afecta a la produccion de alimentos, a la calidad del agua y a la estabilidad de los ecosistemas.", navigate: "/ErosionSuelo" });
    setModalSummary(true);
  };

  const handlePointerOver = () => {
    // Cambia el cursor al puntero
    document.body.style.cursor = 'pointer';
    
  };
  
  const handlePointerOut = () => {
    // Restablece el cursor al normal
    document.body.style.cursor = 'auto';
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
      <group 
        position={[-11, 0, 10]} rotation={[0, 1.571, 0]} scale={[2,2,3]} 
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={handleNavigatetoErosionSuelo}
        
      >
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
      <group 
        position={[10, 0, 10]} rotation={[0, 1.571, 0]} scale={[2,2,3]} 
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={handleNavigatetoDeforestacion}>
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
      <group 
        position={[0, 0, 10]} rotation={[0, 1.571, 0]} scale={[2,2,3]} 
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={handleNavigatetoPerdidaDiversidad}>
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