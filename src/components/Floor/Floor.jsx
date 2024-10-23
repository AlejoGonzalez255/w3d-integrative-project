import { useTexture } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useMemo } from "react";
import { RepeatWrapping, roughness } from "three/webgpu";

const Floor = () => {
  const PATH = useMemo(()=> "materials/floor/brown_mud_leaves_01_",[]);
  const floorTexture = useTexture({
      map: PATH + "diff_1k.jpg",
      displacementMap: PATH + "disp_1k.png",
      normalMap: PATH + "nor_gl_1k.jpg",
      roughnessMap: PATH + "rough_1k.jpg",
      aoMap: PATH + "ao_1k.jpg",
  })

  floorTexture.map.wrapS = floorTexture.map.wrapT = RepeatWrapping;
  floorTexture.map.repeat.set(100,100)

  floorTexture.aoMap.wrapS = floorTexture.aoMap.wrapT = RepeatWrapping;
  floorTexture.aoMap.repeat.set(100,100)

  floorTexture.normalMap.wrapS = floorTexture.normalMap.wrapT = RepeatWrapping;
  floorTexture.normalMap.repeat.set(100,100)

  floorTexture.roughnessMap.wrapS = floorTexture.roughnessMap.wrapT = RepeatWrapping;
  floorTexture.roughnessMap.repeat.set(100,100)

  floorTexture.displacementMap.wrapS = floorTexture.displacementMap.wrapT = RepeatWrapping;
  floorTexture.displacementMap.repeat.set(100,100)

  return (
    <RigidBody type="fixed" friction={0.65} restitution={0.2} position={[0, 0, 0]} > {/* Asegúrate de ajustar la altura si es necesario */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial 
        map={floorTexture.map}
        normalMap={floorTexture.map}
        displacementMap={floorTexture.map}
        roughnessMap={floorTexture.map}
        aoMap={floorTexture.map}
        roughness={0.001}
        />
      </mesh>
    </RigidBody>
  );
};

export default Floor;

