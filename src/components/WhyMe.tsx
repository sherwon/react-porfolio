import personalQualities from "../data/personalQualities ";
import "./style/whyMe.css";
const WhyMe = () => {
  return (
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 h-auto">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2
          className="heading2 max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
          data-aos="fade-down">
          WHY ME
        </h2>
        <p className="text-base text-gray-700 md:text-lg" data-aos="fade-right">
          Theirs a lot of thing you must know about me
        </p>
      </div>
      <div className="grid gap-8 row-gap-10 lg:grid-cols-2">
        {personalQualities.map((quality, key) => (
          <div
            className="max-w-md sm:mx-auto sm:text-center"
            key={key}
            data-aos="fade-up-right">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
              <svg
                className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16 svg"
                stroke="currentColor"
                viewBox="0 0 52 52">
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="heading2 mb-3 text-xl font-bold leading-5">
              {quality.title}
            </h6>
            <p className="text-base text-gray-700 md:text-lg">
              {quality.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyMe;
