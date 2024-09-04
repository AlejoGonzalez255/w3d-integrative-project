import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import House3d from "../../components/House3d/House3d";
import TestDummy3d from "../../components/TestDummy/TestDummy3d";

const World = () => { 
    return <Canvas
        camera={
            {
            position: [3,5,5] 
            }
        }
        >
        <ambientLight intensity={1.5}/>
        <directionalLight position={[0,10,10]}/>
        <OrbitControls/>
        <House3d />
        <TestDummy3d />
    </Canvas>;
    
};


export default World;