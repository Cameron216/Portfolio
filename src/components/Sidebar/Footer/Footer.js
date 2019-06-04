import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faGithubSquare,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.scss";

function Footer() {
  return (
    <footer>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/cameronsbailey" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="4x" />
        </a>
        <a href="https://twitter.com/CameronBailey21" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitterSquare} size="4x" />
        </a>
        <a href="https://github.com/Cameron216" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithubSquare} size="4x" />
        </a>
      </div>
      <p className="copyright">
        &copy; 2019 - <Link to="/">Cameron Bailey</Link>
      </p>
    </footer>
  );
}

export default Footer;
