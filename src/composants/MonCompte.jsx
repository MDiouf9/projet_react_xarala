import React from "react";
// import { Link } from "react-router-dom";
// import RV2 from "../pages/RV2";
import TableauBord from "./TableauBord";
import CompteSec1 from "./CompteSec1";

const MonCompte = () => {
  return (
    <div>
      <div className="flex items-center gap-48">
        <div className="w-60 h-40 flex items-center justify-center bg-[#8EDBFF] rounded-br-lg  ">
          <div className="w-40 h-20 bg-[#FFFFFF] rounded flex justify-center">
            <img className="w-36 h-20" src="\public\images\RVS 1.png" alt="" />
          </div>
        </div>
        <div className="">
          <h1 className=" text-6xl  text-[#1998D3] ">RENDEZ-VOUS</h1>
        </div>
      </div>
      <div className="">
        <div className="flex">
          <div className=" flex-grow w-screen ">
            <TableauBord />
          </div>
          <div className="w-full">
            <CompteSec1 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonCompte;
