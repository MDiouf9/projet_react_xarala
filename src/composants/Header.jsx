import React from "react";
import { Link } from "react-router-dom";
import photo from "../images/RVS 1.png";

const Header = () => {
  return (
    <div className=" h-20 flex items-center justify-between  bg-[#FCFCFC]">
      <Link to="/Home">
        <img src={photo} alt="" />
      </Link>
      <ul className="flex gap-4">
        <li>
          <Link to="/Home">
            <a href="/Home">ACCUEIL</a>
          </Link>
        </li>
        <li className="flex">
          <a href="/RendezVous">MES RENDEZ-VOUS</a>
        </li>
        <li>
          <a href="/MonCompte">MON COMPTE</a>
        </li>
      </ul>
      <div className="mr-8">
        <Link to="/Connecter">
          <button className=" mr-8 w-36 h-12 text-white bg-[#1998D3] rounded border border-gray-950 ">
            se connecter
          </button>
        </Link>
        <Link to="/Home">
          <button className="w-36 h-12 text-white  bg-[#2F2F2F] rounded border border-gray-950 ">
            Déconnection
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
