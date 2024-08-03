import React from "react";
import Navbar from "./Navbar";
import { TbGridDots } from "react-icons/tb";
import { Link } from "react-router-dom";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaGithubSquare, FaYoutube, FaHackerrank } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import CodeChefIcon from './sub-components/CodeChefIcon';

const Home = ({ show, setShow }) => {
  return (
    <>
      <section className="page homePage">
        <Navbar show={show} />
        <TbGridDots onClick={() => setShow(!show)} className="hamburger" />
        <div className="banner">
          <h1>RITIK</h1>
          <h1>SHARMA</h1>
          <p>Web Developer</p>
          <div className="btns">
            <Link
              to="https://apricot-marybelle-32.tiiny.site/"
              target="_blank"
            >
              Resume
            </Link>
            <Link to="/portfolio">Portfolio</Link>
          </div>
        </div>
        <footer>
          <ul>
            <Link
              to={"https://www.linkedin.com/in/ritik-sharma-7a0429273/"}
              target="_blank"
            >
              <AiFillLinkedin />
            </Link>
            <Link to={"https://github.com/ritikroman"} target="_blank">
              <FaGithubSquare />
            </Link>
            <Link to={"https://www.hackerrank.com/profile/ritiksharma93071"} target="_blank">
              <FaHackerrank />
            </Link>
            <Link
              to={"https://www.codechef.com/users/ritiksharma123"}
              target="_blank"
            >
              <CodeChefIcon  />
              </Link>
            
            
          </ul>
          <a className="download-btn" href="/ritik-resume.pdf" download="ritik-resume.pdf">
            [Download CV]
          </a>
        </footer>
      </section>
    </>
  );
};

export default Home;
