import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import TableauBord from "../composants/TableauBord";

const Dashbord = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="w-60 h-40 flex items-center justify-center bg-[#8EDBFF] rounded-br-lg  ">
          <div className="w-40 h-20 bg-[#FFFFFF] rounded flex justify-center">
            <img className="w-36 h-20" src="\public\images\RVS 1.png" alt="" />
          </div>
        </div>
        <div className=" flex-col items-center">
          <h2 className="text-center text-[#34a3d6] text-2xl">
            Bienvenue! Docteur
          </h2>
          <p className="text- ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <FontAwesomeIcon icon={faBell} style={{ fontSize: "20px" }} />
          <img className="mr-10" src="/public/images/Ellipse 1.png" alt="" />
        </div>
      </div>
      <div>
        <div className="flex itemes-center    ">
          <div className="w-80">
            <TableauBord />
          </div>
          <div>
            <div className="">
              <h1 className="text-3xl ">RENDEZ-VOUS</h1>
              <div className="flex  gap-6  w-full ">
                <div>
                  <div className=" flex-col w-[390px] h-[150px] bg-[#1998D3]">
                    <div className="  mt-7 flex items-center justify-center">
                      <div className=" absolute mt-7 w-[55px] h-[45px] bg-[#FFFFFF]">
                        <h2 className="text-center p-2">98</h2>
                      </div>
                      <div className=" relative top-1 left-8 mt-4 items-center w-[34px] h-[34px] rounded-full bg-[#FFFFFF] ">
                        <img
                          className="w-9 h-9 mt-1 "
                          src="\public\images\RVS 1.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="text-center ">
                    <Link to="/RendezVous"> <h1 className="text-white text-2xl mt-5">
                        Listes des rendez-vous
                      </h1></Link> 
                    </div>
                  </div>
                  {/* deuxieme div */}
                  <div className="  w-[390px] h-[150px] bg-[#2F2F2F]">
                    <div className="  mt-7 flex items-center justify-center">
                      <div className=" absolute mt-7 w-[55px] h-[45px] bg-[#FFFFFF]">
                        <h2 className="text-center p-2">98</h2>
                      </div>
                      <div className=" relative top-1 left-8 mt-4 items-center w-[34px] h-[34px] rounded-full bg-[#FFFFFF] ">
                        <img
                          className="w-9 h-9 mt-1 "
                          src="\public\images\RVS 1.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="text-center mt-5">
                      <h1 className="text-white text-2xl">
                        Listes des rendez-vous
                      </h1>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div className=" flex-col w-[390px] h-[150px] bg-[#008E5B]">
                      <div className="  mt-7 flex items-center justify-center">
                        <div className=" absolute mt-7 w-[55px] h-[45px] bg-[#FFFFFF]">
                          <h2 className="text-center p-2">62</h2>
                        </div>
                        <div className=" relative top-1 left-8 mt-4 items-center w-[34px] h-[34px] rounded-full bg-[#FFFFFF] ">
                          <img
                            className="w-9 h-9 mt-1 "
                            src="\public\images\RVS 1.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="text-center mt-5">
                       <Link to="/Patient"><h1 className="text-white text-2xl">
                          Listes des Patients
                        </h1></Link> 
                      </div>
                    </div>
                    {/* deuxieme div */}
                    <div className=" flex-col w-[390px] h-[150px] bg-[#1998D3]">
                      <div className="  mt-7 flex items-center justify-center">
                        <div className=" absolute mt-7 w-[55px] h-[45px] bg-[#FFFFFF]">
                          <h2 className="text-center p-2">62</h2>
                        </div>
                        <div className=" relative top-1 left-8 mt-4 items-center w-[34px] h-[34px] rounded-full bg-[#FFFFFF] ">
                          <img
                            className="w-9 h-9 mt-1 "
                            src="\public\images\RVS 1.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="text-center mt-5">
                        <h1 className="text-white text-2xl">
                          Listes des Patients
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
                {/* troisieme et quatrieme div */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
