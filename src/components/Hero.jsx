import React from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";


function Hero({ products }) {
  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((item, index) => (
          <Link to={`/productpage/${item.id}`} key={item.id}>
            <div
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <div className="absolute top-2 right-2 bg-gray-200 rounded-full p-1 cursor-pointer">
                  <AiFillStar className="text-yellow-500 w-6 h-6" />
                </div>
              </div>

              <h2 className="text-lg font-semibold text-gray-800 mb-1">
                {item.name}
              </h2>
              <p className="text-sm text-gray-600 mb-2">{item.description}</p>
              <div className="flex justify-between">
                <div>
                  <p className="text-yellow-600 font-bold text-base mb-1">
                    ${item.price}
                  </p>
                  <p className="text-xs text-gray-400">{item.brand}</p>
                </div>
                <button className="group relative overflow-hidden bg-yellow-600 rounded-md text-white w-24 h-10">
                  <span className="absolute inset-0 bg-blue-700 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                  <span className="relative z-10">add-to-cart</span>
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Hero;
