import { useTexture } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useMemo } from "react";
import { RepeatWrapping } from "three";

const Floor = () => {
  const PATHS = useMemo(() => [
    "materials/floor/aerial_grass_rock_",  // Primera variación de textura
    "materials/floor/brown_mud_leaves_01_",   // Segunda variación de textura
  ], []);

  // Cargar todas las texturas en un array
  const floorTextures = PATHS.map(PATH => useTexture({
    map: PATH + "diff_1k.jpg",
    normalMap: PATH + "nor_gl_1k.jpg",
    roughnessMap: PATH + "rough_1k.jpg",
    aoMap: PATH + "ao_1k.jpg",
  }));

  // Configuración de las texturas para repetirse
  floorTextures.forEach(textureSet => {
    textureSet.map.wrapS = textureSet.map.wrapT = RepeatWrapping;
    textureSet.map.repeat.set(14, 14);  // Ajusta según tu necesidad

    textureSet.aoMap.wrapS = textureSet.aoMap.wrapT = RepeatWrapping;
    textureSet.aoMap.repeat.set(14, 14);

    textureSet.normalMap.wrapS = textureSet.normalMap.wrapT = RepeatWrapping;
    textureSet.normalMap.repeat.set(14, 14);

    textureSet.roughnessMap.wrapS = textureSet.roughnessMap.wrapT = RepeatWrapping;
    textureSet.roughnessMap.repeat.set(14, 14);
  });

  const sections = 10;  // Número de subdivisiones del suelo

  return (
    <>
      {Array.from({ length: sections }, (_, i) => (
        <RigidBody key={i} type="fixed" friction={0.65} restitution={0.2}>
          <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0,0,0]}
            receiveShadow
          >
            <circleGeometry args={[100, 100]} />
            <meshStandardMaterial
              map={floorTextures[i % floorTextures.length].map}  // Textura aleatoria
              normalMap={floorTextures[i % floorTextures.length].normalMap}
              roughnessMap={floorTextures[i % floorTextures.length].roughnessMap}
              aoMap={floorTextures[i % floorTextures.length].aoMap}
              roughness={1}
              metalness={0.1}
            />
          </mesh>
        </RigidBody>
      ))}
    </>
  );
};

export default Floor;


