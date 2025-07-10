import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FiChevronDown } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

function Nav() {
  const [search, setSearch] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = [
    { name: "Jewelry", path: "/category/jewelry" },
    { name: "Shoes", path: "/category/shoes" },
    { name: "Men Clothing", path: "/category/men-clothing" },
    { name: "Women Clothing", path: "/category/women-clothing" },
    { name: "Bags", path: "/category/bags" },
    { name: "Others", path: "/category/others" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 h-20">
      <div className="max-w-7xl mx-auto md:px-4 px-4 md:py-4 py-2 flex items-center justify-between gap-4">
        <Link
          to="/"
          className="md:text-xl text-sm font-bold text-gray-900 tracking-wide"
        >
          SA <span className="text-yellow-600">Jundu</span> bin Amin
        </Link>

        <div className="flex flex-col md:flex-row items-center flex-1 md:ml-20 mt-4 md:mt-0 gap-4 md:gap-28">
          <div className="relative w-72">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <CiSearch className="text-gray-500" size={20} />
            </div>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="md:w-80 w-56 h-10 pl-10 pr-4 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:bg-white"
              placeholder="Search products..."
            />
          </div>

          <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-700 items-center">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="relative group">
              <div className="flex items-center gap-1 cursor-pointer">
                <span>Categories</span>
                <FiChevronDown className="text-gray-500" />
              </div>
              <ul className="absolute left-0 top-full mt-1 bg-white border shadow-md rounded-md hidden group-hover:block z-50 w-44">
                {categories.map((cat, index) => (
                  <li key={index}>
                    <Link
                      to={cat.path}
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex items-center gap-5 mt-4 md:mt-0">
          <Link to="/cart" className="relative text-xl" title="Cart">
            🛒
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
              0
            </span>
          </Link>
          <Link to="/account" title="Account" className="text-xl">
            👤
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <IoClose className="text-3xl text-gray-800" />
            ) : (
              <HiMenu className="text-3xl text-gray-800" />
            )}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white px-4 pb-4 shadow">
            <ul className="flex flex-col gap-3 text-gray-700 text-sm">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <span className="font-semibold">Categories</span>
                <ul className="pl-4 mt-1">
                  {categories.map((cat, index) => (
                    <li key={index}>
                      <Link to={cat.path} className="block py-1 text-sm">
                        {cat.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/cart">🛒 Cart</Link>
              </li>
              <li>
                <Link to="/account">👤 Account</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
