import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import Lights from "../../components/lights/Lights";
import Staging from "../../components/staging/Staging";
import { Physics } from "@react-three/rapier";
import Bulbasaur from "../../components/Bulbasaur/Bulbasaur";
import Floor from "../../components/ErosionSuelo/Floor/Floor";
import Vegetation from "../../components/ErosionSuelo/Vegetation/Vegetation";
import ButtonStart from "../../components/ButtonStart/ButtonStart";

const ErosionSuelo = () => {
  const [ready, setReady] = useState(false);
  return (
    <>
      <Canvas shadows>
        <Lights />
        <Staging />
        <Physics gravity={[0, -9.81, 0]} timeStep="vary" debug={true}>
          <Bulbasaur />
          <Vegetation />
          <Floor />
        </Physics>
      </Canvas>

      <div
        onClick={() => setReady(true)}
        className={`fullscreen bg ${ready ? "ready" : "notready"} ${
          ready && "clicked"
        }`}
      >
        <ButtonStart />
      </div>
    </>
  );
};

export default ErosionSuelo;