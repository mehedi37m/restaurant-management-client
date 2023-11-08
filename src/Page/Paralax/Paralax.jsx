import React from "react";

const Paralax = () => {
  return (
    <div>
      <div className=" grid justify-items-center items-center  h-96 bg-fixed bg-parallax bg-cover">
       <div >
        <p className="text-white font-bold text-center">RESERVE A TABLE</p>
       <h1 className="text-5xl font-bold text-white">OPEN HOURS</h1>
       <hr />
       </div>
       
        <div className="grid justify-items-center gap-5">
          <p className="text-2xl font-bold text-white">Monday - Friday: 10 AM - 11 PM </p>
          <p className="text-2xl font-bold text-white">Saturday - Sunday: 9 AM - 1 PM</p>
        </div>
      </div>
    </div>
  );
};

export default Paralax;
