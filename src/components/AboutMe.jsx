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
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            About Me
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
        {/* Heading end*/}

        {/* content start */}
        <div className="col-lg-11 mx-auto">
          {chapters.length > 0 &&
            chapters.map((chapter, index) => (
              <div key={index} className="featured-box style-3 mb-5" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <div
                  className={
                    "featured-box-icon text-primary" +
                    (darkTheme ? " bg-dark-1" : " bg-white")
                  }

                >
                  <img
                    className="img-fluid d-inline-block w-auto"
                    src={chapter.src}
                    alt=""
                    style={{ maxWidth: "100%", maxHeight: "100%", height: "auto" }}/>
                </div>
                <div>
                  <h3 className={darkTheme ? "text-white" : ""}>
                    {chapter.title}
                  </h3>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {chapter.content}
                  </p>
                </div>
              </div>
            ))}
        </div>
        {/* content end */}
      </div>
    </section>
  );
};

export default AboutMe;
