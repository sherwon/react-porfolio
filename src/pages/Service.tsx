import "../components/projects/styles/project.css";
import "./style/service.css";
function Service() {
  return (
    <>
      <div className="tp">
        <h1
          className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl text-center"
          data-aos="fade-down">
          SERVICES
        </h1>

        <div className="row px-10 pt-5">
          <div
            className="service p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl"
            data-aos="fade-right">
            <i className="ri-palette-line"></i>
            <h3 className="heading2 mb-3 text-xl font-bold leading-5">
              Web Design
            </h3>
            <p className="text-base  md:text-lg text-700">
              Creating visually appealing and user-friendly designs tailored to
              your brand's identity. I focus on delivering designs that are both
              aesthetically pleasing and highly functional.
            </p>
          </div>
          <div
            className="service p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl"
            data-aos="fade-left">
            <i className="ri-macbook-line"></i>
            <h3 className="heading2 mb-3 text-xl font-bold leading-5">
              Web Development
            </h3>
            <p className="text-base  md:text-lg text-700">
              Building robust and scalable web applications using the latest
              technologies. I ensure that your website is not only functional
              but also optimized for performance and security.
            </p>
          </div>
        </div>

        <div className="row px-10 pt-5">
          <div
            className="service p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl"
            data-aos="fade-right">
            <i className="ri-store-3-line"></i>
            <h3 className="heading2 mb-3 text-xl font-bold leading-5">
              CMS Development
            </h3>
            <p className="text-base  md:text-lg text-700">
              Developing customized Content Management Systems that empower you
              to manage your website content with ease. My solutions are
              user-friendly and tailored to your specific needs.
            </p>
          </div>
          <div
            className="service p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl"
            data-aos="fade-left">
            <i className="ri-database-2-line"></i>
            <h3 className="heading2 mb-3 text-xl font-bold leading-5">
              Technical Support
            </h3>
            <p className="text-base  md:text-lg text-700">
              Providing reliable technical support to ensure your web
              applications run smoothly. I am here to assist with any issues or
              updates, ensuring your site remains up-to-date and secure.
            </p>
          </div>
        </div>
      </div>

      <div className="overflow-hidden bg-white sm:py-16 mt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4" data-aos="fade-right">
              <div className="lg:max-w-lg">
                {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">
                  Produce faster
                </h2> */}
                <h2 className="heading2 max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                  WEB DEVELOPMENT
                </h2>
                <p className="text-base  md:text-lg text-700">
                  "My main service is creating web applications using Spring
                  Boot to implement RESTful APIs and Vue or React to build
                  responsive and interactive UIs."
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="absolute absolute1 left-1 top-1 h-5 w-5 text-indigo-600">
                        <path d="M3.196 12.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 12.87z"></path>
                        <path d="M3.196 8.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 8.87z"></path>
                        <path d="M10.38 1.103a.75.75 0 00-.76 0l-7.25 4.25a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.76 0l7.25-4.25a.75.75 0 000-1.294l-7.25-4.25z"></path>
                      </svg>
                      User Interface
                    </dt>
                    <dd className="inline text-base  md:text-lg text-700">
                      "Fully responsive, optimized, well-coded, and interactive
                      UI."
                    </dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600">
                        <path
                          fill-rule="evenodd"
                          d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                          clip-rule="evenodd"></path>
                      </svg>
                      Rest Api
                    </dt>
                    <dd className="inline text-base  md:text-lg text-700">
                      "A REST API that is well-created, secure, robust, and
                      scalable."
                    </dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600">
                        <path
                          fill-rule="evenodd"
                          d="M14.5 10a4.5 4.5 0 004.284-5.882c-.105-.324-.51-.391-.752-.15L15.34 6.66a.454.454 0 01-.493.11 3.01 3.01 0 01-1.618-1.616.455.455 0 01.11-.494l2.694-2.692c.24-.241.174-.647-.15-.752a4.5 4.5 0 00-5.873 4.575c.055.873-.128 1.808-.8 2.368l-7.23 6.024a2.724 2.724 0 103.837 3.837l6.024-7.23c.56-.672 1.495-.855 2.368-.8.096.007.193.01.291.01zM5 16a1 1 0 11-2 0 1 1 0 012 0z"
                          clip-rule="evenodd"></path>
                        <path d="M14.5 11.5c.173 0 .345-.007.514-.022l3.754 3.754a2.5 2.5 0 01-3.536 3.536l-4.41-4.41 2.172-2.607c.052-.063.147-.138.342-.196.202-.06.469-.087.777-.067.128.008.257.012.387.012zM6 4.586l2.33 2.33a.452.452 0 01-.08.09L6.8 8.214 4.586 6H3.309a.5.5 0 01-.447-.276l-1.7-3.402a.5.5 0 01.093-.577l.49-.49a.5.5 0 01.577-.094l3.402 1.7A.5.5 0 016 3.31v1.277z"></path>
                      </svg>
                      Developer friendly{" "}
                    </dt>
                    <dd className="inline text-base  md:text-lg text-700">
                      "Well-documented and easy to customize."
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxjb21wdXRlcnxlbnwwfDB8fHwxNjkxODE2NjY3fDA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="coding"
              className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              data-aos="fade-left"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
