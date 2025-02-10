import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Plans = ({ isRTL, i18n }) => {
  const { t } = useTranslation();
  const [activeCard, setActiveCard] = useState(null); 

  const handleCardClick = (index) => {
    setActiveCard(index); 
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 py-12 relative" id="plans">
      <h1 className="text-4xl font-bold text-center text-[#24346D] mb-8 font-taj lg:text-[42px]">
        {t("plansTitle")}
      </h1>

      <p className="text-[20px] text-center text-[#24346D] mb-20 font-taj leading-10">
        {t("plansDesc")}
      </p>

      <div
        className={`lg:relative lg:flex lg:flex-row flex-col items-center justify-center w-full max-w-6xl font-taj space-y-3 mb-36 font-bold m`}
      >
       
        <div
          className={`lg:absolute lg:left-[50px] lg:transform lg:-translate-y-[-15px] bg-white lg:pb-48 p-10 py-14 border-2 border-[#009DAA] text-center m-auto w-3/4 pb-14 lg:w-1/3 z-0 transition-all ${
            activeCard === 0 ? "lg:scale-110 z-20" : "lg:scale-100 z-0"
          }`}
          onClick={() => handleCardClick(0)} 
        >
          <h2
            className={`text-2xl font-bold text-[#009DAA] mb-4 ${
              i18n === "en" ? "lg:text-start" : "lg:text-end"
            } text-center`}
          >
            {t("basic")}
          </h2>
          <p className="text-5xl font-bold text-gray-800 mb-4">$20</p>
          <p className="text-[14px] text-gray-400 mb-6 font-normal">
         {t("permonth")}
          </p>
          <p className="text-[20px] text-black mb-6">{t("basicupto")}</p>
          <button className="bg-[#009DAA] text-white px-16 py-4 text-lg">
            {t("basicBtn")}
          </button>
        </div>

       
        <div
          className={`relative bg-white lg:p-12 p-10 py-14 shadow-lg lg:shadow-2xl text-center w-3/4 m-auto lg:w-1/3 lg:pb-48 border-2 border-[#FF4500] transition-all ${
            activeCard === 1 ? "lg:scale-110 z-20" : "lg:scale-100 z-10"
          }`}
          onClick={() => handleCardClick(1)} 
        >
          <h2 className="text-2xl font-bold mb-4 lg:text-start text-[#FF4500]">
            {t("plus")}
          </h2>
          <p className="text-5xl font-bold text-gray-800 mb-4">$30</p>
          <p className="text-[14px] text-gray-400 mb-6 font-normal">
          {t("permonth")}
          </p>
          <p className="text-[20px] text-black mb-6">{t("plusupto")}</p>
          <button className="bg-[#FF4500] text-white px-16 py-4 text-lg">
            {t("plusBtn")}
          </button>
        </div>

        
        <div
          className={`xl:absolute xl:right-[50px] xl:transform xl:-translate-y-[-15px] xl:pb-48 bg-white p-10 py-14 border-2 border-[#24346D] text-center w-3/4 m-auto lg:w-1/3 z-0 transition-all ${
            activeCard === 2 ? "lg:scale-110 z-20" : "lg:scale-100 z-0"
          }`}
          onClick={() => handleCardClick(2)}
        >
          <h2
            className={`${
              i18n === "en" ? "lg:text-start" : "lg:text-start"
            } text-center text-2xl font-bold text-[#24346D] mb-4 ps-6`}
          >
            {t("unlimited")}
          </h2>
          <p className="text-5xl font-bold text-gray-800 mb-4">$50</p>
          <p className="text-[14px] text-gray-400 mb-6 font-normal">
          {t("permonth")}
          </p>
          <p className="text-[20px] text-black mb-6">{t("unlimitedupto")}</p>
          <button className="bg-[#24346D] text-white px-12 py-4 text-lg">
            {t("unlimitedBtn")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plans;
