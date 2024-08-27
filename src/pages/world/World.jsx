import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import House from "./House";

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
        <House/>
    </Canvas>;
    
};


export default World;