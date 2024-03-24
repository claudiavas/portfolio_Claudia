import React from "react";
import resumeFile from "../documents/resume.pdf";

const Skills = ({ classicHeader, darkTheme }) => {

  const languages = [
    {
      name: "Spanish",
      percent: 100,
    },
    {
      name: "English",
      percent: 90,
    },
  ]

  const frontend = [
    {
      name: "HTML/CSS",
      percent: 80,
    },
    {
      name: "JavaScript",
      percent: 70,
    },
    {
      name: "React JS",
      percent: 70,
    },
    {
      name: "Next Js",
      percent: 70,
    },
    {
      name: "Material UI",
      percent: 80,
    },
    {
      name: "Bootstrap",
      percent: 60,
    },
  ];

  const backend = [
    {
      name: "NodeJs",
      percent: 70,
    },
    {
      name: "Express",
      percent: 70,
    },
    {
      name: "Mongo DB",
      percent: 70,
    },
  ];

  return (
    <section
      id="skills"
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            Summary
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            My Skills
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        {/* Language Skills */}
        <h2
          className={
            "text-6 fw-600 mt-4 mb-4 " + (darkTheme ? "text-white" : "")
          }
        >
          Languages
        </h2>
        <div className="row gx-5">
          {languages.length > 0 &&
            languages.map((skill, index) => (
              <div key={index} className="col-md-6">
                <p
                  className={
                    " fw-500 text-start mb-2 " +
                    (darkTheme ? "text-light" : "text-dark")
                  }
                >
                  {skill.name}{" "}
                  <span className="float-end">{skill.percent}%</span>
                </p>
                <div
                  className={
                    "progress progress-sm mb-4 " + (darkTheme ? "bg-dark" : "")
                  }
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.percent + "%" }}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
        </div>
         {/* Frontend Skills */}
         <h2
          className={
            "text-6 fw-600 mt-4 mb-4 " + (darkTheme ? "text-white" : "")
          }
        >
          Frontend
        </h2>
        <div className="row gx-5">
          {frontend.length > 0 &&
            frontend.map((skill, index) => (
              <div key={index} className="col-md-6">
                <p
                  className={
                    " fw-500 text-start mb-2 " +
                    (darkTheme ? "text-light" : "text-dark")
                  }
                >
                  {skill.name}{" "}
                  <span className="float-end">{skill.percent}%</span>
                </p>
                <div
                  className={
                    "progress progress-sm mb-4 " + (darkTheme ? "bg-dark" : "")
                  }
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.percent + "%" }}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
        </div>
         {/* Backend Skills */}
         <h2
          className={
            "text-6 fw-600 mt-4 mb-4 " + (darkTheme ? "text-white" : "")
          }
        >
          Backend
        </h2>
        <div className="row gx-5">
          {backend.length > 0 &&
            backend.map((skill, index) => (
              <div key={index} className="col-md-6">
                <p
                  className={
                    " fw-500 text-start mb-2 " +
                    (darkTheme ? "text-light" : "text-dark")
                  }
                >
                  {skill.name}{" "}
                  <span className="float-end">{skill.percent}%</span>
                </p>
                <div
                  className={
                    "progress progress-sm mb-4 " + (darkTheme ? "bg-dark" : "")
                  }
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.percent + "%" }}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
        </div>
        <div className="text-center mt-5">
          <a
            className="btn btn-outline-secondary rounded-pill shadow-none"
            href={resumeFile}
            download
          >
            Download CV
            <span className="ms-1">
              <i className="fas fa-download" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
