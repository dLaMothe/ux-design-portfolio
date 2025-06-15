import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="card-content">
            <p className="copy100">
              I'm always interested in discussing new opportunities and exciting
              projects. Feel free to reach out if you'd like to collaborate or
              just want to say hello!
            </p>
            <div style={{ marginTop: "2rem" }}>
              <div style={{ marginBottom: "1rem" }} className="copy75">
                <strong>Email:</strong> hello@uxdesigner.com
              </div>
              <div style={{ marginBottom: "1rem" }} className="copy75">
                <strong>LinkedIn:</strong> linkedin.com/in/uxdesigner
              </div>
              <div className="copy75">
                <strong>Portfolio:</strong> uxdesigner.com
              </div>
              <div className="copy50" style={{ marginTop: "1rem" }}>
                Available for freelance and full-time opportunities
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
