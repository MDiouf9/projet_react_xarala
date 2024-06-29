import React from "react";

const PagesProfile = () => {
  return (
    <div>
      <div className="  flex  justify-center  ">
        <div className="mt-20  flex-col w-1/4 ">
          <div className="flex justify-center ">
            <div className=" w-40 h-40 mb-9  rounded-full bg-[#d7eff3] ">
              <img
                className=" w-40 h-40"
                src="\src\images\RVS 1.png"
                alt=""
              />
            </div>
          </div>

          <div>
            <input
              className=" bg-[#F5F5F5] w-full mb-4 p-1"
              id="adress"
              placeholder="Titre de rendez-vous"
              type="adress  "
            />
          </div>
          <div>
            <input
              className="text-black w-full mb-4 p-1 bg-[#F5F5F5]"
              id="adress"
              placeholder="Entree : Avec qui ?"
              type="adress  "
            />
          </div>
          <div>
            <input
              className="text-black w-full mb-4 p-1 bg-[#F5F5F5]"
              id="adress"
              placeholder="Date rendez-vous"
              type="adress  "
            />
          </div>
          <div>
            <input
              className="text-black w-full mb-4 p-1 bg-[#F5F5F5]"
              id="adress"
              placeholder="lieu Rendez-vous"
              type="adress  "
            />
          </div>
          <div>
            <input
              className="text-black w-full mb-4 p-1 bg-[#F5F5F5]"
              id="adress"
              placeholder="Heure rendez-vous"
              type="adress  "
            />
          </div>
          <div>
            <button className=" text-white mb-4  w-full p-1 bg-[#1998D3] ">
              Valider
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagesProfile;
