import React from "react";
import resumeFile from "../documents/resume.pdf";

const Resume = ({ classicHeader, darkTheme }) => {
  const educationDetails = [
    {
      yearRange: "2000 - 2004",
      title: "Computer Science",
      place: "International University",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
      yearRange: "2005 - 2008",
      title: "Bachelor Degree",
      place: "University of California",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
      yearRange: "2009 - 2012",
      title: "Master Degree",
      place: "Harvard University",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
  ];

  const experienceDetails = [
    {
      yearRange: "2012 - 2013",
      title: "Jr. UI UX Designer",
      place: "Themeforest",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
      yearRange: "2014 - 2016",
      title: "Jr. Product Designer",
      place: "Dribbble",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
      yearRange: "2017 - 2019",
      title: "Product Designer",
      place: "Adobe",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
  ];

  return (
    <section
      id="resume"
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
            Resume
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gx-5">
          {/* My Education */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Education
            </h2>
            {educationDetails.length > 0 &&
              educationDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
          {/* My Experience */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Experience
            </h2>
            {experienceDetails.length > 0 &&
              experienceDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
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

export default Resume;
