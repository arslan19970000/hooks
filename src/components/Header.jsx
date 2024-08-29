import React from "react";

import logog from'../assets/image/logog.png'
import { Link } from "react-router-dom";



const Header = () => {
  

  
  return (
    <div className="flex justify-between bg-gradient-to-bl  h-16 text-center w-full fixed top-0  bg-blue-700 hover:bg-fuchsia-400 scale-100 ">
      <div className=" flex rounded-xl w-8 h-8 mt-4 ">  <Link to="/">    <img className=" shadow-lg rounded-xl ml-3 hover:scale-110 cursor-pointer"  src={logog} alt={logog}></img></Link>

      </div>
      <div className="space-x-8 mt-4">
     
      </div>
      <div className="mt-4 text-white font-bold font-sans">

      <Link className="mr-8 " to='/premium' >Premium</Link>
        <Link className="mr-8" to="/products">products</Link>
        <Link className="mr-8" to="/createproducts">Create Item</Link>
        <Link to="/login"><button  className="mr-8">Login</button></Link>
        <Link to="/logout"><button className="mr-28">Logout</button></Link>
      </div>
    </div>
  );
};

export default Header;
