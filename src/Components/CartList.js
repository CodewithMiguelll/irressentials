import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Cart = () => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div>
      <Header />
      
      <div className="p-4 border border-gray-300 rounded">
        <h2 className="text-lg font-bold font-Exo text-[#f6f6f6] mb-4">Cart</h2>
        {items.length === 0 ? (
          <p className="text-[#f6f6f6]">Your cart is empty</p>
        ) : (
          <ul>
            {items.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between border-b py-2"
              >
                <div>
                  <span className="font-bold">{item.name}</span> - ${item.price}
                </div>
                <button
                  className="ml-4 px-2 py-1 bg-red-500 text-white rounded"
                  onClick={() => removeItem(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <Link to="/">
          <button className="mt-10 px-4 py-2 bg-[#3f1491] text-white rounded-md transition-all hover:bg-[#f6f6f6] hover:text-[#aa8be2]">
            Continue Shopping
          </button>
        </Link>
      </div>
      <div className="bg-[#aa8be2] p-2 absolute bottom-0 left-0 w-full">
        <div className="relative top-0 bottom-0">
          <p className="text-[#f6f6f6] font-Abeezee text-center font-bold">
            COMPONENT UNDER DEVELOPMENT! Some functions may not work
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
