import { useRef } from 'react';

const House3d = () => {
  const house = useRef(null);
  // const coneRef = useRef(null);

  // useFrame((state, delta) => {
  //   const elapsedTime = state.clock.getElapsedTime();
  //   house.current.position.y = Math.cos(elapsedTime) * 2;
  //   house.current.position.x = Math.sin(elapsedTime) * 2;
  //   house.current.rotation.y += 1 * delta;

  //   // coneRef.current.position.y = Math.cos(elapsedTime) * 4;
  //   // coneRef.current.position.x = Math.sin(elapsedTime) * 2;
  //   // coneRef.current.rotation.y += 1 * delta;
  // });

  return (
    <group ref={house} scale={[2, 1, 3]}>
      <mesh position={[0, 2, 0]} rotation={[0, Math.PI * 0.25, 0]}>
        <coneGeometry args={[1, 1, 4]} />
        <meshStandardMaterial color="#8946ea" />
      </mesh>
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#931045" />
      </mesh>
    </group>
  );
};
 

export default House3d
