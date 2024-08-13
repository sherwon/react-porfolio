import Skills from "../components/Skills";

import image from "../assets/sherwin2.png";

import { Experience } from "../data/Experience";

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
              <p className="text-base  md:text-lg text-700 mt-3">
                I've worked on a variety of projects over the years and I'm
                proud of the progress I've made. Collaborating with others is a
                great way to learn and grow, and I'm always open to new ideas
                and feedback.
              </p>

              <p className="mt-4 text-base  md:text-lg text-700 dark:text-gray-300 md:mt-8">
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
      <div className="grid grid-cols-4 sm:grid-cols-12 gap-6">
        <div className="col-span-8 sm:col-span-12">
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">About Me</h3>
            <p className="text-base  md:text-lg text-700 mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              finibus est vitae tortor ullamcorper, ut vestibulum velit
              convallis. Aenean posuere risus non velit egestas suscipit. Nunc
              finibus vel ante id euismod. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam
              erat volutpat. Nulla vulputate pharetra tellus, in luctus risus
              rhoncus id.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-4">Experience</h3>
            {Experience.map((exp, key) => (
              <div className="mb-6" key={key}>
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-base  md:text-lg text-700 mt-3 font-bold">
                    {exp.role}
                  </span>
                  <p>
                    <span className="text-base  md:text-lg text-700 mt-3 mr-2">
                      at {exp.company}
                    </span>
                    <span className="text-base  md:text-lg text-700 mt-3">
                      {exp.year}
                    </span>
                  </p>
                </div>
                <p className="text-base  md:text-lg text-700">
                  {exp.responsibility}
                </p>
              </div>
            ))}
          </div>
        </div>
        <Skills />
      </div>
    </>
  );
}

export default About;
