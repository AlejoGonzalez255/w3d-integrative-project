const Lights = () => {
  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight
        color={"#ffffff"}
        position={[100, 100, 100]}
        intensity={3}
        castShadow
        shadow-camera-left={-50}
        shadow-camera-right={50}
        shadow-camera-top={50}
        shadow-camera-bottom={-50}
        shadow-camera-far={200}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-normalBias={0.05}
      />

    </>
  );
};

export default Lights;

