import React from 'react';

const Footer = () => {
  return (
    <footer className="text-gray-100  w-full h-28 bg-black border-t-4 ">
      <div className="container mx-auto text-center w-full">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        <div className="mt-4">
          <ul className="flex justify-center space-x-4">
            <li><a href="#" className="hover:text-gray-400 ">Home</a></li>
            <li><a href="#" className="hover:text-gray-400">About</a></li>
            <li><a href="#" className="hover:text-gray-400">Services</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
