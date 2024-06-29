import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare ,faUser} from "@fortawesome/free-solid-svg-icons";
const VoirPatient = () => {
  return (
    <div> 
      <div className="flex justify-center items-center p-7">
        <FontAwesomeIcon
                icon={faUser}
                style={{ fontSize: "150px", color: "#1998D3" }}
              />
        </div>
      <div className="flex justify-center items-center ">
       
        <div className="  flex flex-col justify-center p-4 mt-4 w-96 border-solid border-2 border-sky-500 ">
          <div className="  relative mb-1">
            <FontAwesomeIcon
              className=" absolute bottom-1 top-3 left-80 transform translate-x-1"
              icon={faPenToSquare}
            />
            <h4>
              titre: <em className="p-3 text-[#1998D3]">Réunion de travail </em>
            </h4>
          </div>
          <div className="  relative mb-1">
            <FontAwesomeIcon
              className=" absolute bottom-1 top-3 left-80 transform translate-x-1"
              icon={faPenToSquare}
            />
            <h4>
              titre: <em className="p-3 text-[#1998D3]">equipe xarala </em>
            </h4>
          </div>
          <div className="  relative mb-1">
            <FontAwesomeIcon
              className=" absolute bottom-1 top-3 left-80 transform translate-x-1"
              icon={faPenToSquare}
            />
            <h4>
              Date: <em className="p-3 text-[#1998D3]">28/05/2023 </em>
            </h4>
          </div>
          <div className="  relative mb-1">
            <FontAwesomeIcon
              className=" absolute bottom-1 top-3 left-80 transform translate-x-1"
              icon={faPenToSquare}
            />
            <h4>
              Heure: <em className=" p-3 text-[#1998D3]">08:10 </em>
            </h4>
          </div>
          <div className="  relative mb-1">
            <FontAwesomeIcon
              className=" absolute bottom-1 top-3 left-80 transform translate-x-1"
              icon={faPenToSquare}
            />
            <h4>
              Lieu: <em className="p-3 text-[#1998D3]">campus liberte 6 </em>
            </h4>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button className="w-96  p-1 mt-3 bg-[#1998D3] ">enregistrer</button>
      </div>
      
    </div>
  );
};

export default VoirPatient;
