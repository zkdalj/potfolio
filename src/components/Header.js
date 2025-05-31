import { useState } from "react";
import "../App.css";
import logo from "../assets/images/logo.svg";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchTerm}`);
    // You could also use this to trigger a search function or redirect
  };

  const navLinks = ["Home", "Skills", "Projects", "Contact"];

  return (
    <>
      <nav id="home">
        <div className="max-w-7xl mx-auto flex items-center justify-between slide-top"> 
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-auto mr-3" />
            {/* <h1 className="text-xl font-bold">My Portfolio</h1> */}
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10">
            {navLinks.map((link, idx) => (
              
              <a
                key={idx}
                href={`#${link.toLowerCase()}`}
                className="hover:text-yellow-400 transition"
              >
                {link}
              </a>
              
            ))}            
          </div>
           <form
            onSubmit={handleSearch}
            className="md:flex items-center gap-2 form-search relative hidden "
          >
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search"
              className="search-input "
            />
            <div className="text-gray-700 absolute right-3">
              <i className="fa-solid fa-magnifying-glass "></i>
            </div>
          </form>
          
          

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none text-xl text-white"
          >
            <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2 px-2 pb-4">
              <form
            onSubmit={handleSearch}
            className="flex items-center gap-2 form-search relative "
          >
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search"
              className="search-input "
            />
            <div className="text-gray-700 absolute right-3">
              <i className="fa-solid fa-magnifying-glass "></i>
            </div>
          </form>
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={`#${link.toLowerCase()}`}
                className="block text-sm hover:text-yellow-400 transition"
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </nav>

    </>
  );
};

export default Header;
