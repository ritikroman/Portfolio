import React from "react";
import { FaRegDotCircle } from "react-icons/fa";

const Skills = () => {
  const skills = [
    {
      title: "React.JS",
      progress: 60,
    },
    {
      title: "JavaScript",
      progress: 75,
    },
    {
      title: "HTML",
      progress: 90,
    },
    {
      title: "CSS",
      progress: 85,
    },
    {
      title: "Tailwind CSS",
      progress: -30,
    },
    {
      title: "BootStrap",
      progress: -50,
    },
    {
      title: "SQL",
      progress: 71,
    },
    {
      title: "MongoDB",
      progress: -50,
    },
  ];

  return (
    <>
      <div>
        <h3>DEVELOPMENT SKILLS</h3>
        {skills.map((element) => {
          return (
            <div key={element.title} className="progressBar">
              <p>{element.title}</p>
              <span>
                <FaRegDotCircle
                  style={{
                    right: `${
                      element.progress > 95 ? 0 : 100- element.progress
                    }`,
                  }}
                />
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Skills;
