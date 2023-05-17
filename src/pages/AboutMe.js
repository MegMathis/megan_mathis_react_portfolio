import React from "react";
import meg from "../assets/Meg.jpeg";

const AboutMe = () => {
  return (
    <div name="AboutMe" className="w-full h-screen bg-slate-900">
      {/* Container */}

      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="flex justify-center">
          <img src={meg} alt="picture of Meg" />
        </div>
        <p className="text-pink-600 text-2xl">A little about me...</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          My name is Megan Mathis.
        </h1>
        <h2 className="text-4xl sm:text7xl font-bold text-[#8892b0]">
          I recently completed a Full Stack Bootcamp from Rutgers.
        </h2>
        <p className="text-[#8892b0] py-4 max-w[700px]">
          I am a full stack web developer ready to make my mark in the
          technology world. After working 14 years in an adminstrative role, I
          decided to pursue my passion for technology and enrolled in a full
          stack bootcamp from Rutgers. The course has equipped me with the
          skills to design and develop user friendly websites and applications.
          I am excited to continue to learn and grow as a developer.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
