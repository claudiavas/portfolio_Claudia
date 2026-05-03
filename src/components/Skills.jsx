import React from "react";
import resumeFile from "../documents/resume.pdf";

const Skills = ({ classicHeader, darkTheme }) => {

  const languages = [
    {
      name: "Spanish (Native)",
      percent: 100,
    },
    {
      name: "English (C1 Advanced)",
      percent: 95,
    },
  ]

  const ai = [
    {
      name: "Claude API",
      percent: 90,
    },
    {
      name: "MCP (Model Context Protocol)",
      percent: 85,
    },
    {
      name: "LLM Integrations",
      percent: 80,
    },
    {
      name: "Prompt Engineering",
      percent: 85,
    },
  ];

  const automation = [
    {
      name: "CRM & Zoho Ecosystem",
      percent: 90,
    },
    {
      name: "CRM Workflows Automation & Blueprints",
      percent: 95,
    },
    {
      name: "Custom Automation Scripts",
      percent: 70,
    },
    {
      name: "Business Analytics",
      percent: 95,
    },
  ];

  const frontend = [
    {
      name: "React JS",
      percent: 85,
    },
    {
      name: "Next.js",
      percent: 80,
    },
    {
      name: "TypeScript",
      percent: 75,
    },
    {
      name: "JavaScript",
      percent: 85,
    },
    {
      name: "HTML/CSS",
      percent: 85,
    },
    {
      name: "Material UI",
      percent: 90,
    },
    {
      name: "Bootstrap",
      percent: 75,
    },
  ];

  const backend = [
    {
      name: "Node.js",
      percent: 80,
    },
    {
      name: "Express.js",
      percent: 80,
    },
    {
      name: "MongoDB",
      percent: 75,
    },
    {
      name: "PHP",
      percent: 70,
    },
    {
      name: "SQLite",
      percent: 75,
    },
  ];

  const tools = [
    {
      name: "Docker",
      percent: 70,
    },
    {
      name: "Git & GitHub",
      percent: 90,
    },
    {
      name: "Agile & Scrum",
      percent: 90,
    },
    {
      name: "Kanban",
      percent: 85,
    },
    {
      name: "Zoho Sprints",
      percent: 85,
    },
    {
      name: "Notion & Project Management",
      percent: 85,
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
         {/* IA & LLM Skills */}
         <h2
          className={
            "text-6 fw-600 mt-4 mb-4 " + (darkTheme ? "text-white" : "")
          }
        >
          IA & LLM
        </h2>
        <div className="row gx-5">
          {ai.length > 0 &&
            ai.map((skill, index) => (
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
         {/* Business Operations & Automation Skills */}
         <h2
          className={
            "text-6 fw-600 mt-4 mb-4 " + (darkTheme ? "text-white" : "")
          }
        >
          Business Operations & Automation
        </h2>
        <div className="row gx-5">
          {automation.length > 0 &&
            automation.map((skill, index) => (
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
         {/* Tools & DevOps Skills */}
         <h2
          className={
            "text-6 fw-600 mt-4 mb-4 " + (darkTheme ? "text-white" : "")
          }
        >
          Tools & DevOps
        </h2>
        <div className="row gx-5">
          {tools.length > 0 &&
            tools.map((skill, index) => (
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
