import Project from "./Project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = () => {
  return (
    <>
      <div className="px-4 max-w-xl md:mx-auto sm:text-center lg:max-w-2xl ">
        <h1
          className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl"
          data-aos="fade-down-right">
          PRACTICE PROJECTS
        </h1>
        <p
          className="text-base text-gray-700 md:text-lg mt-3"
          data-aos="fade-down-right">
          Things I’ve made trying to put my dent in the universe.
        </p>
      </div>
      <div className="all-projects-container">
        {INFO.projects.map((project, index) => (
          <div
            className="all-projects-project"
            key={index}
            data-aos="zoom-in-up">
            <Project
              logo={project.logo}
              title={project.title}
              description={project.description}
              linkText={project.linkText}
              link={project.link}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default AllProjects;
