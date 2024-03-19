import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faShoePrints, faSprayCan, faTimes, faWineGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <nav className="text-white flex justify-between items-center p-6">
        <Link to="/home">
          <h1 className="font-bold font-Konit text-white">Irressentials</h1>
        </Link>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            <FontAwesomeIcon icon={showMenu ? faTimes : faBars} size="lg" />
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-9">
          <Link to="/" className="hover:border-b-2">
            Home
          </Link>
          <Link to="/wines" className="hover:border-b-2">
            Wines
          </Link>
          <Link to="/perfumes" className="hover:border-b-2">
            Perfumes
          </Link>
          <Link to="/shoes" className="hover:border-b-2">
            Shoes
          </Link>
        </ul>

        {/*LogIn and Sign Up Btns */}
        <ul className="hidden gap-3 lg:flex">
          <Link to="/log-in">
            <button className="border rounded-xl p-1 bg-[#3f1491] transition-all w-20 hover:bg-[#f6f6f6] hover:-translate-y-1 active:translate-y-1  hover:text-[#aa8be2]">
              Log In
            </button>
          </Link>
          <Link to="/sign-up">
            <button className="border rounded-xl p-1 ml-4 w-20 bg-[#671bf5] transition-all hover:-translate-y-1 active:translate-y-1 hover:bg-[#f6f6f6] hover:text-[#aa8be2]">
              Sign Up
            </button>
          </Link>
        </ul>

        {/* Mobile Menu */}
        {showMenu && (
          <div className="lg:hidden rounded-lg fixed right-1 top-16 bg-[#aa8be3] p-5 shadow-lg z-10">
            <Link to="/" className="block py-2 hover:border-r-2">
              <FontAwesomeIcon icon={faHome} /> Home
            </Link>
            <Link to="/wines" className="block py-2 hover:border-r-2">
              <FontAwesomeIcon icon={faWineGlass} /> Wines
            </Link>
            <Link to="/perfumes" className="block py-2 hover:border-r-2">
              <FontAwesomeIcon icon={faSprayCan} /> Perfumes
            </Link>
            <Link to="/shoes" className="block py-2 hover:border-r-2">
              <FontAwesomeIcon icon={faShoePrints} /> Shoes
            </Link>

            {/* Log In and Sign Up buttons in the menu */}
            <div className="mt-4">
              <Link to="/log-in">
                <button className="border rounded-xl transition-all hover:-translate-y-1 active:translate-y-1 p-1 bg-[#3f1491] hover:bg-white w-20  hover:text-[#aa8be2]">
                  Log In
                </button>
              </Link>
              <Link to="/sign-up">
                <button className="border rounded-xl p-1 ml-4 w-20 transition-all hover:-translate-y-1 active:translate-y-1 bg-[#671bf5] hover:bg-white hover:text-[#aa8be2]">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
