import "./style/header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <header className="bg-opacity-5 text-white shadow-lg hidden md:block">
        <div className=" mx-auto flex items-center h-24">
          <a href="" className="flex items-center justify-center">
            <img
              className="h-16"
              src="https://cdn.pixabay.com/photo/2016/06/15/16/16/man-1459246_640.png"
              alt=""
            />
            <span className="ml-4 uppercase font-black">
              Sherwin
              <br />
              Sayo
            </span>
          </a>
          <nav className="contents font-semibold text-base lg:text-lg">
            <ul className="mx-auto flex items-center">
              <li className="p-5 xl:p-8 active">
                <Link to="/">
                  <span>Home</span>
                </Link>
              </li>
              <li className="p-5 xl:p-8">
                <Link to="/about">
                  <span>About</span>
                </Link>
              </li>
              <li className="p-5 xl:p-8">
                <Link to="project">
                  <span>Projects</span>
                </Link>
              </li>
              <li className="p-5 xl:p-8">
                <Link to="Service">
                  <span>Services</span>
                </Link>
              </li>
            </ul>
          </nav>
          <button className="border border-white rounded-full font-bold px-8 py-2">
            Contact me
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
