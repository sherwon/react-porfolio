import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faStackOverflow,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import INFO from "../data/user.ts";

import Certification from "../components/Certification.tsx";
import image from "../assets/sherwin1.png";
import { Skills } from "../components/Skills.tsx";
import AllProjects from "../components/projects/AllProjects.tsx";
import "./style/home.css";
function Home() {
  return (
    <>
      <div className="con bg-opacity-5 text-white shadow-lg hidden md:block pt-10">
        <div className="div1 pt-5">
          <h1 className="text-4xl font-bold text-gray-800 typed-out text-center">
            Hi, I'm Sherwin Sayo
          </h1>
          <p className="description text-base  md:text-lg text-700">
            I am a skilled Software Engineer specializing in Spring Boot,
            Node.js, React.js, and Vue.js. With a strong foundation in building
            scalable, secure, and reliable web applications using a variety of
            frameworks and technologies, I excel at solving complex problems and
            mastering new skills. My dedication to creating high-quality code
            that aligns with best practices and industry standards drives me to
            seek out fresh challenges and opportunities for growth as a
            developer.
          </p>
          <div className="homepage-socials">
            <a href="#" target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                icon={faTwitter}
                className="homepage-social-icon"
              />
            </a>
            <a href={INFO.socials.github} target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                icon={faGithub}
                className="homepage-social-icon"
              />
            </a>
            <a
              href={INFO.socials.stackoverflow}
              target="_blank"
              rel="noreferrer">
              <FontAwesomeIcon
                icon={faStackOverflow}
                className="homepage-social-icon"
              />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                icon={faInstagram}
                className="homepage-social-icon"
              />
            </a>
            <a
              href={`mailto:${INFO.main.email}`}
              target="_blank"
              rel="noreferrer">
              <FontAwesomeIcon
                icon={faMailBulk}
                className="homepage-social-icon"
              />
            </a>
          </div>
        </div>
        <div className="div2">
          <img
            src={image}
            alt="sherwin sayo profile"
            title="sherwin"
            width="350"
            height="300"
          />
        </div>
      </div>
      <div className="extra">
        {/* <h1 className="font-bold">SOFTWARE ENGINEER</h1> */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 270">
          <path
            fill="#9381ff"
            fill-opacity="1"
            d="M0,128L30,154.7C60,181,120,235,180,218.7C240,203,300,117,360,85.3C420,53,480,75,540,69.3C600,64,660,32,720,26.7C780,21,840,43,900,80C960,117,1020,171,1080,208C1140,245,1200,267,1260,261.3C1320,256,1380,224,1410,208L1440,192L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
        </svg>
      </div>

      <section>
        <Skills />
      </section>
      <section>
        <Certification />
      </section>
      <section>
        <AllProjects />
      </section>
    </>
  );
}

export default Home;
