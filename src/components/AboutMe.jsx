import React from "react";

// import image1 from "../images/about/chapter1.png";
// import image2 from "../images/about/chapter2.png";
// import image3 from "../images/about/chapter3.png";
// import image4 from "../images/about/chapter4.png";
// import image5 from "../images/about/chapter5.png";

const AboutMe = ({ classicHeader, darkTheme }) => {



  const chapters = [
    {
      src: "../images/about/chapter1.png",
      title: "Fearless Beginner",
      content: "After high school, I completed a year-long programming course. A world full of challenges awaited me!"
    },
    {
      src: "../images/about/chapter2.png",
      title: "Academic Adventures",
      content: "I enrolled in a prestigious university for Business Administration. A journey full of strategy and learning!"
    },
    {
      src: "../images/about/chapter3.png",
      title: "The Multifaceted Expert",
      content: "With over 20 years of experience in Finance and Human Resources, I became a master of multitasking."
    },
    {
      src: "../images/about/chapter4.png",
      title: "The Efficient Implementer",
      content: "During years problem-solving with an IT mindset, I implemented numerous systems."
    },
    {
      src: "../images/about/chapter5.png",
      title: "From Code Curious to Full Stack Fan",
      content: "It's never too late to switch lanes and embrace the full stack life. Join me in my coding adventures!"
    }
  ];


  return (
    <section
      id="about"
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* About Me intro section */}
        <div className="col-lg-10 mx-auto mb-5">
          <h1 className={"text-16 fw-600 " + (darkTheme ? "text-white" : "")}>
            Claudia Vásquez
          </h1>
          <h2 className={"text-7 fw-500 mb-3 " + (darkTheme ? "text-white" : "")}>
            CRM & Automation Lead · RevOps & AI Solutions Architect
          </h2>
          <p className={"text-5 " + (darkTheme ? "text-white-50" : "")}>
            Líder técnica estratégica combinando sólida experiencia en operaciones de negocio con desarrollo full stack — posicionada de forma única para conectar estrategia de negocio con ejecución tecnológica. Actualmente arquitecta de ecosistemas CRM entregando impacto empresarial a través de automatización potenciada por IA.
          </p>
        </div>
        {/* About Me intro end */}

        {/* My Journey Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            Journey
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            My Journey
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Journey Heading end*/}

        {/* content start */}
        <div className="col-lg-11 mx-auto">
          <div style={{ display: "grid", gridTemplateColumns: "25% 75%", gap: "30px", alignItems: "start" }}>
            {/* Circles column */}
            <div style={{ display: "flex", flexDirection: "column", gap: "40px", justifyContent: "flex-start" }}>
              {chapters.length > 0 &&
                chapters.map((chapter, index) => (
                  <div
                    key={index}
                    className={
                      "featured-box-icon text-primary flex-shrink-0 " +
                      (darkTheme ? " bg-dark-1" : " bg-white")
                    }
                    style={{ width: "80px", height: "80px", display: "flex", alignItems: "center", justifyContent: "center" }}
                  >
                    <img
                      className="img-fluid d-inline-block w-auto"
                      src={chapter.src}
                      alt=""
                      style={{ maxWidth: "70px", maxHeight: "70px", height: "auto" }}/>
                  </div>
                ))}
            </div>

            {/* Text column */}
            <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
              {chapters.length > 0 &&
                chapters.map((chapter, index) => (
                  <div key={index}>
                    <h3 className={"text-5 " + (darkTheme ? "text-white" : "")} style={{ marginBottom: "8px" }}>
                      {chapter.title}
                    </h3>
                    <p className={"text-4 mb-0 " + (darkTheme ? "text-white-50" : "")}>
                      {chapter.content}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* content end */}
      </div>
    </section>
  );
};

export default AboutMe;
