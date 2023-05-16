import React from "react";
import currencyConverter from "../assets/currency_converter.png";
import employeeTracker from "../assets/employee_tracker.png";
import noteTaker from "../assets/note_taker.png";
import petRoastingApp from "../assets/pet_roasting_app.png";
import techBlog from "../assets/tech_blog.png";
import weatherDashboard from "../assets/weather_dashboard.png";

const Portfolio = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-slate-900">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Portfolio
          </p>
          <p className="py-6">
            Check out the projects I worked on while learning Full Stack
            Development
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${currencyConverter})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-black tracking-wider">
                Currency Converter - Group Project 1 using Server Side API's,
                Bulma, and HTML.
              </span>
              <div className="pt-8 text-center">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  <a
                    href="https://megmathis.github.io/Currency_Converter/"
                    target="_blank"
                  >
                    Application
                  </a>
                </button>

                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  <a
                    href="https://github.com/MegMathis/Currency_Converter"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${employeeTracker})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-black tracking-wider">
                Employee Tracker using MySQL and Inquirer
              </span>
              <div className="pt-8 text-center">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  <a
                    href="https://drive.google.com/file/d/1-lpkoF1Ae0VxrKOpBGKiJZHI62Qj54Ez/view"
                    target="_blank"
                  >
                    Application
                  </a>
                </button>

                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  <a
                    href="https://github.com/MegMathis/Employee_Tracker"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${noteTaker})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-black tracking-wider">
                Note Taking App using Express.js and Deployment to Heroku
              </span>
              <div className="pt-8 text-center">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  <a
                    href="https://note-taker-by-meg.herokuapp.com/notes"
                    target="_blank"
                  >
                    Application
                  </a>
                </button>

                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  <a
                    href="https://github.com/MegMathis/Note_Taker"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${petRoastingApp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-black tracking-wider">
                Canine Critiqe- Group Project 2 using Node.js, Express.js,
                Handlebars.js, Sequelize, and Deployment to Heroku
              </span>
              <div className="pt-8 text-center">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  <a
                    href="https://pet-roasting-app.herokuapp.com/"
                    target="_blank"
                  >
                    Application
                  </a>
                </button>

                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  <a
                    href="https://github.com/MegMathis/Pet_Roasting_App"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${techBlog})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-black tracking-wider">
                TechBlog MVC App using Handlebars.js, Sequelize, bcrypt,
                Express-Session and Deployment to Heroku
              </span>
              <div className="pt-8 text-center">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  <a
                    href="https://tech-blog-by-meg.herokuapp.com/"
                    target="_blank"
                  >
                    Application
                  </a>
                </button>

                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  <a
                    href="https://github.com/MegMathis/Tech_Blog_MVC_Challenge"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${weatherDashboard})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-black tracking-wider">
                Weather Dashboard using Server Side API's, Local Storage, HTML,
                and CSS
              </span>
              <div className="pt-8 text-center">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  <a
                    href="https://megmathis.github.io/weather_dashboard/"
                    target="_blank"
                  >
                    Application
                  </a>
                </button>

                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  <a
                    href="https://github.com/MegMathis/weather_dashboard"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
