import React, { useRef, useEffect, useState } from "react";
import htmlIcon from "../assets/images/html-icon.svg";
import cssIcon from "../assets/images/css-icon.svg";
import bootstrapIcon from "../assets/images/bootstrap-icon.svg";
import tailwindIcon from "../assets/images/tailwind-icon.svg";
import reactIcon from "../assets/images/react-icon.svg";
import jsIcon from "../assets/images/js-icon.svg";
import figmaIcon from "../assets/images/figma-icon.svg";

const Skillsection = () => {
  const boxRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    "HTML5",
    "CSS",
    "Bootstrap CSS",
    "Tailwind CSS",
    "React JS",
    "JavaScript",
    "Figma",
  ];

  const skillLogos = [
    { src: htmlIcon, alt: "HTML" },
    { src: cssIcon, alt: "CSS" },
    { src: bootstrapIcon, alt: "Bootstrap" },
    { src: tailwindIcon, alt: "Tailwind" },
    { src: reactIcon, alt: "React" },
    { src: jsIcon, alt: "JavaScript" },
    { src: figmaIcon, alt: "Figma" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // when element is on screen
        }
      },
      { threshold: 0.1 }
    );

    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    return () => {
      if (boxRef.current) observer.unobserve(boxRef.current);
    };
  }, []);

  return (
    <section id="skills" className="mt-12 md:mt-42 py-16 px-8 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Text */}
        <div
          ref={boxRef}
          className={`slide-left ${isVisible ? "animate" : ""} md:w-1/2`}
        >
          <h2 className=" text-2xl md:text-3xl font-semibold mb-4">Skills</h2>
          <p className="text-gray-300 mb-6 text-sm md:text-lg">
            Expert in translating Figma designs into high-performance UI
            components using HTML, CSS, JavaScript, and React js.
          </p>
          <div className=" flex gap-12 text-sm md:text-lg  border-b pb-5 border-white/20 md:border-none ">
            <ul className=" space-y-2 list-disc pl-5">
              {skills.slice(0, 4).map((skill) => (
                <li key={skill} className="font-semibold">
                  {skill}
                </li>
              ))}
            </ul>
            <ul className=" space-y-2 list-disc pl-5">
              {skills.slice(4).map((skill) => (
                <li key={skill} className="font-semibold">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Logos */}
        <div
          ref={boxRef}
          className={`fade-in ${
            isVisible ? "animate-fade" : ""
          } md:w-1/2  md:border-l border-white/20 md:pl-10 grid grid-cols-4 gap-4 place-items-center`}
        >
          {skillLogos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className=" w-10 h-10 md:w-12 md:h-12  lg:w-14 lg:h-14 object-contain hover:scale-110 transition-transform duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skillsection;
