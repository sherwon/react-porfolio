import "../style/home.css";
import image from "../../assets/sherwin1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faStackOverflow,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import INFO from "../../data/user";
import AllProjects from "../../components/projects/AllProjects.tsx";
function Home() {
  return (
    <>
      <div className="container w-screen h-screen">
        <div className="div1">
          <h1 className="text-4xl font-bold text-gray-800 typed-out text-center">
            Hi, I'm Sherwin Sayo
          </h1>
          <p className="description">
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
      <section>
        <AllProjects />
      </section>
    </>
  );
}

export default Home;
