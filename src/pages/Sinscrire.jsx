import React from "react";
import Header from "../composants/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Sinscrire = () => {
  return (
    <div>
      <Header />
      <div className="  flex  justify-center  ">
        <div className="mt-20  flex-col w-1/4 ">
          <div className="flex justify-center ">
            <h4 className="mb-4">S'inscrire</h4>
          </div>

          <div>
            <input
              className=" bg-[#F5F5F5] w-full mb-4 p-1"
              id="adress"
              placeholder="Entree : Votre Nom"
              type="adress  "
            />
          </div>
          <div>
            <input
              className="text-black w-full mb-4 p-1 bg-[#F5F5F5]"
              id="adress"
              placeholder="Entree : Votre prenom"
              type="adress  "
            />
          </div>
          <div>
            <input
              className="text-black w-full mb-4 p-1 bg-[#F5F5F5]"
              id="adress"
              placeholder="Entree : Votre Adresse"
              type="adress  "
            />
          </div>
          <div>
            <input
              className="text-black w-full mb-4 p-1 bg-[#F5F5F5]"
              id="adress"
              placeholder="Entree : Votre Mot de passe"
              type="adress  "
            />
          </div>
          <div>
            <button className=" text-white mb-4  w-full p-1 bg-[#1998D3] ">
              S'inscrire
            </button>
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
        </div>
      </div>
      <footer>
        <div className="flex justify-center gap-5 pt-28">
          <div className="  rounded-full  border border-[#1998D3] hover:border-[#1998D3] w-20 h-2"></div>
          <div className="bg-[#1998D3] rounded-full w-20 h-2"></div>
          <div className="  rounded-full  border border-[#1998D3] hover:border-[#1998D3] w-20 h-2"></div>
        </div>
      </footer>
    </div>
  );
};

export default Sinscrire;
