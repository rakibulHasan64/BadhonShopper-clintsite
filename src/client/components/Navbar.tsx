// components/Navbar.jsx
import { useState } from "react";
import { LucideSearch } from "lucide-react";

import { AiOutlineShopping } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router";


export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className="w-full  z-50 bg-[#ff0066] text-white shadow-md">
      <div className="container mx-auto px-4 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to={"/"}>  <img
            src="https://nextwebui.com/nextwebui.svg"
            alt="Logo"
            className="h-12"
          /></Link>
        
        </div>

        {/* Search */}
        <div className="hidden md:flex items-center bg-white text-gray-700 rounded-md px-4 py-2 w-full max-w-sm">
          <LucideSearch className="mr-2" />
          <input
            type="text"
            placeholder="Search product"
            className="w-full bg-transparent outline-none placeholder-gray-500"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-5">
          <Link to={"/shop"}>Shop</Link>
          <Link to={"/offer"}>Offers</Link>
          <Link to={"/beCameSellerPage"}>Become a seller</Link>
          <Link to={"/myaccount"}>My Account</Link>
          <Link to={"/userDasbord"}>UserDasbord</Link>
        </div>

        {/* Right Icons */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex gap-6">
            <Link to={"/add-to-cart"} className="relative ">
              <AiOutlineShopping className="text-2xl" />
              <span className="absolute -top-2 -right-2 bg-[#44CEB0] text-xs px-1 rounded-full">0</span>
            </Link>
        
            <Link to={"/favoriteItems"} className="relative">
                <MdFavoriteBorder className="text-2xl" />
                <span className="absolute -top-2 -right-2 bg-[#44CEB0] text-xs px-1 rounded-full">1</span>
              </Link>
            
          </div>
          <span>ঢাকা</span>
        
          <Link to={"/login"}>Log in</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setSidebarOpen(true)} className="lg:hidden">
          <svg width="28" height="28" fill="none" stroke="currentColor">
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[250px] bg-white text-black shadow-lg 
  transform transition-transform duration-300 ease-in-out
  ${sidebarOpen ? "translate-x-0" : "translate-x-full"} z-50`}
      >

        <div className="flex justify-between items-center px-4 py-3 border-b">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={() => setSidebarOpen(false)}>
            <IoMdClose size={24} />
          </button>
        </div>

        <nav className="flex flex-col gap-4 p-4">
          <Link to={"/shop"} className="hover:text-[#ff0066]">Shop</Link>
          <Link to={"/offer"} className="hover:text-[#ff0066]">Offers</Link>
          <Link to={"/beCameSellerPage"} className="hover:text-[#ff0066]">Become a seller</Link>
          <Link to={"/add-to-cart"} className="hover:text-[#ff0066]">My Cart</Link>
          <Link to={"/favoriteItems"} className="hover:text-[#ff0066]">Wishlist</Link>
          <Link to={"/userDasbord"}>UserDasbord</Link>
          <Link to={"/login"} className="hover:text-[#ff0066]">Login</Link>
          
        </nav>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/70 bg-opacity-40 z-40"
        ></div>
      )}
    </header>
  );
}
