import React from "react";
import "./index.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import workimg from "./assets/images/workimg.svg";
import Skillsection from "./components/Skillsection";
import Experience from "./components/Experience";
import Courses from "./components/Courses";
import MyProjects from "./components/MyProjects";

function App() {
  return (
    <div>
      <div className="absolute -top-10 -z-1 right-0 w-full md:w-2/5 h-750">
        <img src={workimg} alt="workimg" className="h-full w-full " />
      </div>
        {/* <div className="absolute -top-10 -z-1 right-0 w-2/5 h-750">
        <img src={workimg} alt="workimg" className="h-full w-full " />
      </div> */}
      <div className="container relative">
        <Header />
        <Home />
        <Skillsection />
        <Experience />
        <Courses />
        <MyProjects />
      </div>
      <div id="contact" className="bg-[#5A489B] w-full h-12 mt-28 flex justify-center gap-10 items-center ">
        <div className="flex items-center gap-3">
          <div className="bg-[#19142A] w-6 h-6 md:w-8 md:h-8 rounded-4xl flex items-center justify-center text-sm md:text-lg">
          <i className="fa-solid fa-phone"></i>
          </div>
          <p className="text-sm md:text-lg">7208650041</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-[#19142A] w-6 h-6 md:w-8 md:h-8 rounded-4xl flex items-center justify-center text-sm md:text-lg">
          <i className="fa-solid fa-envelope"></i>
          </div>
          <p className="text-sm md:text-lg">diptighanekar21@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default App;
