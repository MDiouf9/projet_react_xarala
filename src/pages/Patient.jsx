import React from "react";
import Header2 from "../composants/Header2";
import TableauBord from "../composants/TableauBord";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Patient = () => {
  const renderAppointment = ({ prenom, name }) => (
    <div className="w-full h-1 float-right mt-20  ">
      <div className="bg-[#2F2F2F] border-x-zinc-700 border float-right w-11/12 h-1  "></div>
      <div className="flex justify-between items-center mt-4 mr-7">
        <div className=" flex items-center gap-20 mb-8 ">
          <div>
            <FontAwesomeIcon
              className="text-center rounded-full border-2 border-black p-2"
              icon={faUser}
              style={{ fontSize: "25px" }}
            />
          </div>
        </div>
        <div className="flex justify-between w-full ml-4">
          <div>
            <h2>{prenom}</h2>
          </div>
          <div>
            <h3 className="text-[#1998D3]">{name}</h3>
          </div>

        <button className="bg-blue-500 text-white py-2 px-4 rounded">
            voir
          </button>  
        </div>
      </div>
    </div>
  );

  return (
    <div className="">
      <Header2 />
      <div className="flex gap-2 justify-around">
        <h2 className="ml-28 text-2xl">Mes Patients</h2>
        <Link to="/VoirPatient"><span>
          <FontAwesomeIcon
            className="text-white bg-[#1998D3] ml-96"
            icon={faPlus}
            style={{ fontSize: "15px" }}
          />
        </span></Link>
      </div>
      <div className=" flex  justify-between ">
        <TableauBord className="w-[900px]" />

        <div className=" w-1/2 mt-20 mr-2 float-right">
          {renderAppointment({ prenom: "Moustapha", name: "Fall" })}
          {renderAppointment({ prenom: "Alimatou", name: "Seck" })}
          {renderAppointment({ prenom: "Pathé   ", name: "Fall" })}
          {renderAppointment({ prenom: "Cheikh Bara", name: "Diop" })}
        </div>
      </div>
    </div>
  );
};

export default Patient;
