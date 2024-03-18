import { faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#080512] text-[#f6f6f6] mt-20 py-12">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="w-full md:w-1/3">
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <ul className="footer__list">
            <p className="mb-2 w-28">
              123 Main Street City, State 12345 info@example.com
            </p>
          </ul>
        </div>
        <div className="w-full md:w-1/3 mt-6 md:mt-0">
          <h3 className="text-lg font-bold mb-4">Customer Service</h3>
          <ul className="footer__list">
            <li className="mb-2">
              <Link to="/">FAQs</Link>
            </li>
            <li className="mb-2">
              <Link to="/">Returns</Link>
            </li>
            <li className="mb-2">
              <Link to="/">Shipping</Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 mt-6 md:mt-0">
          <h3 className="text-lg font-bold mb-4">Stay Connected</h3>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Your Email"
              className="bg-gray-900 text-white py-2 px-4 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
            />
            <button className="bg-[#aa8be2] transition-all hover:bg-[#3f1491] hover:text-[#f6f6f6] hover:translate-x-2 active:translate-y-2 text-white py-2 px-4 rounded-r-md">
              Subscribe
            </button>
          </div>
          <div className="mt-4">
            <Link to="/" className="text-white text-2xl mr-4">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Link>
            <Link to="/" className="text-white text-2xl mr-4">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link to="/" className="text-white text-2xl mr-4">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
