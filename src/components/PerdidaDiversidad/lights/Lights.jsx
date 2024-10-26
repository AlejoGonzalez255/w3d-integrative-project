const Lights = () => {
  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight 
      color={"#ffffff"}
      position={[100, 100, 100]}
      intensity={3} 
      castShadow
      shadow-camera-left={5}
      shadow-camera-right={5}
      shadow-camera-top={5}
      shadow-camera-bottom={5}
      shadow-camera-far={5}
      shadow-mapSize-width={1}
      shadow-mapSize-height={1}
      shadow-normalBias={0.3}
      />
    </>
  );
};

export default Lights;
