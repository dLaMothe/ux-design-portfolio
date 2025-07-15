import React from "react";
import profilePic from "../assets/footer/profilPicture.png";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Top Section */}
        <div className="footer-top-section">
          <h2 className="footer-headline">LET'S Embark on a Quest together</h2>
          <a href="mailto:carina.lea.meyer@gmail.com" className="btn-action">
            <span>GET IN TOUCH</span>
          </a>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom-section">
          {/* Contact Info */}
          <div className="footer-contact">
            <img
              src={profilePic}
              alt="Carina Meyer"
              className="footer-profile-pic"
            />
            <div className="footer-contact-text">
              <div className="footer-name">CARINA LEA MEYER</div>
              <div className="footer-details">
                <span>
                  Email:{" "}
                  <a
                    href="mailto:carina.lea.meyer@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    carina.lea.meyer@gmail.com
                  </a>
                </span>
                <span>
                  LinkedIn:{" "}
                  <a
                    href="https://linkedin.com/in/carina-meyer-5824b69a"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/carina-meyer-5824b69a
                  </a>
                </span>
              </div>
            </div>
          </div>
          {/* Legal Line */}
          <div className="footer-legal">
            ©2025 Carina Lea Meyer. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
