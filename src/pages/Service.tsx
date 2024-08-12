import React from "react";
import "./style/service.css";
function Service() {
  return (
    <>
      <div className="container pt-10">
        <h2 className="heading2 max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          My Sevices
        </h2>
        <div className="row">
          <div className="service">
            <i className="ri-macbook-line"></i>
            <h3>Web Design</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="service">
            <i className="ri-store-3-line"></i>
            <h3>Marketing</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="service">
            <i className="ri-database-2-line"></i>
            <h3>Data Analysis</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="service">
            <i className="ri-palette-line"></i>
            <h3>Graphic Design</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="service">
            <i className="ri-android-line"></i>
            <h3>App Development</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="service">
            <i className="ri-account-box-line"></i>
            <h3>Accouting</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="service">
            <i className="ri-hand-coin-line"></i>
            <h3>Business Management</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="service">
            <i className="ri-english-input"></i>
            <h3>English Teaching</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
