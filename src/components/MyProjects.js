import React from "react";
import project1 from "../assets/images/project-1.svg";
import project2 from "../assets/images/project-2.svg";
import project3 from "../assets/images/project-3.svg";
import project4 from "../assets/images/project-4.svg";
import "../App.css";

const MyProjects = () => {
 
    const projects = [
  {
    href :'https://www.figma.com/design/E1AKQAR5AraSya23tPqgia/Portfolio?node-id=5-154&t=GrQs4yAXRL5G94jr-0',
    image: project1,
    title: 'Project - 1',
    description: 'Portfolio (Figma UI)',
  },
  {
    href :'https://www.figma.com/design/h9dRVrr4zERbFwagpoU2lt/Prasad-technology-ui?node-id=93-284&t=7L5yBpa3YThOVMBa-0',
    image: project2,
    title: 'Project - 2',
    description: 'Prasad Techroom (Figma UI)',
  },
  {
    href :'https://zkdalj.github.io/coffeeMug/',
    image: project3,
    title: 'Project - 3',
    description: 'Coffee Mugs',
  },
  {
    href :'https://zkdalj.github.io/greelan/',
    image: project4,
    title: 'Project - 4',
    description: 'Best Gardening Services',
  },
];

  return (
    <>
     <section id="projects" className="bg-[#1C1530] text-white py-16 px-8 md:px-20 slide-top">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">My Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-items-center ">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/5 rounded-lg overflow-hidden border border-yellow-500/30 hover:shadow-lg transition duration-300 w-full max-w-xs"
          >
            <a href={project.href} target="_blank" rel="noopener noreferrer">
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
            </a>
            <div className="p-4">
              <h3 className="text-white text-base md:text-lg font-semibold">{project.title}</h3>
              <p className="text-gray-300 text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section> 
    </>
  );
};

export default MyProjects;
