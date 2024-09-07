import { Html } from "@react-three/drei";

const ButtonPanel = () => {
  return (
    <group position={[0, 2, -15]}>
      {/* Panel de UI como un plano */}
      <mesh>
        <planeGeometry args={[3, 1.5]} />
        <meshBasicMaterial color="gray"/>
      </mesh>

      {/* Contenido del panel de UI */}
      <Html>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <button onClick={() => alert('¡Botón presionado!')}>Haz clic aquí</button>
        </div>
      </Html>
    </group>
  );
};

export default ButtonPanel;
