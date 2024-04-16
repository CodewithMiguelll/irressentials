import {
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#080512] text-[#f6f6f6] mt-20 py-12">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="w-full md:w-1/3 mb-6 md:mb-0 md:pr-8">
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p className="mb-2 w-28 font-Abeezee">
            123 Main Street City, State 12345 info@example.com
          </p>
        </div>
        <div className="w-full md:w-1/3 mb-6 md:mb-0 md:px-8">
          <h3 className="text-lg font-bold mb-4">Customer Service</h3>
          <ul className="footer__list font-Abeezee">
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
        <div className="w-full md:w-1/3">
          <h3 className="text-lg font-bold mb-4">Stay Connected</h3>
          <div className="flex flex-col md:flex-row items-center">
            <input
              type="email"
              placeholder="Your Email"
              className="bg-gray-900 text-white py-2 px-4 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-56"
            />
            <button className="bg-[#aa8be2] transition-all hover:bg-[#3f1491] hover:text-[#f6f6f6] hover:translate-x-2 active:translate-y-2 text-white py-2 px-4 rounded-r-md md:mt-0 mt-2 md:ml-2">
              Subscribe
            </button>
          </div>
          <div className="mt-4 flex">
            <a
              href="https://linkedin.com/in/chikaima-uwakwe-218b1a260/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl mr-4"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              href="https://www.instagram.com/developedby.miguel/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl mr-4"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl mr-4"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
