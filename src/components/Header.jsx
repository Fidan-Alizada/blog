import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white border-b shadow-sm py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-black">Ferrari Blog</Link>
        <nav className="space-x-4">
     
        <Link to="/create-post" className="ml-4 text-red-500  hover:text-black">Create Post</Link>
          <Link to="/about" className="text-red-700 hover:text-black">About</Link>
          
        </nav>
      </div>
    </header>
  );
};

export default Header;
