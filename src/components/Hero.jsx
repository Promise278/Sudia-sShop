import React from "react";

function Hero({ products }) {
  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-800 mb-1">
              {item.name}
            </h2>
            <p className="text-sm text-gray-600 mb-2">{item.description}</p>
            <p className="text-yellow-600 font-bold text-base mb-1">
              ${item.price}
            </p>
            <p className="text-xs text-gray-400">{item.brand}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
