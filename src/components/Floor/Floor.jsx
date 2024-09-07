import { useRef } from "react";

const Floor = () => {
  const floorRef = useRef(null);

  return (
    <mesh ref={floorRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="#19b831" />
    </mesh>
  );
};

export default Floor;
