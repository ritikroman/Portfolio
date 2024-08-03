import React from "react";
import Navbar from "./Navbar";
import { TbGridDots } from "react-icons/tb";
import { Link } from "react-router-dom";

const Portfolio = ({ show, setShow }) => {
  const projects = [
    {
      _id: "1",
      title: "Recipe Finder",
      category: "React Javascript",
      thumbnail: "/recipe-img.jpg",
      projectUrl: "https://my-repository-orcin-pi.vercel.app/",
    },
    {
      _id: "2",
      title: "Todo App",
      category: "React Javascript",
      thumbnail: "/todo-img.jpg",
      projectUrl: "https://todo-app-one-lovat-98.vercel.app/",
    },
    {
      _id: "3",
      title: "News App",
      category: "API Integration React Javascript",
      thumbnail: "/newss-img.jpg",
      projectUrl: "https://new-new-gk48.vercel.app/",
    },
    {
      _id: "4",
      title: "Portfolio With Dashboard",
      category: "React Javascript",
      thumbnail: "/portfolio-home.jpg",
      projectUrl: "https://portfolio-one-lovat-98.vercel.app/",
    },
    {
      _id: "5",
      title: "Luxury Rentals",
      category: "React Javascript",
      thumbnail: "/luxury.jpg",
      projectUrl: "https://real-estate-website-roan.vercel.app/",
    },
  ];
  return (
    <section className="page portfolioPage">
      <Navbar show={show} />
      <TbGridDots onClick={() => setShow(!show)} className="hamburger" />
      <div className="banner">
        <div className="header">
          <img src="/star.png" alt="star" /> <h1>ALL PROJECTS</h1>
          <img src="/star.png" alt="star" />
        </div>
        <div className="latest-projects">
          <div className="first-column">
            {projects.slice(0, 3).map((element) => {
              return (
                <div className="card" key={element._id}>
                  <img src={element.thumbnail} alt="project-thumbnail" />
                  <div>
                    <span>
                      <p>{element.category}</p>
                      <p>{element.title}</p>
                    </span>
                    <span>
                      <Link to={element.projectUrl} target="_blank">
                        <img src="/arrow.svg" alt="arrow" />
                      </Link>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="second-column">
            <div className="header">
              <img src="/star.png" alt="star" />
              <h1>ALL PROJECTS</h1>
              <img src="/star.png" alt="star" />
            </div>
            <div className="projects">
              {projects.slice(3, 5).map((element) => {
                return (
                  <div className="card" key={element._id}>
                    <img src={element.thumbnail} alt="project-thumbnail" />
                    <div>
                      <span>
                        <p>{element.category}</p>
                        <p>{element.title}</p>
                      </span>
                      <span>
                        <Link to={element.projectUrl} target="_blank">
                          <img src="/arrow.svg" alt="arrow" />
                        </Link>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="remaining-projects">
          {projects.slice(5).map((element) => {
            return (
              <div className="card" key={element._id}>
                <img src={element.thumbnail} alt="project-thumbnail" />
                <div>
                  <span>
                    <p>{element.category}</p>
                    <p>{element.title}</p>
                  </span>
                  <span>
                    <Link to={element.projectUrl} target="_blank">
                      <img src="/arrow.svg" alt="arrow" />
                    </Link>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
