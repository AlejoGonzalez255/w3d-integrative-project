
import { useGLTF } from '@react-three/drei'

export function Tv3d(props) {
  const { nodes, materials } = useGLTF('models-3d/tv.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.TV.geometry} material={materials.TV} />
    </group>
  )
}

useGLTF.preload('/uploads_files_2406337_TV.gltf')