import { useGLTF } from "@react-three/drei";
import useModalSummaryStore from "../../../stores/use-modalSummary-state";

export function WoodenSings(props) {
  const { nodes, materials } = useGLTF("models-3d/WoodenSigns.glb");
  const { setModalSummary, setModalSummaryData } = useModalSummaryStore();

  const handleNavigatetoPerdidaDiversidad = () => {
    setModalSummaryData({
      title: "Perdida de Diversidad",
      description:
        "La perdida de diversidad es un problema que afecta a la fauna y flora de nuestro planeta. La perdida de diversidad se produce por la destruccion de los habitats naturales, la caza furtiva y la contaminacion ambiental. La perdida de diversidad afecta a la cadena alimenticia y a la estabilidad de los ecosistemas.",
      navigate: "/PerdidaDiversidad",
    });
    setModalSummary(true);
  };

  const handleNavigatetoDeforestacion = () => {
    setModalSummaryData({
      title: "Deforestacion",
      description:
        "La deforestacion es un problema que afecta a los bosques de nuestro planeta. La deforestacion se produce por la tala de arboles, la quema de bosques y la expansion de la agricultura y la ganaderia. La deforestacion afecta al clima, a la biodiversidad y a la calidad del aire y del agua.",
      navigate: "/Deforestacion",
    });
    setModalSummary(true);
  };

  const handleNavigatetoErosionSuelo = () => {
    setModalSummaryData({
      title: "Erosion del Suelo",
      description:
        "La erosion del suelo es un problema que afecta a la fertilidad de la tierra. La erosion del suelo se produce por la deforestacion, la agricultura intensiva y el cambio climatico. La erosion del suelo afecta a la produccion de alimentos, a la calidad del agua y a la estabilidad de los ecosistemas.",
      navigate: "/ErosionSuelo",
    });
    setModalSummary(true);
  };

  const handleNavigatetoQuiz = () => {
    setModalSummaryData({
      title: "Mini juego",
      description:
        "Salva el planeta de los pokemones limpiando la mayor cantidad de basura que puedas en 1 min, si rompes el record tu nombre sera mostrado en el podio el principio",
      navigate: "/Quiz",
    });
    setModalSummary(true);
  };

  const handlePointerOver = () => {
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = () => {
    document.body.style.cursor = "auto";
  };
  return (
    <group {...props} dispose={null}>
      <group
        position={[-11, 0, 10]}
        rotation={[0, 1.571, 0]}
        scale={[2, 2, 3]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={handleNavigatetoErosionSuelo}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign12_1.geometry}
          material={materials["Dark Wood"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign12_2.geometry}
          material={materials["Light Wood"]}
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
      <group
        position={[10, 0, 10]}
        rotation={[0, 1.571, 0]}
        scale={[2, 2, 3]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={handleNavigatetoDeforestacion}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign12_1.geometry}
          material={materials["Dark Wood"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign12_2.geometry}
          material={materials["Light Wood"]}
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
      <group
        position={[0, 0, 10]}
        rotation={[0, 1.571, 0]}
        scale={[2, 2, 3]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={handleNavigatetoPerdidaDiversidad}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign12_1.geometry}
          material={materials["Dark Wood"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign12_2.geometry}
          material={materials["Light Wood"]}
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
      <group
        position={[-22, 0, 10]}
        rotation={[0, 1.571, 0]}
        scale={[2, 2, 3]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={handleNavigatetoQuiz}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign12_1.geometry}
          material={materials["Dark Wood"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign12_2.geometry}
          material={materials["Light Wood"]}
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
    </group>
  );
}

useGLTF.preload("/Lowpoly Wooden Signs.glb");
export default WoodenSings;
