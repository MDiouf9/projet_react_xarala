import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faTableList,
  faUser,
  faCalendar,
  faCircleUser,
  faRightToBracket,
 
} from "@fortawesome/free-solid-svg-icons";
import photo from "../images/Ellipse 1.png"

const TableauBord = () => {
  return (
    <div className="w-60 ">
      <div>
        <h2 className="p-5 w-60 h-24  text-[#1998D3] text-[23px]">
          <FontAwesomeIcon icon={faTableList} /> Tableau de bord
        </h2>
      </div>

      <div className="rounded-tr-lg bg-[#8EDBFF]">
        <div className="">
          <div className="flex justify-center   ">
            <img
              className="w-24 my-8"
              src={photo}
              alt="Profile"
            />
          </div>
          <ul className="flex flex-col items-center">
            <li className="mb-4">
              <FontAwesomeIcon
                icon={faHouse}
                style={{ fontSize: "13px", color: "#1998D3" }}
              />
              <Link className="pl-1 ml-2 text-white" to="/Home">
                Accueil
              </Link>
            </li>
            <li className="mb-4">
              <FontAwesomeIcon
                icon={faCalendar}
                style={{ fontSize: "13px", color: "#1998D3" }}
              />
              <Link className="pl-1 ml-2 text-white" to="/RendezVous">
                Mes rendez-vous
              </Link>
            </li>
            <li className="mb-4">
              <FontAwesomeIcon
                icon={faUser}
                style={{ fontSize: "13px", color: "#1998D3" }}
              />
              <Link className="pl-1 ml-2 text-white" to="/Patient">
                Mes patients
              </Link>
            </li>
            <li className="mb-4">
              <FontAwesomeIcon
                icon={faCircleUser}
                style={{ fontSize: "13px", color: "#1998D3" }}
              />
              <Link className="pl-1 ml-2 text-white" to="/MonCompte">
                Mon compte
              </Link>
            </li>
            <li className="mt-12 mb-5 items-center">
              <FontAwesomeIcon
                icon={faRightToBracket}
                style={{ fontSize: "13px", color: "#1998D3" }}
              />
              <Link to="/Home" className="text-white pl-1 ml-2">
                Déconnexion
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TableauBord;
