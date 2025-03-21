/** @format */

import "./footer.css";
import logo2 from "../../assets/logo2.gif";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="container-fluid footer-section">
      <div className="footer_content d-flex justify-content-between align-items-center py-3">
        {/* Social Media Links */}
        <ul className="nav list-unstyled d-flex">
          <strong className="text-white">Follow us</strong>
          <li>
            <a className="text-white" href="#" aria-label="Facebook">
              <FaFacebook className="fs-4 face" />
            </a>
          </li>
          <li>
            <a className="text-white" href="#" aria-label="Instagram">
              <FaInstagram className="fs-4 insta" />
            </a>
          </li>
          <li>
            <a className="text-white" href="#" aria-label="Twitter">
              <FaTwitter className="fs-4 twiter" />
            </a>
          </li>
        </ul>

        {/* Logo */}
        <div className="d-flex justify-content-center">
          <img src={logo2} alt="Movie Cinema Logo" className="logo-img" />
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-white">&copy; 2024 MOVIZ CINEMA | Designed by Bahaa</p>
        </div>
      </div>

      {/* Copyright Bottom Bar */}
      <div className="copyright">
        <p>All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
