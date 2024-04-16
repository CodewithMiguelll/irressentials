import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const ProductCard = ({ product }) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isAddedToFavorites, setIsAddedToFavorites] = useState(false);

  return (
    <div className="w-60 mx-auto bg-[#aa8be2] shadow-lg rounded-lg overflow-hidden">
      <img
        className="w-full h-56 object-cover object-center"
        src={product.image}
        alt={product.name}
        loading="lazy"
      />
      <div className="p-4">
        <h2 className="text-[#f6f6f6] text-lg font-semibold font-Abeezee">{product.name}</h2>
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
