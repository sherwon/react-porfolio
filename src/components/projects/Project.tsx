import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import "./styles/project.css";
type ProjectProps = {
  logo: string;
  title: string;
  description: string;
  linkText: string;
  link: string;
};
const Project = (props: ProjectProps) => {
  const { logo, title, description, linkText, link } = props;

  return (
    <>
      <div className="project">
        <a href={link} target="_blank">
          <div className="project-container">
            <div className="project-logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="project-title mb-3 text-xl font-bold leading-5">
              {title}
            </div>
            <div className="project-description text-base text-gray-700 md:text-lg">
              {description}
            </div>
            <div className="project-link">
              <div className="project-link-icon">
                <FontAwesomeIcon icon={faLink} />
              </div>

              <div className="project-link-text">{linkText}</div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default Project;
