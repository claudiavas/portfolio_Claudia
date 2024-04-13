import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { Tooltip } from "./Tooltip";

const Contact = ({ classicHeader, darkTheme }) => {
  const form = useRef();
  const [sendingMail, setSendingMail] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSendingMail(true);
    emailjs
      .sendForm(
        "service_o7rx2pi",
        "template_btrbnof",
        form.current,
        "BZ_Xp0ZdZftB3VKp0"
      )
      .then(
        (result) => {
          document.getElementById("contact-form").reset();
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: darkTheme ? "dark" : "light",
          });
          console.log(result.text);
          setSendingMail(false);
        },
        (error) => {
          toast.error("Something went wrong!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: darkTheme ? "dark" : "light",
          });
          console.log(error.text);
          setSendingMail(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
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
            Contact
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Get in Touch
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gy-5">
          {/* contact details */}
          <div className="col-md-5 col-xl-4 order-1 order-md-0 text-center text-md-start">
            <h2
              className={
                "mb-3 text-5 text-uppercase " + (darkTheme ? "text-white" : "")
              }
            >
              Contact
            </h2>
            <p className={"text-3 mb-1 " + (darkTheme ? "text-light" : "")}>
              <span className="text-primary text-5 me-2">
                <i className="fa-brands fa-square-whatsapp" />
              </span>
              <a href="https://wa.me/34644469610" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
                (034) 644 469 610
              </a>
            </p>
            <p className={"text-3 mb-4 " + (darkTheme ? "text-light" : "")}>
              <span className="text-primary text-4 me-2">
                <i className="fas fa-envelope" />
              </span>
              <a href="mailto:claudia.vasquez.as@gmail.com" className="text-dark">
                claudia.vasquez.as@gmail.com
              </a>
            </p>
            <h2
              className={
                "mb-3 text-5 text-uppercase " + (darkTheme ? "text-white" : "")
              }
            >
              Follow Me
            </h2>
            <ul
              className={
                "social-icons justify-content-center justify-content-md-start " +
                (darkTheme ? "social-icons-muted" : "")
              }
            >
              <li className="social-icons-linkedin a">
                <Tooltip text="Linkedin" placement="top">
                  <a
                    href="https://linkedin.com/in/claudiavas/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin" style={{ fontSize: "20px" }}/>
                  </a>
                </Tooltip>
              </li>

              <li className="social-icons-github">
                <Tooltip text="Github" placement="top">
                  <a
                    href="http://www.github.com/claudiavas"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github" style={{ fontSize: "20px" }}/>
                  </a>
                </Tooltip>
              </li>
            </ul>
          </div>
          {/* contact form */}
          <div className="col-md-7 col-xl-8 order-0 order-md-1">
            <h2
              className={
                "mb-3 text-5 text-uppercase text-center text-md-start " +
                (darkTheme ? "text-white" : "")
              }
            >
              Let's build something together!
            </h2>
            <form
              className={darkTheme ? "form-dark" : ""}
              id="contact-form"
              action="php/mail.php"
              method="post"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="row g-4">
                <div className="col-xl-6">
                  <input
                    name="user_name"
                    type="text"
                    className="form-control"
                    required
                    placeholder="Name"
                  />
                </div>
                <div className="col-xl-6">
                  <input
                    name="user_email"
                    type="email"
                    className="form-control"
                    required
                    placeholder="Email"
                  />
                </div>
                <div className="col">
                  <textarea
                    name="message"
                    className="form-control"
                    rows={5}
                    required
                    placeholder="Tell me more!"
                    defaultValue={""}
                  />
                </div>
              </div>
              <p className="text-center mt-4 mb-0">
                <button
                  id="submit-btn"
                  className="btn btn-primary rounded-pill d-inline-flex"
                  type="submit"
                >
                  {sendingMail ? (
                    <>
                      <span
                        role="status"
                        aria-hidden="true"
                        class="spinner-border spinner-border-sm align-self-center me-2"
                      ></span>
                      Sending.....
                    </>
                  ) : (
                    <>Send Message</>
                  )}
                </button>
              </p>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
