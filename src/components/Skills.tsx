import programmingSkills from "../data/programmingSkills";
import "./style/skills.css";

const Skills = () => {
  return (
    <div className="skills-section">
      <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl text-center">
        My Skills
      </h2>
      <div className="skills-container">
        {programmingSkills.map((skill, index) => (
          <div className="skills-box" key={index}>
            <div className="skills-title">
              <div className="skills-img">
                <img src={skill.img} className="skills-icons" />
              </div>
              <h6 className="project-title mb-3 text-xl font-bold leading-5">
                {skill.skill}
              </h6>
            </div>
            {/* <p>{skill.experience}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
