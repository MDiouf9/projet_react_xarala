import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import photo from "../images/Ellipse 1.png"
const CompteSec1 = () => {
  return (
    <>
      <div>
        <div className="flex items-center w-full p-2 ">
          <div className="relative  w-40 h-40 rounded-full overflow-hidden border-8 border-[#1998D3] flex-shrink-0">
            <img
              className="w-full h-full object-cover overflow-hidden"
              src={photo}
              alt="Profile"
            />
          </div>
          <div className="  flex items-center w-full h-20 bg-[#1998D3] pl-4  -ml-4 ">
            <h2 className="text-white">Mon compte</h2>
          </div>
        </div>
      </div>

      <div className=" mt-2 flex-col">
        <div className=" p-2 flex items-center justify-between border border-black w-1/2 h-20">
          <div>
            <h2>Docteur</h2>
            <p>Dentiste</p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faUser}
              style={{ fontSize: "13px", color: "#1998D3" }}
            />
          </div>
        </div>

        <div className="  flex flex-col mt-4 w-1/2">
          <div className=" relative mb-1">
            <FontAwesomeIcon
              className=" absolute bottom-1 top-3 left-80 transform translate-x-1"
              icon={faPenToSquare}
            />
            <input
              className=" w-full mb-1 p-1 border border-black"
              id="adress"
              placeholder="adresse : keur Massar"
              type="adress  "
            />
          </div>
          <div className="relative mb-1">
            <FontAwesomeIcon
              className=" absolute bottom-1 top-3 left-80 transform translate-x-1"
              icon={faPenToSquare}
            />
            <input
              className=" w-full mb-1 p-1  border border-black "
              id="text"
              placeholder="telephone:77 398 79 86"
              type="text"
            />
          </div>
          <div className="relative mb-1">
            <FontAwesomeIcon
              className=" absolute bottom-1 top-3 left-80 transform translate-x-1"
              icon={faPenToSquare}
            />
            <input
              className="w-full mb-1 p-1 border border-black"
              placeholder="adress email :dioufm641@gmail.com"
              type="email"
            />
          </div>
          <div className="relative mb-1">
            <FontAwesomeIcon
              className=" w-full absolute bottom-1 top-3 left-40 transform translate-x-1"
              icon={faPenToSquare}
            />
            <input
              className=" w-full mb-1 p-1 border border-black"
              placeholder="mot de pass :........"
              type="password"
            />
          </div>
          <button className=" p-1 bg-[#1998D3] ">enregistrer</button>
        </div>
      </div>
    </>
  );
};

export default CompteSec1;
