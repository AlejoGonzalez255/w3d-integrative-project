const House = () => {
    return (
        <group scale={[2,1,3]}>
        <mesh
        position={[0,1,0]}
        >
        <coneGeometry args={[1,1,4]}/>
        <meshStandardMaterial color="blue"/> 
        </mesh>
        <mesh>
        <boxGeometry args={[1,1,1]} />
        <meshStandardMaterial color = "red"/>
        </mesh>
        </group>
    )
};

export default House;