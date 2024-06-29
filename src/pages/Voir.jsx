import React from "react";

const Voir = () => {
  return (
    <div>
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
  );
};

export default Voir;
