const Lights = () => {
  return (
    <>
      <ambientLight intensity={5.5} />
      <directionalLight 
      color={"#ffffff"}
      position={[0, 10, 10]}
      intensity={3} 
      castShadow
      shadow-camera-left={-50}
      shadow-camera-right={50}
      shadow-camera-top={50}
      shadow-camera-bottom={-50}
      shadow-camera-far={50}
      shadow-mapSize-width={10}
      shadow-mapSize-height={10}
      shadow-normalBias={0.3}
      />
    </>
  );
};

export default Lights;
