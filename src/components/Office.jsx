/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useState } from 'react'
import { Html, useGLTF, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import codinggif from '../assets/coding.mp4' 

export function Office(props) {
  const { nodes, materials } = useGLTF('models/NoTextureModel2.gltf')

  const floorandothersTexture = useTexture("textures/FloorANDother.jpg")
  floorandothersTexture.flipY=false
  floorandothersTexture.encoding=THREE.sRGBEncoding

  const floorandothersTextureMaterial= new THREE.MeshStandardMaterial({
    map: floorandothersTexture,
  })

  const wallandothersTexture = useTexture("textures/wallAndOthers_Texture_Baked.jpg")
  wallandothersTexture.flipY=false
  wallandothersTexture.encoding=THREE.sRGBEncoding

  const wallandothersTextureMaterial= new THREE.MeshStandardMaterial({
    map: wallandothersTexture,
  })

  const chairTexture = useTexture("textures/chair_Texture_Baked.jpg")
  chairTexture.flipY=false
  chairTexture.encoding=THREE.sRGBEncoding

  const chairTextureMaterial= new THREE.MeshStandardMaterial({
    map: chairTexture,
  })

  const WallpaperTexture = useTexture("textures/WallpaperAndMackBookAndMonitor_Texture_Baked.jpg")
  WallpaperTexture.flipY=false
  WallpaperTexture.encoding=THREE.sRGBEncoding

  const WallpaperTextureMaterial= new THREE.MeshStandardMaterial({
    map: WallpaperTexture,
  })

  const TableTexture = useTexture("textures/TableDeskTopANDIpad_Texture_Baked.jpg")
  TableTexture.flipY=false
  TableTexture.encoding=THREE.sRGBEncoding

  const TableTextureMaterial= new THREE.MeshStandardMaterial({
    map: TableTexture,
  })


  const keyboardTexture = useTexture("textures/keyboardmatBaked.jpg")
  keyboardTexture.flipY=false
  keyboardTexture.encoding=THREE.sRGBEncoding

  const keyboardTextureMaterial= new THREE.MeshStandardMaterial({
    map: keyboardTexture,
  })


  const fanRef=useRef()
  const materialRef=useRef()

  const [clicked, setClicked] = useState(false)
  const markRef= useRef();
  const vec =new THREE.Vector3()

  useFrame((state)=>{
    fanRef.current.rotation.x+=0.1
    const markRefPostion= new THREE.Vector3()

    /*if(clicked){
      console.log(markRef.current.getWorldPosition(markRefPostion))
      state.camera.lookAt(markRef.current.position)
      state.camera.position.lerp(vec.set(-3.323, 3, 0.639), 0.01)
      state.camera.updateProjectionMatrix
    }*/
  })
  

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane006.geometry}
        material={chairTextureMaterial}
        position={[0, 1.02, 0]}
        rotation={[Math.PI, -0.268, Math.PI]}
        scale={1.154}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={chairTextureMaterial}
          position={[-0.363, 0.695, 0]}
          rotation={[0, 0, 0.019]}
          scale={[1.757, 1.757, 1.728]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube028.geometry}
          material={chairTextureMaterial}
          position={[0, -0.542, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube029.geometry}
          material={chairTextureMaterial}
          position={[0, -0.078, -0.239]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube030.geometry}
          material={chairTextureMaterial}
          position={[-0.21, -0.105, 0]}
          scale={1.566}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube031.geometry}
          material={chairTextureMaterial}
          position={[-0.413, 0.781, 0]}
          rotation={[0, 0, 0.029]}
          scale={[1.757, 1.757, 1.728]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006.geometry}
          material={chairTextureMaterial}
          position={[0, -0.542, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008.geometry}
          material={chairTextureMaterial}
          position={[0, -0.135, 0]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Desk_Mat.geometry}
        material={keyboardTextureMaterial}
        position={[-1.597, 1.51, -0.095]}
      />
      <group position={[-1.731, 1.534, -0.777]} rotation={[-Math.PI / 2, 0, 0]} scale={0.002}>
        <group position={[-31.108, -30.714, -1.885]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_3.geometry}
            material={floorandothersTextureMaterial}
            position={[-47.079, -19.056, 0]}
            scale={1.7}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Table_Top.geometry}
        material={TableTextureMaterial}
        position={[-1.961, 1.432, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Table_Leg.geometry}
          material={materials['Table Chair']}
          position={[0.052, -0.737, 2.236]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={floorandothersTextureMaterial}
        position={[-3.008, 3.689, -1.322]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curtain.geometry}
        material={wallandothersTextureMaterial}
        position={[-1.442, 2.304, -3.429]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curtain_Holder.geometry}
        material={materials['Curtain White Top']}
        position={[0.165, 4.221, -3.401]}
        scale={[1.235, 1.397, 0.125]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Window_Base001.geometry}
        material={wallandothersTextureMaterial}
        position={[0.165, 2.992, -3.602]}
      />
      <group position={[-1.954, 1.986, -1.925]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012.geometry}
          material={wallandothersTextureMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012_1.geometry}
          material={wallandothersTextureMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012_2.geometry}
          material={wallandothersTextureMaterial}
        />
        <group position={[0.526, -0.073, 0.141]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004.geometry}
            material={wallandothersTextureMaterial}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004_1.geometry}
            material={wallandothersTextureMaterial}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CPU_Inner.geometry}
          material={wallandothersTextureMaterial}
          position={[-0.052, -0.188, -0.06]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube005.geometry}
            material={wallandothersTextureMaterial}
            position={[0.019, -0.229, 0.175]}
            scale={[0.27, 0.064, 0.063]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube011.geometry}
            material={wallandothersTextureMaterial}
            position={[-0.394, -0.171, 0.06]}
            scale={[0.08, 0.102, 0.137]}
          />
          <group position={[-0.478, 0.188, 0.06]} rotation={[0, 0, -Math.PI / 2]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder007.geometry}
              material={materials.Glass}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder007_1.geometry}
              material={wallandothersTextureMaterial}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder007_2.geometry}
              material={materials['Fan Black']}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            ref={fanRef}
            geometry={nodes.Fan_Blades.geometry}
            material={materials['Fan Black']}
            position={[-0.373, 0.188, 0.06]}
            rotation={[1.256, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Fan-middle'].geometry}
            material={materials['Fan Black']}
            position={[-0.407, 0.188, 0.06]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={0.561}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CPU_Top_Air_Window.geometry}
          material={wallandothersTextureMaterial}
          position={[-0.386, 0.502, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CPU_Light001.geometry}
          material={wallandothersTextureMaterial}
          position={[0.552, -0.137, 0.141]}
          scale={0.012}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CPU_Light.geometry}
        material={wallandothersTextureMaterial}
        position={[-2.23, 1.846, -2.044]}
        scale={[0.033, 0.264, 0.011]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CPU_Light_2.geometry}
        material={materials['CPU Light Yellow']}
        position={[-2.092, 1.602, -1.916]}
        scale={[0.015, 0.053, 0.011]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CPU_Light_2001.geometry}
        material={wallandothersTexture}
        position={[-1.579, 1.764, -1.961]}
        scale={[0.015, 0.26, 0.064]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CPU_Light_2002.geometry}
        material={materials['CPU Light Blue']}
        position={[-2.3, 1.789, -2.124]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-0.015, -0.069, -0.039]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CPU_Light_2004.geometry}
        material={wallandothersTexture}
        position={[-2.036, 1.647, -1.923]}
        rotation={[0.004, -0.006, -0.007]}
        scale={[0.015, 0.036, 0.038]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cup.geometry}
        material={floorandothersTextureMaterial}
        position={[-1.112, 1.628, -1.955]}
        rotation={[0, -0.896, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus001.geometry}
          material={floorandothersTextureMaterial}
          position={[0, 0, -0.11]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.067}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus002.geometry}
        material={materials.Cup}
        position={[-3.517, 4.052, -2.064]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.085}
      />
      <group position={[-1.258, 1.528, -1.515]} rotation={[0, 0.23, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049.geometry}
          material={floorandothersTextureMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049_1.geometry}
          material={floorandothersTextureMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.iPhone_Button.geometry}
          material={floorandothersTextureMaterial}
          position={[-0.068, -0.001, 0.104]}
          scale={1.077}
        />
      </group>
      <group position={[-1.466, 1.535, 1.474]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube038.geometry}
          material={TableTextureMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube038_1.geometry}
          material={TableTextureMaterial}
        />
        <group position={[-0.228, 0.013, 0.156]} scale={1.395}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube046.geometry}
            material={TableTextureMaterial}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube046_1.geometry}
            material={TableTextureMaterial}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.iPad_camera.geometry}
          material={TableTextureMaterial}
          position={[-0.262, 0.034, 0.126]}
          scale={0.942}
        />
      </group>
      <group position={[-1.574, 1.533, 0.079]} scale={[1, 1, 1.029]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006_1.geometry}
          material={keyboardTextureMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006_2.geometry}
          material={keyboardTextureMaterial}
        />
        <group position={[-0.001, -0.017, 0]} rotation={[0, 0, -0.049]} scale={[1, 1, 0.972]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Keyboard.geometry}
            material={keyboardTextureMaterial}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Keyboard_1.geometry}
            material={keyboardTextureMaterial}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Keyboard_2.geometry}
            material={keyboardTextureMaterial}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Keyboard_3.geometry}
            material={keyboardTextureMaterial}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Keyboard_4.geometry}
            material={keyboardTextureMaterial}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube018.geometry}
        material={WallpaperTextureMaterial}
        position={[-2.394, 1.53, 1.746]}
        rotation={[0, 0.174, 0]}>
        <group position={[-0.43, 0.365, 0]} rotation={[0, 0, -1.418]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube041.geometry}
            material={materials['Mac Screen Black']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube041_1.geometry}
            material={materials['Mac Screen Wallpaper']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube041_2.geometry}
            material={WallpaperTextureMaterial}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube041_3.geometry}
            material={materials['Mac Apple Logo']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube020.geometry}
          material={WallpaperTextureMaterial}
          position={[-0.002, -0.001, 0]}
        />
      </mesh>
      <group position={[-2.638, 2.492, 0]}>
        
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013.geometry}
          material={materials['LG Screen Body']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013_1.geometry}
          material={materials['Monitor Screen']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Screeb_Vase_.geometry}
          material={materials['LG Screen Body']}
          position={[-0.14, -0.967, -0.74]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Screen_Handle.geometry}
          material={materials['LG Screen Body']}
          position={[-0.207, -0.666, -0.739]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Screen_Holder.geometry}
          material={nodes.Screen_Holder.material}
          position={[-0.094, 0, 0]}
          scale={[0.733, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Screen_Holder_Arm.geometry}
          material={nodes.Screen_Holder_Arm.material}
          position={[-0.155, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Screen_Holder_Arm_.geometry}
          material={nodes.Screen_Holder_Arm_.material}
          position={[-0.234, -0.075, -0.562]}
          rotation={[0, -0.16, 0]}
        />
      </group>
      <group position={[-1.229, 0.3, 2.916]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder016.geometry}
          material={floorandothersTextureMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder016_1.geometry}
          material={floorandothersTextureMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002.geometry}
          material={floorandothersTextureMaterial}
          position={[0, 0.086, 0]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere.geometry}
        material={floorandothersTextureMaterial}
        position={[-0.623, 0.058, 2.635]}
        rotation={[2.026, -1.105, 2.695]}
        scale={[0.066, 0.086, 0.053]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={nodes.Cylinder001.material}
        position={[-2.915, 2.459, -0.315]}
        scale={0.197}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pot.geometry}
        material={wallandothersTextureMaterial}
        position={[-2.633, 1.508, -1.366]}>
        <mesh
          castShadow
          receiveShadow
          ref={materialRef}
          geometry={nodes.Circle002.geometry}
          material={keyboardTextureMaterial}
          position={[-0.107, 0.241, 0.007]}
          rotation={[Math.PI, 0, -2.432]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle003.geometry}
          material={keyboardTextureMaterial}
          position={[-0.079, 0.258, -0.085]}
          rotation={[2.994, 0.971, -2.102]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle004.geometry}
          material={keyboardTextureMaterial}
          position={[0.115, 0.231, 0.031]}
          rotation={[2.981, 0.628, -1.079]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle005.geometry}
          material={keyboardTextureMaterial}
          position={[0.039, 0.219, -0.109]}
          rotation={[-0.631, 0.263, 1.265]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle006.geometry}
          material={keyboardTextureMaterial}
          position={[0.021, 0.215, 0.089]}
          rotation={[-2.29, 0.517, -1.664]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle007.geometry}
          material={keyboardTextureMaterial}
          position={[-0.052, 0.26, 0.114]}
          rotation={[-2.757, -0.44, -2.041]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle008.geometry}
          material={keyboardTextureMaterial}
          position={[0.084, 0.22, -0.055]}
          rotation={[2.955, -0.796, -1.194]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle009.geometry}
          material={keyboardTextureMaterial}
          position={[-0.012, 0.308, -0.117]}
          rotation={[-0.859, -0.763, 1.492]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle010.geometry}
          material={keyboardTextureMaterial}
          position={[0.101, 0.276, 0.084]}
          rotation={[-1.973, -0.911, -0.733]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle011.geometry}
          material={keyboardTextureMaterial}
          position={[0.048, 0.289, -0.038]}
          rotation={[-0.671, -0.597, 0.912]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle012.geometry}
          material={keyboardTextureMaterial}
          position={[-0.021, 0.354, -0.016]}
          rotation={[-0.034, -0.463, 1.704]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle013.geometry}
          material={keyboardTextureMaterial}
          position={[0.096, 0.292, -0.01]}
          rotation={[-0.043, -0.024, 0.887]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle014.geometry}
          material={keyboardTextureMaterial}
          position={[-0.05, 0.378, 0.031]}
          rotation={[2.948, -0.672, -2.031]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle015.geometry}
          material={keyboardTextureMaterial}
          position={[0.037, 0.357, -0.067]}
          rotation={[2.83, -0.05, -1.572]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle016.geometry}
          material={keyboardTextureMaterial}
          position={[0.005, 0.349, -0.003]}
          rotation={[0.137, -0.15, 1.501]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle017.geometry}
          material={keyboardTextureMaterial}
          position={[0.036, 0.247, 0.019]}
          rotation={[0.256, -0.469, 1.342]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle018.geometry}
          material={keyboardTextureMaterial}
          position={[0.015, 0.349, 0.055]}
          rotation={[-2.615, -1.231, -1.552]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle019.geometry}
          material={keyboardTextureMaterial}
          position={[-0.005, 0.297, 0.064]}
          rotation={[0.555, -0.257, 1.846]}
          scale={[1.179, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle020.geometry}
          material={keyboardTextureMaterial}
          position={[0.067, 0.352, -0.119]}
          rotation={[2.577, 0.07, 1.721]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere004.geometry}
          material={wallandothersTextureMaterial}
          position={[0.01, 0.175, 0.007]}
          rotation={[0, 0.081, 0]}
          scale={[0.116, 0.026, 0.116]}
        />
      </mesh>
      <group
        position={[-3.15, 3.918, -1.382]}
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
        scale={[2.838, 1.675, 2.086]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book1_1.geometry}
          material={materials['Book Orange']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book1_2.geometry}
          material={materials.Book1_side_material}
        />
        <group
          position={[-0.032, -0.025, 0.072]}
          rotation={[-0.15, 0, 0]}
          scale={[1, 1.292, 0.917]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Book0_1.geometry}
            material={WallpaperTextureMaterial}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Book0_2.geometry}
            material={WallpaperTextureMaterial}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book2001.geometry}
          material={WallpaperTextureMaterial}
          position={[-0.063, -0.034, 0.02]}
          scale={[0.809, 1.199, 1.064]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={wallandothersTextureMaterial}
        position={[-2.522, 1.832, 0.695]}
        rotation={[0.134, 0.028, -1.537]}
        scale={0.12}
      />
      <group position={[0, 0.913, 0]} scale={[1, 0.842, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={wallandothersTextureMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={wallandothersTextureMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_2.geometry}
          material={wallandothersTextureMaterial}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Floor_1.geometry}
        material={floorandothersTextureMaterial}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.714}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle001.geometry}
        material={wallandothersTextureMaterial}
        position={[-2.204, -0.002, 3.284]}
        rotation={[0, -0.427, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle.geometry}
          material={wallandothersTextureMaterial}
          position={[-0.017, 0.756, 0.032]}
          rotation={[-Math.PI, 1.075, -Math.PI]}
          scale={1.063}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={WallpaperTextureMaterial}
          position={[0.314, 2.143, 0.625]}
          rotation={[Math.PI, 1.075, 2.589]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005.geometry}
          material={WallpaperTextureMaterial}
          position={[0.272, 1.657, -0.279]}
          rotation={[-3.11, 0.096, 2.575]}
          scale={0.517}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane007.geometry}
          material={WallpaperTextureMaterial}
          position={[-0.454, 2.525, 0.172]}
          rotation={[0, 0.263, -0.699]}
          scale={[0.708, 0.671, 0.79]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008.geometry}
          material={WallpaperTextureMaterial}
          position={[0.426, 1.635, 0.012]}
          rotation={[-2.912, 0.358, 2.58]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane009.geometry}
          material={WallpaperTextureMaterial}
          position={[-0.015, 1.254, -0.353]}
          rotation={[-2.983, -0.774, 2.997]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane010.geometry}
          material={WallpaperTextureMaterial}
          position={[-0.031, 1.266, 0.412]}
          rotation={[0.551, 0.716, -1.194]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane014.geometry}
          material={WallpaperTextureMaterial}
          position={[-0.51, 1.833, -0.324]}
          rotation={[-0.113, -0.584, -0.553]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle021.geometry}
        material={wallandothersTextureMaterial}
        position={[2.471, -0.002, -2.531]}
        rotation={[Math.PI, -0.33, Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve005.geometry}
          material={materials['Leaf Handle']}
          position={[0.01, 1.576, 0.081]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere005.geometry}
          material={wallandothersTextureMaterial}
          position={[-0.008, 0.681, 0.009]}
          scale={[0.351, 0.08, 0.351]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Leaf010.geometry}
          material={WallpaperTextureMaterial}
          position={[0.004, 2.191, -0.145]}
          rotation={[-0.107, 0.536, -0.004]}
          scale={0.557}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Leaf011.geometry}
          material={WallpaperTextureMaterial}
          position={[-0.001, 1.979, -0.091]}
          rotation={[3.107, 0.158, 2.972]}
          scale={1.049}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Leaf012.geometry}
          material={WallpaperTextureMaterial}
          position={[-0.021, 1.569, -0.124]}
          rotation={[-0.034, -0.881, -0.253]}
          scale={1.156}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Leaf013.geometry}
          material={WallpaperTextureMaterial}
          position={[-0.01, 1.255, 0.005]}
          rotation={[0.03, -0.217, -0.51]}
          scale={0.733}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Leaf014.geometry}
          material={WallpaperTextureMaterial}
          position={[-0.049, 1.888, -0.148]}
          rotation={[-0.153, 1.267, -0.101]}
          scale={0.717}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Leaf015.geometry}
          material={WallpaperTextureMaterial}
          position={[-0.006, 1.163, -0.132]}
          rotation={[2.924, 0.061, 3.083]}
          scale={0.919}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Leaf016.geometry}
          material={WallpaperTextureMaterial}
          position={[0.005, 2.324, -0.143]}
          rotation={[0.302, -1.193, -2.168]}
          scale={-0.365}
        />
      </mesh>
      <group position={[-3.324, 3.58, 1.945]} scale={[1, 0.762, 0.788]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube020_1.geometry}
          material={WallpaperTextureMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          ref={markRef}
        onClick={()=>setClicked(!clicked)}
          geometry={nodes.Cube020_2.geometry}
          material={WallpaperTextureMaterial}
        />
      </group>
      <group position={[-3.323, 3.622, 0.639]} scale={[1, 1.058, 1.058]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube023.geometry}
          material={WallpaperTextureMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube023_1.geometry}
          material={WallpaperTextureMaterial}
        />
      </group>
    </group>
  )
}

useGLTF.preload('models/NoTextureModel2.gltf')