import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-red-800 text-gray-300 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p className="text-lg font-bold">Connect with us: +994 55 123 45 67</p>
          <p className="mt-2 flex items-center">
            <span className="mr-2">
              <i className="fab fa-facebook-f"></i>
            </span>
            <span className="mr-2">
              <i className="fab fa-twitter"></i>
            </span>
            <span className="mr-2">
              <i className="fab fa-instagram"></i>
            </span>
            <span className="mr-2">
              <i className="fab fa-linkedin-in"></i>
            </span>
          </p>
        </div>
        <div>
          <p className="text-sm">&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
