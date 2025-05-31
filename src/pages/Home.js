import React, { useRef, useEffect, useState } from "react";
import "../App.css";


// import workimg from "../assets/images/workimg.svg";

function Home() {
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
      {/* Home page */}
      <div className="md:mt-42 flex items-center text-white ml-14 md:m-124px">
        <div className="">
          <div ref={boxRef}
            className={`fade-in ${
              isVisible ? "animate-fade" : ""
            } speech-bubble`} >
            <span> HI!</span>
          </div>
          <h1
            ref={boxRef}
            className={`slide-left ${
              isVisible ? "animate" : ""
            } text-3xl md:text-4xl lg:text-5xl font-bold mb-2`}
          >
            Hi, I'm Dipti Ghanekar
          </h1>
          <p  ref={boxRef}
            className={`slide-left ${
              isVisible ? "animate" : ""
            } text-lg md:text-3xl leading-normal	`}>
            A Web Designer From <br />
            <span>Navi Mumbai</span>
          </p>
          <button  ref={boxRef}
            className={`slide-left ${
              isVisible ? "animate" : ""
            } mt-86 ml-42 md:ml-0 md:mt-10 bg-orange-500 px-5 py-2 rounded-full text-white hover:bg-orange-600	`} >
            Download CV
          </button>
        </div>
      </div>
      {/* End Home page */}
    </>
  );
}

export default Home;
