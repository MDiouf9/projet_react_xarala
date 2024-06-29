import React from "react";
import { Link } from "react-router-dom";
const SectionHome = () => {
  return (
    <>
      <div className=" flex justify-center ">
        <div className="flex-col    ml-20 ">
          <h1 className=" pb-6 pt-20 text-6xl ">RENDEZ-VOUS</h1>

          <div className=" w-1/2 h-48 ">
            <p className="  w-full h-full ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </div>
          <div className="mb-14 pb-10">
            <Link to="/Dashbord">
              <button className="  mr-8 w-1/2 h-12 text-white bg-[#1998D3] rounded border border-gray-950">
                commencer
              </button>
            </Link>
          </div>
        </div>
        <img
          className=" mr-40  w-1/2 text-center "
          src="\src\images\Confirmed attendance-amico 1.png"
          alt=""
        />
      </div>
      <footer>
        <div className="flex justify-center gap-5 pt-8">
          <div className="bg-[#1998D3] rounded-full w-20 h-2"></div>
          <div className="  rounded-full  border border-[#1998D3] hover:border-[#1998D3] w-20 h-2"></div>
          <div className="  rounded-full  border border-[#1998D3] hover:border-[#1998D3] w-20 h-2"></div>
        </div>
      </footer>
    </>
  );
};

export default SectionHome;
