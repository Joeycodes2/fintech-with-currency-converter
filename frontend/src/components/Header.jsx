import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Icon } from "@iconify/react";
import logo from '../assets/jodaemLogo.png';




const Header = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  return (
    <header className="absolute top-0 left-0 right-0 z-10 py-6 px-4 sm:px-6 lg:px-8 bg-black fixed">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className=" flex text-white font-bold text-2xl">
          <Link to="/" className="flex-shrink-0">
          <img className="h-8 w-auto" src={logo} alt="Jodaem Logo" />   
        </Link>
        JodaemFinancial
         
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 items-center text-white">
          <Link to="/get-started" className="hover:text-gray-300">Personal</Link>
          <Link to="/get-started" className="hover:text-gray-300">Business</Link>
          <Link to="/features" className="hover:text-gray-300">Features</Link>
          <Link to="/help" className="hover:text-gray-300">Help</Link>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/get-started" className="text-white hover:text-gray-300">
          Get Started
          </Link>

          <Link to="/login-page" className="bg-green-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-600 transition duration-300">
            Login
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
                <Icon icon="solar:hamburger-menu-broken" width="24" height="24" className="bg-green-900 
                hover:bg-green-700"/>
            </button>
            {}
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-3 bg-zinc-800 bg-opacity-90 rounded-lg mx-9">
          <nav className="flex flex-col items-center space-y-4 py-6 text-white">
            <Link to="/get-started" className="hover:text-gray-300">Personal</Link>
            <Link to="/get-started" className="hover:text-gray-300">Business</Link>
            <Link to="/get-started" className="hover:text-gray-300">Company</Link>
            <Link to="/features" className="hover:text-gray-300">Help</Link>
            <hr className="w-3/4 border-gray-600"/>
            <Link to="/login-page" className="hover:text-gray-300">Sign In</Link>
            <Link to="/get-started" className="w-3/4 text-center bg-green-500 font-semibold py-2 px-6 rounded-lg hover:bg-green-600 transition duration-300">
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;