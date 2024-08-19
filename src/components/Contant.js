import React from "react";

const Contant = () => {
  return (
    <>
    <div className="contant">
    <div className="border-b-2 w-1/3">
        <h3>physician1</h3>
        <p>physician1 email</p>
        <h5>Enter physician1 Email</h5>
    </div>
    <div className="border-b-2 w-1/2 ">
        <p>Description</p>
        <h5>write your message </h5>

    </div>

        </div>
        <div className="bg-red-600 w-16 ml-4 text-center mt-3"><button>Invite</button></div>
        <div className="phy  mt-11">
            <div className="border-b-2 w-1/3">
                <h3>physician1</h3>
                <p>physician2 email</p>
                <h5>Enter physician2 email</h5>
                
            </div>
            
            <div className="border-b-2 w-1/2">
                <p>Description</p>
                <h3 className="">enter your message</h3>
            </div>
        </div>
        
        </>
  );
};

export default Contant;
