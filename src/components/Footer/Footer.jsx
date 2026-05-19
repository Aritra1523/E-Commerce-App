import { Link } from "react-router-dom";
import "./Footer.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useContext(ThemeContext);
  return (
    <footer
      className={`footer ${theme === "dark" ? "footer-dark" : "footer-light"}`}
    >
      <div className="footer-container">
        {/* Brand Section */}
        <div>
          <h2 className="footer-logo">ShopSphere</h2>

          <p className="footer-description">
            Modern eCommerce platform for discovering high-quality products with
            smooth shopping experience and secure checkout.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="footer-title">Quick Links</h3>

          <ul className="footer-links">
            <li>
              <Link to="/" className="footer-link">
                Home
              </Link>
            </li>

            <li>
              <Link to="/" className="footer-link">
                Products
              </Link>
            </li>

            <li>
              <Link to="/" className="footer-link">
                Categories
              </Link>
            </li>

            <li>
              <Link to="/cart" className="footer-link">
                Cart
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="footer-title">Support</h3>

          <ul className="footer-links">
            <li>
              <a href="#" className="footer-link">
                Contact Us
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                Privacy Policy
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                Terms & Conditions
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="footer-title">Newsletter</h3>

          <p className="footer-description footer-newsletter-text">
            Subscribe to get latest updates and exclusive offers.
          </p>

          <div className="footer-newsletter">
            <input
              type="email"
              placeholder="Enter your email"
              className="footer-input"
            />

            <button className="footer-button">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>© {currentYear} ShopSphere. All rights reserved.</p>
          <h3 className="footer-credit">
            Made with <span className="heart">❤️</span> by Aritra
          </h3>{" "}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
