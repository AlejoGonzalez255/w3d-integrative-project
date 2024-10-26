import "./PerdidaDiversidad.css";
import { Canvas } from "@react-three/fiber";
import Floor from "../../components/PerdidaDiversidad/Floor/Floor";
import DestroyedNature from "../../components/PerdidaDiversidad/DestroyedNature/DestroyedNature";
import Bulbasaur from "../../components/PerdidaDiversidad/Bulbasaur/Bulbasaur";
import { Physics } from "@react-three/rapier";
import { useState } from "react";
import Lights from "../../components/PerdidaDiversidad/lights/Lights";
import Staging from "../../components/PerdidaDiversidad/staging/Staging";

const PerdidaDiversidad = () => {
    const [ready, setReady] = useState(false);
    return (
        <>
        <Canvas>
        <Lights/>
        <Staging/>
        <Physics gravity={[0, -9.81, 0]} timeStep="vary" debug={true}>
          <Bulbasaur/> 
          <DestroyedNature/>
          <Floor />
        </Physics>

      </Canvas>

      <div
        onClick={() => setReady(true)}
        className={`fullscreen bg ${ready ? "ready" : "notready"} ${ready && "clicked"}`}
      >
        <button>Seguir</button>
      </div>
        </>

    );
};

export default PerdidaDiversidad;