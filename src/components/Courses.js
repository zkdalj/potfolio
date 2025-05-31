import React, { useRef, useEffect, useState } from "react";
import courses from "../assets/images/certification.svg";
import "../App.css";

const Courses = () => {
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
      {/* Courses page */}
      <section className="  py-16 px-8 md:px-20">
        <div className="grid md:flex gap-5  ">
          <div ref={boxRef}
          className={`slide-left ${isVisible ? "animate" : ""} w-full md:w-4/6 order-2 md:order-1 md:mt-22 md:ml-22`} >
            <h2 className="text-orange text-2xl md:text-3xl font-bold mb-3 md:mb-6">
              Certifications & Courses
            </h2>

            <div className="space-y-6 text-gray-300">
              {/* First Job */}
              <div>
                <p className="text-white font-semibold text-lg md:text-xl lg:text-2xl leading-8">
                  Apr 2023 – Jun 2023
                </p>
                <p className="text-white font-semibold text-sm md:text-lg lg:text-xl leading-8">
                  React js Development{" "}
                  <span className="font-normal text-sm md:text-lg lg:text-xl leading-8">
                    – Naresh IT, Hyderabad
                  </span>
                </p>
              </div>

              {/* Second Job */}
              <div>
                <p className="text-white font-semibold text-lg md:text-xl lg:text-2xl leading-8">
                  Jan 2022 – Jun 2022
                </p>
                <p className="text-white font-semibold text-sm md:text-lg lg:text-xl leading-8">
                  Web Designing (Front-End Development){" "}
                  <span className="font-normal text-sm md:text-lg lg:text-xl leading-8">
                    –<br /> I-Tech System, Nashik
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Courses Details */}

          <div className=" w-68 mx-auto md:w-2/6 order-1 md:order-2">
            <img
              src={courses}
              alt="Courses"
              className="w-full mx-w-sm mx-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
