import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import DataEngineering from "./DataEngineering";
import MachineLearning from "./MachineLearning";
import DataAnalysis from "./DataAnalysis";
import Cloud from "./Cloud";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <DataEngineering/>
        <MachineLearning/>
        <Frontend />
        <DataAnalysis/>
        <Cloud/>
      </div>
    </section>
  );
};

export default Skills;
