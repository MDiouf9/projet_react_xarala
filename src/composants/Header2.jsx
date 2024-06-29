import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell } from "@fortawesome/free-solid-svg-icons";
import photo from "../images/RVS 1.png";
const Header2 = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="w-60 h-40 flex items-center justify-center bg-[#8EDBFF] rounded-br-lg  ">
        <div className="w-40 h-20 bg-[#FFFFFF] rounded flex justify-center">
          <img className="w-36 h-20" src={photo} alt="" />
        </div>
      </div>
      <div className="relative w-1/2">
        <FontAwesomeIcon
          className="absolute top-1/2 left-4 transform -translate-y-1/2 "
          icon={faSearch}
          style={{ color: "white" }}
        />
        <input
          placeholder="recherche"
          type="text"
          className="w-full h-16 pl-12 rounded-full bg-[#2F2F2F] text-white"
        />
      </div>
      <div className="flex items-center gap-3">
        <FontAwesomeIcon icon={faBell} style={{ fontSize: "20px" }} />
        <img className="mr-10" src="/public/images/Ellipse 1.png" alt="" />
      </div>
    </div>
  );
};

export default Header2;
