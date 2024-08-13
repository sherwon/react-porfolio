import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import certificates from "../data/certificates";
import { Svg } from "./Svg";
import "./projects/styles/project.css";
import "./style/certification.css";
export default function Certification() {
  return (
    <>
      <div className="bg-white py-24 sm:py-32 pt-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div>
              <h2 className="heading2 max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                CERTIFICATIONS
              </h2>
              <Svg />
            </div>
            <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
              {certificates.map((certificate, key) => (
                <a href={certificate.link} target="_blank">
                  <div className="relative pl-9" key={key}>
                    <h6
                      className="heading2 mb-3 text-xl font-bold leading-5"
                      style={{ color: "black" }}>
                      {certificate.title}
                    </h6>
                    <p className="mt-2 text-base text-gray-700 md:text-lgs">
                      {certificate.description}
                    </p>
                  </div>
                </a>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}
