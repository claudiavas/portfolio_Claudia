import React from "react";

const TermsAndConditions = ({ darkTheme }) => {
  return (
    <div
      id="terms-policy"
      className="modal fade"
      role="dialog"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-lg modal-dialog-centered"
        role="document"
      >
        <div
          className={
            "modal-content " + (darkTheme ? "bg-dark-2 text-light" : "")
          }
        >
          <div className="modal-header">
            <h5 className={"modal-title " + (darkTheme ? "text-white" : "")}>
              Terms &amp; Conditions
            </h5>
            <button
              type="button"
              className={"btn-close " + (darkTheme ? "btn-close-white" : "")}
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body p-4">
            <h3 className={"mb-3 " + (darkTheme ? "text-white" : "")}>
              Use of the Website
            </h3>
            <p>
              By accessing this website, you agree to comply with these terms
              and conditions of use. If you disagree with any part of these
              terms and conditions, please do not use our website.
            </p>
            <h3 className={"mb-3 " + (darkTheme ? "text-white" : "")}>
              Intellectual Property
            </h3>
            <p>
              This website and its content are the property of Claudia Vásquez and are protected by intellectual property laws. You may
              not reproduce, distribute, or exploit any content from this
              website without our express written permission.
            </p>
            <h3 className={"mb-3 " + (darkTheme ? "text-white" : "")}>
              Privacy Policy
            </h3>
            <p>
              Our privacy policy outlines how we collect, use, and protect your
              personal information in compliance with the General Data
              Protection Regulation (GDPR) of the European Union.
            </p>
            <h3 className={"mb-3 " + (darkTheme ? "text-white" : "")}>
              Limitation of Liability
            </h3>
            <p>
              We are not liable for any damages or losses resulting from your
              use of this website. This includes, but is not limited to,
              direct, indirect, incidental, consequential, and punitive
              damages.
            </p>
            <h3 className={"mb-3 " + (darkTheme ? "text-white" : "")}>
              Governing Law and Jurisdiction
            </h3>
            <p>
              These terms and conditions are governed by the laws of Spain and
              the regulations of the European Union. Any disputes relating to
              these terms and conditions will be subject to the exclusive
              jurisdiction of the courts of Spain.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;

