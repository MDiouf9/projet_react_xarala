import React from "react";
import Header from "../composants/Header";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Connecter = () => {
  return (
    <div>
      <Header />
      <div className="  flex  justify-center  ">
        <div className="mt-20  flex-col w-1/4 ">
          <div className="flex justify-center ">
            <h4 className="mb-4 text-2xl">S'inscrire</h4>
          </div>
          <div>
            <input
              className="text-black w-full mb-4 p-1 bg-[#F5F5F5]"
              id="adress"
              placeholder=" Adresse : email"
              type="adress  "
            />
          </div>
          <div>
            <input
              className="text-black w-full mb-4 p-1 bg-[#F5F5F5]"
              id="adress"
              placeholder=" Mot de passe"
              type="adress  "
            />
          </div>
          <div>
            <Link to="/Sinscrire">
              <button className=" text-white mb-4  w-full p-1 bg-[#1998D3] ">
                S'inscrire
              </button>
            </Link>
          </div>
          <div className=" relative">
            <FontAwesomeIcon
              className=" absolute top-2 left-64 transform translate-x-1/2"
              icon={faGoogle}
              style={{ color: "white" }}
            />
            <button className=" text-white mb-4  w-full p-1 bg-[#2F2F2F]">
              Continuer avec google
            </button>
          </div>
          <div className="flex justify-center gap-5 mt-8">
            <h4>Mots de passe oublie</h4>
            <p className="text-[#1998D3]  ">S'inscrire</p>
          </div>
        </div>
      </div>
      <footer>
        <div className="flex justify-center gap-5 pt-40">
          <div className="  rounded-full  border border-[#1998D3] hover:border-[#1998D3] w-20 h-2"></div>
          <div className="  rounded-full  border border-[#1998D3] hover:border-[#1998D3] w-20 h-2"></div>
          <div className="bg-[#1998D3] rounded-full w-20 h-2"></div>
        </div>
      </footer>
    </div>
  );
};

export default Connecter;
