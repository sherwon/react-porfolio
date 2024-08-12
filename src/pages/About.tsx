import React from "react";
import image from "../assets/sherwin2.png";
import "./style/about.css";
function About() {
  return (
    <>
      <div className="wrapper pt-10 overflow- md:pt-0 sm:pt-16 2xl:pt-16 w-screen h-screen">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
                Hi 👋 I am Sherwin Sayo
              </h2>
              <p className="text-xl text-gray-600 mt-3">
                I've worked on a variety of projects over the years and I'm
                proud of the progress I've made. Collaborating with others is a
                great way to learn and grow, and I'm always open to new ideas
                and feedback.
              </p>

              <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 md:mt-8">
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
            </div>

            <div className="relative">
              <img
                className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
                alt=""
              />

              <img
                className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110 -mb-40"
                src={image}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="">
          <div className="grid grid-cols-4 sm:grid-cols-12 gap-6">
            <div className="col-span-4 sm:col-span-9">
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">About Me</h2>
                <p className="text-xl text-gray-600 mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  finibus est vitae tortor ullamcorper, ut vestibulum velit
                  convallis. Aenean posuere risus non velit egestas suscipit.
                  Nunc finibus vel ante id euismod. Vestibulum ante ipsum primis
                  in faucibus orci luctus et ultrices posuere cubilia Curae;
                  Aliquam erat volutpat. Nulla vulputate pharetra tellus, in
                  luctus risus rhoncus id.
                </p>

                <h3 className="font-semibold text-center mt-3 -mb-2">
                  Find me on
                </h3>

                <h2 className="text-xl font-bold mt-6 mb-4">Experience</h2>
                <div className="mb-6">
                  <div className="flex justify-between flex-wrap gap-2 w-full">
                    <span className="text-xl text-gray-600 mt-3 font-bold">
                      Web Developer
                    </span>
                    <p>
                      <span className="text-xl text-gray-600 mt-3 mr-2">
                        at ABC Company
                      </span>
                      <span className="text-xl text-gray-600 mt-3">
                        2017 - 2019
                      </span>
                    </p>
                  </div>
                  <p className="text-xl text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    finibus est vitae tortor ullamcorper, ut vestibulum velit
                    convallis. Aenean posuere risus non velit egestas suscipit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-4 sm:col-span-3">
              <div className="bg-white shadow rounded-lg p-6">
                <div className="flex flex-col">
                  <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                    Skills
                  </span>
                  <ul>
                    <li className="mb-2">Java</li>
                    <li className="mb-2">Spring Boot</li>
                    <li className="mb-2">SQL</li>
                    <li className="mb-2">JavaScript</li>
                    <li className="mb-2">React</li>
                    <li className="mb-2">Redux/toolkit</li>
                    <li className="mb-2">Node.js</li>
                    <li className="mb-2">HTML/CSS</li>
                    <li className="mb-2">Tailwind Css</li>
                    <li className="mb-2">MySql</li>
                    <li className="mb-2">Vue</li>
                    <li className="mb-2">VueX</li>
                    <li className="mb-2">Docker</li>
                    <li className="mb-2">Wordpress</li>
                    <li className="mb-2">Wix</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
