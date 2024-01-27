import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faGithub, faLinkedin, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css"; // Create a separate CSS file for styling the footer if needed.

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-links">
          <a href="https://www.facebook.com/rk.kundu26/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>

          <a href="https://www.instagram.com/rk_ripam_kundu/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <a href="https://www.linkedin.com/in/rk-ripam-kundu/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          
          <a href="https://twitter.com/ripam_kundu" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>

          <a href="https://api.whatsapp.com/send?phone=917477638690&text=Hello Connection..!" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>

          <a href="https://github.com/ripamkundu" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          
        </div>

        <div className="copy-right">
          <p><b>&copy; {new Date().getFullYear()} Rk.Ripam Kundu. All rights reserved.</b></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
