import { useState } from 'react';
import logo from "../../../assets/landing-page/logo.png"; // Adjust the path as necessary

function Header () {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <img src={logo} alt="Logo" className="h-8 sm:h-10 cursor-pointer" />


        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="#features" className='hover:text-green-600 transition-all duration-200'>Features</a>
          <a href="#pricing" className='hover:text-green-600 transition-all duration-200'>Pricing</a>
          <a href="#about" className='hover:text-green-600 transition-all duration-200'>About Us</a>
          <a href="#blog" className='hover:text-green-600 transition-all duration-200'>Blog</a>
        </nav>

        <a
          href="/signin"
          className="hidden md:inline-block bg-green-600 font-medium text-white px-4 py-2 rounded-4xl hover:bg-green-700 transition"
        >
          Sign In
        </a>


        <button
          className="md:hidden text-2xl text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>


      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-gray-700 font-medium">
          <a href="#features" className="block">Features</a>
          <a href="#pricing" className="block">Pricing</a>
          <a href="#about" className="block">About Us</a>
          <a href="#blog" className="block">Blog</a>
        </div>
      )}
    </header>
  );
};

export default Header;
