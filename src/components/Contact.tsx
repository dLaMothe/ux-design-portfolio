import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="card">
          <div className="card-content">
            <p>
              I'm always interested in discussing new opportunities and exciting
              projects. Feel free to reach out if you'd like to collaborate or
              just want to say hello!
            </p>
            <div style={{ marginTop: "2rem" }}>
              <div style={{ marginBottom: "1rem" }}>
                <strong>Email:</strong> hello@uxdesigner.com
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <strong>LinkedIn:</strong> linkedin.com/in/uxdesigner
              </div>
              <div>
                <strong>Portfolio:</strong> uxdesigner.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
