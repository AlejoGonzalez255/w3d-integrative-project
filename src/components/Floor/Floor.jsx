import {useRef} from "react";

const Floor = () => {
    const floor = useRef(null);

    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="lightgray" />
        </mesh>
    );
  };


export default Floor