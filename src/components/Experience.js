import React, { useRef, useEffect, useState } from "react";
import experience from "../assets/images/experience.svg";
import '../App.css';

const Experience = () => {
     const boxRef = useRef(null);
      const [isVisible, setIsVisible] = useState(false);

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
    <>
      {/* Experience page */}
      <section className="  py-16 px-8 md:px-20">
        <div className="md:flex ">
          <div className="  w-68 mx-auto md:w-2/5">
            <img src={experience} alt="experience" className="w-full mx-w-sm mx-auto" />
          </div>
         {/* Experience Details */}
        <div  ref={boxRef}
          className={`slide-right ${isVisible ? "animate-right" : ""} w-full md:w-3/5 md:mt-22 md:ml-22`} >
          <h2 className="text-orange text-2xl md:text-3xl font-bold mb-3 md:mb-6">Experience</h2>

          <div className="space-y-6 text-gray-300">
            {/* First Job */}
            <div>
              <p className="text-white font-semibold text-lg md:text-xl lg:text-2xl leading-8">Oct 2022 – Present</p>
              <p className="text-white font-semibold text-sm md:text-lg lg:text-xl leading-8">
                Aspirewebs & Informatics Pvt. Ltd <span className="font-normal text-sm md:text-lg lg:text-xl leading-8">– Nashik, India</span>
              </p>
              <p className="italic text-sm md:text-lg lg:text-xl">Web Designer (Front-End Developer)</p>
            </div>

            {/* Second Job */}
            <div>
              <p className="text-white font-semibold text-lg md:text-xl lg:text-2xl leading-8">Mar 2022 – Sep 2022</p>
              <p className="text-white font-semibold text-sm md:text-lg lg:text-xl leading-8">
                NextDigit Software <span className="font-normal text-sm md:text-lg lg:text-xl leading-8">– Nashik, India</span>
              </p>
              <p className="italic text-sm md:text-lg lg:text-xl">Web Designer (Front-End Developer Intern)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Experience;
