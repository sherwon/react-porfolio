import Project from "./Project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = () => {
  return (
    <>
      <div className="px-4 max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="heading2 max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          PRACTICE PROJECTS
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Things I’ve made trying to put my dent in the universe.
        </p>
      </div>
      <div className="all-projects-container">
        {INFO.projects.map((project, index) => (
          <div className="all-projects-project" key={index}>
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
