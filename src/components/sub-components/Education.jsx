import React from "react";

const Education = () => {
  const educations = [
    {
      _id: "1",
      title: "Matriculation",
      description:
        "I completed my matriculation from Jawahar Navodaya Vidyalaya Sarsaul Kanpur Nagar with CGPA of 8.4 .",
    },
    {
      _id: "2",
      title: "Intermediate",
      description:
        "I completed my intermediate education from Jawahar Navodaya Vidyalaya Sarsaul Kanpur Nagar with percentage of 83.",
    },
    {
      _id: "3",
      title: "Graduation",
      description:
        "I recently graduated from Jss Academy Of Technical Education Noida with a degree in B.tech(Branch: CSE) with SGPA of 7.56.",
    },
  ];

  return (
    <>
      <div className="education_component" style={{ marginTop: "2rem" }}>
        <h3>EDUCATION</h3>
        {educations.map((element) => {
          return (
            <div className="education" key={element._id}>
              <p>{element.title}</p>
              <p>{element.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Education;
