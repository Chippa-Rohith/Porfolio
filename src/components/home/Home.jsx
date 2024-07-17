import React from "react";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import { Experience } from "../Experience";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef  } from "react";
import { Loader } from "@react-three/drei";


const Home = () => {

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    const preventDefault = (e) => {
      e.preventDefault();
    };

    // Add event listeners
    canvas.addEventListener('wheel', preventDefault);
    canvas.addEventListener('touchmove', preventDefault);
    canvas.addEventListener('keydown', preventDefault);

    // Make canvas focusable
    canvas.setAttribute('tabindex', '0'); // Make canvas focusable
    canvas.style.outline = 'none'; // Remove focus outline

    // Cleanup event listeners on component unmount
    return () => {
      canvas.removeEventListener('wheel', preventDefault);
      canvas.removeEventListener('touchmove', preventDefault);
      canvas.removeEventListener('keydown', preventDefault);
    };
  }, []);

  return (
    <section className="home section" id="home">
      <div className="home__container container grid small_flex">
        <div className="home__content small_flex">
          <Social />

          <div className="home__img">
            <Canvas ref={canvasRef} camera={{ position: [7,3.5,7]}} >
            <Suspense fallback={null}>
              <Experience />
            </Suspense>
            </Canvas>
            <Loader />
          </div>

          <Data />
        </div>

        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
