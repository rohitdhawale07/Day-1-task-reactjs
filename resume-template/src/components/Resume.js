import React from "react";
import PersonalInfo from "./PersonalInfo";
import Skills from "./Skills";
import Experience from "./Experience";
import Qualifications from "./Qualifications";

function Resume() {
  return (
    <div className="resume">
      <PersonalInfo />
      <Qualifications />
      <Skills />
      <Experience />
    </div>
  );
}

export default Resume;
