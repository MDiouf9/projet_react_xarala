import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faTableList,
  faPlus,
  faArrowRight,
  faUser,
  faCalendar,
  faCircleUser,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import photo from "../images/Ellipse 1.png"
const SecRv = () => {
  const renderAppointment = ({ name, time }) => (
    <div className="w-9/12 h-1 float-right mt-20">
      <div className="bg-[#2F2F2F] border-x-zinc-700 border w-11/12 h-1 float-right"></div>
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center gap-10 mb-8">
          <div>
            <FontAwesomeIcon
              className="text-center rounded-full border-2 border-black p-2"
              icon={faUser}
              style={{ fontSize: "25px" }}
            />
          </div>
          <div>
            <p>Aujourd'hui</p>
            <h3 className="text-[#1998D3]">{name}</h3>
          </div>
        </div>
        <div className="mb-8 mt-2">
          <p>{time}</p>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="">
      <Link to="/Dashbord"><h2 className="m-5 text-[#1998D3] text-2xl">
        <FontAwesomeIcon icon={faTableList} /> Tableau de bord
      </h2></Link>
      <div className="mt-8 flex justify-between ">
        <div className="w-64 h-11/12 flex-col text-center rounded-tr-lg bg-[#8EDBFF]">
          <div className="flex justify-center items-center">
            {/* <img
              className="  w-24 mt-10 mb-8"
              src="/public/images/Ellipse 1.png"
              alt=""
            /> */}
            <img
              className="  w-24 mt-10 mb-8"
              src={photo}
              alt=""
            />
          </div>
          <ul>
            {/* <li>
              <img
                className="  w-20 mt-10 mb-8"
                src="/public/images/Ellipse 1.png"
                alt=""
              />
            </li> */}
            <li className="mb-4">
              <FontAwesomeIcon
                icon={faHouse}
                style={{ fontSize: "13px", color: "#1998D3" }}
              />
              <a className="pl-1 ml-2 text-white" href="/Home">
                Accueil
              </a>
            </li>
            <li className="mb-8">
              <FontAwesomeIcon
                icon={faCalendar}
                style={{ fontSize: "13px", color: "#1998D3" }}
              />
              <a className="pl-1 ml-2 text-white" href="/RendezVous">
                Mes rendez-vous
              </a>
            </li>
            <li className="mb-8">
              <FontAwesomeIcon
                icon={faUser}
                style={{ fontSize: "13px", color: "#1998D3" }}
              />

              <Link to="/Patient">
                <a className="pl-1 ml-2 text-white" href="/Patient">
                  Mes patients
                </a>
              </Link>
            </li>
            <li className="mb-8">
              <FontAwesomeIcon
                icon={faCircleUser}
                style={{ fontSize: "13px", color: "#1998D3" }}
              />{" "}
              <Link to="/MonCompte">
                {" "}
                <a className="pl-1 ml-2 text-white" href="">
                  Mon compte
                </a>
              </Link>
            </li>
          </ul>
          <div>
            <ul>
              <li className="mt-40">
                <FontAwesomeIcon
                  icon={faRightToBracket}
                  style={{ fontSize: "13px", color: "#1998D3" }}
                />{" "}
                <a className="text-white pl-1 ml-2" href="#">
                  Déconnexion
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-11/12 mr-9 ">
          <div className="flex gap-2 justify-around">
            <h2 className="ml-28 text-2xl">Mes Rendez-vous</h2>
            <Link to="/PagesProfile">
              <span>
                <FontAwesomeIcon
                  className="text-white bg-[#1998D3] ml-96"
                  icon={faPlus}
                  style={{ fontSize: "15px" }}
                />
              </span>
            </Link>
          </div>
          <div>
            {/* Répéter le bloc 4 fois */}
            {renderAppointment({ name: "Moussa Ba", time: "9h 00" })}
            {renderAppointment({ name: "Equipe xarala", time: "8h 00" })}
            {renderAppointment({ name: "Réunion d'affaire", time: "11h 00" })}
            {renderAppointment({ name: "Pathé Fall", time: "10h 00" })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecRv;
