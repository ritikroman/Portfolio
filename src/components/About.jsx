import React from "react";
import Navbar from "./Navbar";
import { TbGridDots } from "react-icons/tb";
const About = ({ show, setShow }) => {
  return (
    <>
      <section className="page aboutPage">
        <Navbar show={show} />
        <TbGridDots onClick={() => setShow(!show)} className="hamburger" />

        <div className="banner">
          <div className="content">
            <div>
              <h1>ABOUT</h1>
              <h3>ritiksharma9307@gmail.com</h3>
            </div>
            <div>
              Hello, I'm Ritik Sharma, a frontend developer with a passion for creating intuitive and dynamic user interfaces. 
               I specialize in crafting visually appealing and user-friendly websites using HTML,
              CSS, JavaScript and React library. {" "}
              <span>
                {" "}
                My passion lies in creating interactive, responsive designs
                while ensuring efficient data handling and server-side
                processes. Let's collaborate to bring your web project to life,
                marrying design elegance with technical excellence!{" "}
              </span>
            </div>
            <div>
              <p>Sector-62 Noida</p>
              <p>Uttar Pradesh, India</p>
            </div>
          </div>
          <div className="profileImage">
            <img src="/roman.png" alt="profilImage" />
            <span></span>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
