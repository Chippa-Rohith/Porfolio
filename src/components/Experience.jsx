import { Center, Environment, Html, OrbitControls, Sky, useHelper} from "@react-three/drei";
import { Office } from "./Office";
import { DirectionalLightHelper, PointLightHelper, SpotLightHelper } from "three";
import { useRef, useState } from "react";
import { RectAreaLightHelper} from 'three/addons/helpers/RectAreaLightHelper.js'
import { Avatar } from "./Avatar";
import codinggif from '../assets/coding.mp4' 
import { useFrame } from '@react-three/fiber';



export const Experience = () => {

  const pointLightRef= useRef()
  const directionalLightRef=useRef()
  const directionalLightRef2=useRef()
  const directionalLightRef3=useRef()
  const rectangleareaLightRef=useRef()

  useHelper(pointLightRef, PointLightHelper, 0.5, "white")
  useHelper(directionalLightRef, DirectionalLightHelper, 0.5, "red")
  useHelper(directionalLightRef2, DirectionalLightHelper, 0.5, "red")
  useHelper(directionalLightRef3, DirectionalLightHelper, 0.5, "red")
  useHelper(rectangleareaLightRef, RectAreaLightHelper, 0.5, 'white')

  

  return (
    
    <>
      <OrbitControls
        minAzimuthAngle={-Math.PI/35}
        maxAzimuthAngle={Math.PI/2}
        minPolarAngle={Math.PI/3}
        maxPolarAngle={Math.PI -Math.PI/2}
        minDistance={7}
        enableZoom={false}
      />
      <Environment preset="apartment"/>
      <ambientLight intensity={0.2} />
      <Center>
        <Office/>
      </Center>
      <group rotation-y={-1.5} scale={2.2} position={[0,-2.8,-0.4]}>
        <Avatar animation={'Typing'}/>
      </group>
      <Html transform rotation-y={1.56} position={[-2.5,-0.15,-0.25]}>
          <video src={codinggif} type='video/mp4' autoPlay muted loop height={35}></video>
        </Html>
      
    </>
  );
};


export default Experience