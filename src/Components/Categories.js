import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "./Footer";
import Header from "./Header";
import Cartillion from "../assets/images/Château Du Cartillon.jpg";
import Sneaker from "../assets/images/pexels-ray-piedra-1464625.jpg"
import Perfume from "../assets/images/Hugo Boss The Scent.jpg";

const CategoriesPage = () => {
  return (
    <div>
      <Header />
      <div className="bg-[#0E0917] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#f6f6f6] font-Fira">
              Categories
            </h1>
            <p className="mt-2 text-lg text-[#f6f6f6]">
              Choose a category to browse
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              className="bg-[#aa8be2] rounded-lg shadow-md p-6"
            >
              <h2 className="text-xl font-semibold font-Exo text-[#f6f6f6] mb-4">
                Wines
              </h2>
              <img
                src= {Cartillion}
                alt="Wines"
                loading="lazy"
                className="mx-auto mb-4"
              />
              <Link to="/wines">
              <button className="bg-[#3f1491] text-[#f6f6f6] transition-all hover:-translate-y-1 hover:bg-[#f6f6f6] hover:text-[#aa8be2] py-2 px-4 rounded-lg font-Abeezee">
                Shop Now
              </button>
              </Link>
              
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              className="bg-[#aa8be2] rounded-lg shadow-md p-6"
            >
              <h2 className="text-xl font-semibold font-Exo text-[#f6f6f6] mb-4">
                Shoes
              </h2>
              <img
                src={Sneaker}
                alt="Shoes"
                loading="lazy"
                className="mx-auto mb-4"
              />
              <Link to="/shoes">
                <button className="bg-[#3f1491] text-[#f6f6f6] transition-all hover:-translate-y-1 hover:bg-[#f6f6f6] hover:text-[#aa8be2] py-2 px-4 rounded-lg font-Abeezee">
                Shop Now
              </button>
              </Link>
              
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              className="bg-[#aa8be2] rounded-lg shadow-md p-6"
            >
              <h2 className="text-xl font-semibold text-[#f6f6f6] font-Exo mb-4">
                Perfumes
              </h2>
              <img
                src={Perfume}
                alt="Perfumes"
                loading="lazy"
                className="mx-auto mb-4"
              />
              <Link to="/perfumes">
              <button className="bg-[#3f1491] text-[#f6f6f6] transition-all hover:-translate-y-1 hover:bg-[#f6f6f6] hover:text-[#aa8be2] py-2 px-4 rounded-lg font-Abeezee">
                Shop Now
              </button>
              </Link>
              
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CategoriesPage;
