import React from "react";
import { faBoxesPacking, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "./Header";
import Footer from "./Footer";

const ProductDetails = ({ match, products }) => {
  const { id } = match.params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div>
        <Header />
        <div data-aos="fade-up"
        data-duration="1000" className="flex justify-center flex-col items-center h-screen">
          <FontAwesomeIcon icon={faBoxesPacking} className="text-[#f6f6f6] text-5xl mb-7"/>
          <p className="text-[#f6f6f6] text-lg lg:text-3xl">Coming soon...</p>
        </div>
        <Footer/>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div>
        <h2 className="font-Exo text-3xl text-[#f6f6f6] text-center">
          {product.name}
        </h2>
        <img src={product.image} alt={product.name} />
        <p>Price: ${product.price}</p>
        <div>
          <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
