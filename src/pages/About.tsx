import Skills from "../components/Skills";

import image from "../assets/sherwin2.png";
import Socials from "../components/Socials";
import "./style/about.css";
function About() {
  const minHeight = {
    minHeight: "500px",
  };
  return (
    <>
      <div className="h-auto flex flex-wrap justify-center items-center wrapper tp">
        <div className="left w-full md:w-1/2 p-5" data-aos="fade-right">
          <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
            Hi 👋 I'am Sherwin Sayo
          </h2>
          <p className="text-base md:text-lg text-gray-700 mt-3">
            Enthusiastic Software Engineer with almost 2 years of experience in
            web development. Proficient in Spring Boot for backend development
            and Vue.js, and React.js for front-end work. Committed to clean
            coding, Agile methodologies, and delivering innovative solutions.
            Proven ability to handle stressful situations and meet tight
            deadlines with high-quality results.
          </p>

          <p className="mt-4 text-base md:text-lg text-gray-700 dark:text-gray-300 md:mt-8">
            <span className="relative inline-block">
              <span className="relative"> Have a question? </span>
            </span>
            <br className="block sm:hidden" />
            Ask me on{" "}
            <a
              href="https://www.linkedin.com/in/sherwin-sayo-384196256/"
              title=""
              className="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline"
              target="_blank">
              Linkedin
            </a>
          </p>
          <Socials />
        </div>

        <div
          className="relative right w-full md:w-1/2 mt-8 md:mt-0"
          data-aos="flip-left">
          <img
            className="absolute inset-x-0 bottom-0 transform -translate-x-1/2 left-1/2"
            src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
            alt=""
          />
          <img
            className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
            src={image}
            alt=""
          />
        </div>
      </div>
      <div className="">
        <section className="text-gray-200 pattern-cross-dots-xl">
          <div className=" mx-auto px-5">
            <div className="text-center mb-10">
              <h2 className="font-bold leading-tight text-black dark:text-white sm:text-4xl">
                My Experience
              </h2>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              <div
                className="p-10 md:w-1/2 md:mb-0 mb-6 flex flex-col"
                data-aos="zoom-in-down">
                <div className="">
                  <div className="rounded bg-gray-800 p-4" style={minHeight}>
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0 p-2">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold mb-4">Webdesign</h3>
                      <p className="leading-relaxed  text-justify text-700">
                        In addition to my software development skills, I have a
                        strong background in web design. I use Figma to design
                        visually appealing and user-friendly web interfaces. My
                        design approach emphasizes creating cohesive and
                        engaging user experiences that align with the overall
                        functionality of the applications I develop. This
                        combination of design and development allows me to
                        deliver comprehensive and polished projects.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="p-10 md:w-1/2 md:mb-0 mb-6 flex flex-col "
                data-aos="zoom-in-down">
                <div className="gray-light">
                  <div className="rounded bg-gray-800 p-5" style={minHeight}>
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold mb-4">
                        Software Engineer | Telcom Live Content Inc. | June 2022
                        - November 2023
                      </h3>
                      <p className="leading-relaxed  text-justify text-700">
                        During my tenure as a Software Engineer in Telcom Live
                        Content Inc., I primarily focused on building scalable
                        and efficient web applications using a diverse
                        technology stack. My expertise lies in developing
                        RESTful APIs and full-stack applications using Spring
                        Boot, coupled with Thymeleaf for server-side rendering.
                        I have hands-on experience with Hibernate JPA for robust
                        and maintainable data persistence. On the frontend, I
                        have worked extensively with React, utilizing Redux
                        Toolkit for state management, and have also developed
                        applications using Vue.js with Vuex. This combination
                        allowed me to deliver highly interactive and dynamic
                        user interfaces. For database management, I have worked
                        with MySQL and Oracle, ensuring the applications are
                        backed by reliable and well-optimized relational
                        databases. My experience spans across the entire
                        development lifecycle, from initial design and
                        architecture to deployment and maintenance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div
                className="p-10 md:w-1/2 md:mb-0 mb-6 flex flex-col"
                data-aos="zoom-in-down">
                <div className="gray-light">
                  <div className="rounded bg-gray-800 p-4" style={minHeight}>
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5 flex-shrink-0">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold mb-4">
                        Technical Support Specialist | Weigandt Consulting |
                        December 2023 - June 2024
                      </h3>
                      <p className="leading-relaxed  text-justify text-700">
                        In my role as a Technical Support Specialist at Weigandt
                        Consulting, I was responsible for maintaining and
                        troubleshooting the RESA (Retail Sales Audit) workflows,
                        a key product of Oracle. My primary task was to address
                        and resolve issues such as batch failures within the
                        RESA system, ensuring smooth and uninterrupted
                        operations. Additionally, I conducted thorough
                        investigations into any data discrepancies received by
                        our system, working diligently to identify and rectify
                        any problems. My role required a deep understanding of
                        the RESA workflow and the ability to quickly diagnose
                        and fix issues to support the business’s critical
                        operations.
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </div>
      <Skills />
    </>
  );
}

export default About;
