import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ProductCard = ({ product }) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isAddedToFavorites, setIsAddedToFavorites] = useState(false);

  return (
    <div className="w-60 mx-auto transition-all hover:-translate-y-2 active:scale-95 bg-[#] shadow-lg rounded-lg overflow-hidden">
      <img
        className="w-full h-56 object-cover object-center"
        src={product.image}
        alt={product.name}
        loading="lazy"
      />
      <div className="p-4">
        <Link to={`/product/$product.id`}>
          <h2 className="text-[#f6f6f6] text-lg font-Abeezee hover:cursor-pointer inline-block border-b-2 border-transparent hover:border-[#f6f6f6]">
          {product.name}
        </h2>
        </Link>
        <p className="mt-2 text-[#f6f6f6]">${product.price}</p>
        <div className="mt-4 flex gap-6 justify-between">
          <button
            className={`px-4 py-2 bg-${
              isAddedToCart ? "bg-purple-700" : "[#3f1491]"
            } text-white rounded-md transition-all hover:bg-[#f6f6f6] hover:text-[#aa8be2]`}
            onClick={() => setIsAddedToCart(!isAddedToCart)}
          >
            {isAddedToCart ? "Added to Cart" : "Add to Cart"}
          </button>
          <button
            className={`px-4 py-2 bg-${
              isAddedToFavorites ? "red" : "[#3f1491]"
            } text-white rounded-md transition-all hover:bg-[#f6f6f6] hover:text-[#aa8be2]`}
            onClick={() => setIsAddedToFavorites(!isAddedToFavorites)}
          >
            <FontAwesomeIcon icon={faHeart} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
