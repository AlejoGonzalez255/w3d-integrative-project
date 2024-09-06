import { PointerLockControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import House3d from "../../components/House3d/House3d";
import TestDummy3d from "../../components/TestDummy/TestDummy3d";
import Floor from "../../components/Floor/Floor";

const World = () => {
  return (
    <Canvas camera={{ position: [-10, 1, 1], fov: 75 }}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[0, 10, 10]} />

      {/* Control estilo FPS */}
      <PointerLockControls movementSpeed={5} />
      
      <House3d />
      <TestDummy3d />
      <Floor/>
    </Canvas>
  );
};

export default World;


