import React from "react";

import logo1 from "../assets/logo.png";

const Sidebar = () => {
  return (
    <div className="main justify-center">
      <div className="div1 ">
        <img className="content-center ml-12 mt-8 w-17 h-7 " src={logo1} alt="logo" />
        
        
        <div className="bg-red-700 w-1/2 ml-10 mt-7 flex-nowrap ">  invite physician</div>
      </div>
      <div className="div2">
        <p>help and informationand others</p>
        <p>Log out</p>
      </div>
      {/** 1.  TopBar*/}
      {/** Image Part */}
      {/** Links Part */}
      {/** 2. BelowBar */}
      {/** Links */}
    </div>
  );
};

export default Sidebar;
