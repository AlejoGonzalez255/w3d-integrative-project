import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three';


export function NatureItems(props) {
  const { nodes, materials } = useGLTF('models-3d/natureItems.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[25,0,50]} scale={0.5}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_1.geometry}
          material={materials.tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_2.geometry}
          material={new THREE.MeshStandardMaterial({ color: '#4a901e' })}
        />
      </group>
      <group position={[27,0,18]} scale={0.5}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_1.geometry}
          material={materials.tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_2.geometry}
          material={new THREE.MeshStandardMaterial({ color: '#4a901e' })}
        />
      </group>
      <group position={[37,0,10]} scale={0.5}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_1.geometry}
          material={materials.tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_2.geometry}
          material={new THREE.MeshStandardMaterial({ color: '#4a901e' })}
        />
      </group>
      <group position={[45,0,2]} scale={0.5}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_1.geometry}
          material={materials.tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_2.geometry}
          material={new THREE.MeshStandardMaterial({ color: '#4a901e' })}
        />
      </group>
      <group position={[45,0,27]} scale={0.5}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_1.geometry}
          material={materials.tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_2.geometry}
          material={new THREE.MeshStandardMaterial({ color: '#4a901e' })}
        />
      </group>
      <group position={[-14,0,36]} scale={0.5}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_1.geometry}
          material={materials.tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_2.geometry}
          material={new THREE.MeshStandardMaterial({ color: '#4a901e' })}
        />
      </group>
      <group position={[10,0,20]} scale={0.5}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_1.geometry}
          material={materials.tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_2.geometry}
          material={new THREE.MeshStandardMaterial({ color: '#4a901e' })}
        />
      </group>
      <group position={[16, 0, 1]} scale={0.5}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004.geometry}
          material={materials.tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004_1.geometry}
          material={new THREE.MeshStandardMaterial({ color: "#438519" })}
        />
      </group>
      <group position={[46, 0, 1]} scale={0.5}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004.geometry}
          material={materials.tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004_1.geometry}
          material={new THREE.MeshStandardMaterial({ color: "#438519" })}
        />
      </group>
      <group
        position={[4, 0, 4]}
        rotation={[-Math.PI, 1.516, -Math.PI]}
        scale={0.05}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube014_1.geometry}
          material={new THREE.MeshStandardMaterial({ color: 'green' })}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube014_2.geometry}
          material={materials.oreng}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube014_3.geometry}
          material={materials['Material.003']}
        />
      </group>
      <group
        position={[3, 0, 0]}
        rotation={[Math.PI, -0.005, Math.PI]}
        scale={0.05}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={new THREE.MeshStandardMaterial({ color: 'green' })}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_2.geometry}
          material={materials.oreng}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_3.geometry}
          material={materials['Material.003']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={new THREE.MeshStandardMaterial({ color: 'green' })}
        position={[6, 0, 8]}
        rotation={[-3.099, 1.458, 3.05]}
        scale={0.05}
      />
      <group position={[9, 0, 4]} rotation={[0, -1.164, 0]} scale={0.05}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_1.geometry}
          material={new THREE.MeshStandardMaterial({ color: 'green' })}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_2.geometry}
          material={materials.oreng}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_3.geometry}
          material={materials['Material.003']}
        />
      </group>
      <group position={[-20, 0, 18]} rotation={[0, 0.356, 0]} scale={0.05}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_1.geometry}
          material={new THREE.MeshStandardMaterial({ color: 'green' })}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_2.geometry}
          material={materials.oreng}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_3.geometry}
          material={materials['Material.003']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={new THREE.MeshStandardMaterial({ color: 'green' })}
        position={[-4, 0, 0]}
        rotation={[-3.099, 1.458, 3.05]}
        scale={0.05}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials.tree}
        position={[-15, 0, 0]}
        rotation={[0, -1.491, 0]}
        scale={1}
      />
      <group position={[6, 0, 3]} scale={1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_1.geometry}
          material={materials.tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_2.geometry}
          material={materials['tree 2']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_3.geometry}
          material={materials['tree 3']}
        />
      </group>
      <group position={[-18, 0, 0]} scale={1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials.tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_2.geometry}
          material={materials['tree 2']}
        />
      </group>
      <group position={[-20, 0, -20]} scale={8}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_1.geometry}
          material={materials.look}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_2.geometry}
          material={new THREE.MeshStandardMaterial({ color: "#58a528" })}
        />
      </group>
      <group position={[-10, 0, -25]} scale={8}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_1.geometry}
          material={materials.look}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_2.geometry}
          material={new THREE.MeshStandardMaterial({ color: "#58a528" })}
        />
      </group>
      <group position={[-19, 0, -4]} scale={8}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_1.geometry}
          material={materials.look}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_2.geometry}
          material={new THREE.MeshStandardMaterial({ color: "#58a528" })}
        />
      </group>
      <group position={[-8, 0, 20]} scale={8}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_1.geometry}
          material={materials.look}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_2.geometry}
          material={new THREE.MeshStandardMaterial({ color: "#58a528" })}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={materials.tree}
        position={[7, 0, -5]}
        scale={8}
      />
      <group
        position={[-7, 0, -20]}
        rotation={[-Math.PI, 1.516, -Math.PI]}
        scale={0.05}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006_1.geometry}
          material={new THREE.MeshStandardMaterial({ color: 'green' })}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006_2.geometry}
          material={materials.oreng}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006_3.geometry}
          material={materials['Material.003']}
        />
      </group>
      <group
        position={[-29, 0, 6]}
        rotation={[-Math.PI, 1.516, -Math.PI]}
        scale={0.05}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007_1.geometry}
          material={new THREE.MeshStandardMaterial({ color: 'green' })}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007_2.geometry}
          material={materials.oreng}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007_3.geometry}
          material={materials['Material.003']}
        />
      </group>
      <group
        position={[4, 0, -8]}
        rotation={[-Math.PI, 1.516, -Math.PI]}
        scale={0.05}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_1.geometry}
          material={new THREE.MeshStandardMaterial({ color: 'green' })}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_2.geometry}
          material={materials.oreng}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_3.geometry}
          material={materials['Material.003']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere.geometry}
        material={materials.Material}
        position={[14, 0, 50]}
        rotation={0.05}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere001.geometry}
        material={materials.Material}
        position={[1, 0, 1]}
        rotation={[0, 0.099, 0.017]}
        scale={1}
      />
      <group
        position={[3, 0, 3]}
        rotation={[-Math.PI, 1.516, -Math.PI]}
        scale={0.05}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_1.geometry}
          material={new THREE.MeshStandardMaterial({ color: 'green' })}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_2.geometry}
          material={materials.oreng}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_3.geometry}
          material={materials['Material.003']}
        />
      </group>
      <group
        position={[4, 0, 4]}
        rotation={[-Math.PI, 1.516, -Math.PI]}
        scale={0.05}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010_1.geometry}
          material={new THREE.MeshStandardMaterial({ color: 'green' })}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010_2.geometry}
          material={materials.oreng}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010_3.geometry}
          material={materials['Material.003']}
        />
      </group>
      <group
        position={[6, 0, -6]}
        rotation={[-Math.PI, 1.516, -Math.PI]}
        scale={0.05}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011_1.geometry}
          material={new THREE.MeshStandardMaterial({ color: 'green' })}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011_2.geometry}
          material={materials.oreng}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011_3.geometry}
          material={materials['Material.003']}
        />
      </group>
      <group
        position={[-6, 0, -6]}
        rotation={[-Math.PI, 1.516, -Math.PI]}
        scale={0.05}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012_1.geometry}
          material={new THREE.MeshStandardMaterial({ color: 'green' })}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012_2.geometry}
          material={materials.oreng}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012_3.geometry}
          material={materials['Material.003']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube014.geometry}
        material={new THREE.MeshStandardMaterial({ color: 'green' })}
        position={[-4, 0, 4]}
        rotation={[-3.099, 1.458, 3.05]}
        scale={0.05}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube015.geometry}
        material={new THREE.MeshStandardMaterial({ color: 'green' })}
        position={[-5, 0, 5]}
        rotation={[-3.099, 1.458, 3.05]}
        scale={0.05}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube016.geometry}
        material={new THREE.MeshStandardMaterial({ color: 'green' })}
        position={[-8, 0, 6]}
        rotation={[-3.099, 1.458, 3.05]}
        scale={0.05}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube017.geometry}
        material={new THREE.MeshStandardMaterial({ color: 'green' })}
        position={[-11, 0, 11]}
        rotation={[-3.099, 1.458, 3.05]}
        scale={0.05}
      />
    </group>
  )
}

useGLTF.preload('/natureItems.glb')
export default NatureItems;