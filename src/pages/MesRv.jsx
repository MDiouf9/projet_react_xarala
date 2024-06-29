import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const MesRv = () => {
  return (
    <div>
      <div className="flex flex-col mt-7 w-1/2">
        <div className="relative mb-4">
          <FontAwesomeIcon
            className="absolute bottom-1 top-3 left-80 transform translate-x-1"
            icon={faPenToSquare}
          />
          <input
            className="w-full mb-6 p-2 border border-black"
            id="adress"
            placeholder="adresse : keur Massar"
            type="text"
          />
        </div>
        <div className="relative mb-4">
          <FontAwesomeIcon
            className="absolute bottom-1 top-3 left-80 transform translate-x-1"
            icon={faPenToSquare}
          />
          <input
            className="w-full mb-6 p-2 border border-black"
            id="telephone"
            placeholder="telephone: 77 398 79 86"
            type="tel"
          />
        </div>
        <div className="relative mb-4">
          <FontAwesomeIcon
            className="absolute bottom-1 top-3 left-80 transform translate-x-1"
            icon={faPenToSquare}
          />
          <input
            className="w-full mb-6 p-2 border border-black"
            placeholder="adress email :dioufm641@gmail.com"
            type="email"
          />
        </div>
        <div className="relative mb-3">
          <FontAwesomeIcon
            className="absolute bottom-1 top-3 left-80 transform translate-x-1"
            icon={faPenToSquare}
          />
          <input
            className="w-full mb-4 p-2 border border-black"
            placeholder="mot de passe :........"
            type="password"
          />
        </div>
        <button className="p-3 bg-[#1998D3]">enregistrer</button>
      </div>
    </div>
  );
};

export default MesRv;
