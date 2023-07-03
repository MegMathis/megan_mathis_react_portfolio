import React from "react";
import CSS from "../assets/css.png";
import GitHub from "../assets/github.png";
import HTML from "../assets/html.png";
import JavaScript from "../assets/javascript.png";
import Mongo from "../assets/mongo.png";
import ReactPic from "../assets/react.png";
import Node from "../assets/node.png";
import SQL6 from "../assets/sql6.png";
import resume from "../assets/resume.pdf";

const Resume = () => {
  return (
    <div name="resume" className="w-full h-screen bg-slate-900 text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-5 text-2xl">
            These are the technologies I have learned through Rutgers Full Stack
            Coding Bootcamp
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-stone-400 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>

          <div className="shadow-md shadow-stone-400 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>

          <div className="shadow-md shadow-stone-400 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="HTML icon" />
            <p className="my-4">GitHub</p>
          </div>

          <div className="shadow-md shadow-stone-400 hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={JavaScript}
              alt="JavaScript icon"
            />
            <p className="my-4">JavaScript</p>
          </div>

          <div className="shadow-md shadow-stone-400 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mongo} alt="Mongo icon" />
            <p className="my-4">Mongo</p>
          </div>

          <div className="shadow-md shadow-stone-400 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactPic} alt="React icon" />
            <p className="my-4">React</p>
          </div>

          <div className="shadow-md shadow-stone-400 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="Node icon" />
            <p className="my-4">Node</p>
          </div>

          <div className="shadow-md shadow-stone-400 hover:scale-110 duration-500">
            <img className="w-24 h-20 mx-auto" src={SQL6} alt="SQL icon" />
            <p className="my-4">SQL</p>
          </div>
          <div className="flex w-2/3">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Resume
            </p>
          </div>
        </div>

        <a
          href={resume}
          target="_blank"
          rel="noreferrer"
          className="text-2xl text-teal-400 hover:text-teal-600 duration-500"
        >
          <h3>Click Here to Check Out My Resume</h3>
        </a>
      </div>
    </div>
  );
};

export default Resume;
