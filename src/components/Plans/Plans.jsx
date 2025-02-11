import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Plans = ({ isRTL, i18n }) => {
  const { t } = useTranslation();
  const [activeCard, setActiveCard] = useState(1);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isInRange, setIsInRange] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobileOrTablet(width < 1025);
      setIsTablet(width >= 768 && width <= 1024);
      setIsInRange(width >= 1025 && width <= 1279);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const handleCardClick = (index) => {
    if (!isMobileOrTablet) {
      setActiveCard(index);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 lg:bg-white py-12 relative" id="plans">
      <h1 className="text-4xl font-bold text-center text-[#24346D] mb-6 font-taj lg:text-[42px] lg:pt-20">
        {t("plansTitle")}
      </h1>

      <p className="text-[20px] text-center text-[#24346D] mb-12 font-taj leading-10 p-4 lg:p-0">
        {t("plansDesc")}
      </p>

      <div className={`relative w-full max-w-6xl font-taj ${isMobileOrTablet ? "flex flex-col space-y-[25px]" : "md:flex md:items-center md:justify-center md:space-x-4 md:mb-36"} font-bold`}>
        
      
        <div
          className={`bg-white p-6 md:p-8 lg:p-10 lg:pb-48 md:pb-20 md:w-[50%] border-2 ${
            isMobileOrTablet ? "border-[#009DAA] w-[80%] m-auto flex flex-col text-center items-center justify-center scale-100 mb-[25px]" 
            : "w-3/4 md:w-1/3 border-[#009DAA] text-left"
          }
          transition-all duration-300 ${isInRange ? "h-[500px]" : "h-auto"} ${
            activeCard === 0 && !isMobileOrTablet ? "scale-110 z-20 border-b-2 border-[#009DAA]" : "border-2"
          }`}
          onClick={() => handleCardClick(0)}
        >
          <h2 className="text-2xl font-bold text-[#009DAA] mb-4">{t("basic")}</h2>
          <p className="text-5xl font-bold text-gray-800 mb-4 text-center" >$20</p>
          <p className="text-[14px] text-gray-400 mb-6 font-normal text-center">{t("permonth")}</p>
          <p className="text-[20px] text-black mb-6 text-center" >{t("basicupto")}</p>
          <button className={`bg-[#009DAA] text-white px-16 py-4 text-lg w-full ${isTablet ? "md:w-fit md:py-2 text-sm" : ""}`}>
            {t("basicBtn")}
          </button>
        </div>

      
        <div
          className={`bg-white p-6 md:p-8 lg:p-10 lg:pb-48 md:pb-20 md:w-[50%] border-2  ${
            isMobileOrTablet ? "border-[#FF4500] w-[80%] m-auto flex flex-col text-center items-center justify-center scale-100 mb-[25px]" 
            : "w-3/4 md:w-1/3 border-[#FF4500] text-left"
          }
          transition-all duration-300 ${isInRange ? "h-[500px]" : "h-auto"} ${
            activeCard === 1 && !isMobileOrTablet ? "scale-110 z-20 border-b-2 border-[#FF4500]" : "border-2"
          }`}
          onClick={() => handleCardClick(1)}
        >
          <h2 className="text-2xl font-bold mb-4 text-[#FF4500]">{t("plus")}</h2>
          <p className="text-5xl font-bold text-gray-800 mb-4 text-center">$30</p>
          <p className="text-[14px] text-gray-400 mb-6 font-normal text-center">{t("permonth")}</p>
          <p className="text-[20px] text-black mb-6 text-center">{t("plusupto")}</p>
          <button className={`bg-[#FF4500] text-white px-16 py-4 text-lg w-full ${isTablet ? "md:w-fit md:py-2 text-sm" : ""}`}>
            {t("plusBtn")}
          </button>
        </div>

    
        <div
          className={`bg-white p-6 md:p-8 lg:p-10 lg:pb-48 md:pb-20 md:w-[50%] border-2 ${
            isMobileOrTablet ? "border-[#24346D] w-[80%]  m-auto flex flex-col text-center items-center justify-center scale-100 mb-[25px]" 
            : "w-3/4 md:w-1/3 border-[#24346D] text-left"
          }
          transition-all duration-300 ${isInRange ? "h-[500px]" : "h-auto"} ${
            activeCard === 2 && !isMobileOrTablet ? "scale-110 z-20 border-b-2 border-[#24346D]" : "border-2"
          }`}
          onClick={() => handleCardClick(2)}
        >
          <h2 className="text-2xl font-bold text-[#24346D] mb-4 text-center">{t("unlimited")}</h2>
          <p className="text-5xl font-bold text-gray-800 mb-4 text-center">$50</p>
          <p className="text-[14px] text-gray-400 mb-6 font-normal text-center">{t("permonth")}</p>
          <p className="text-[20px] text-black mb-6 text-center">{t("unlimitedupto")}</p>
          <button className={`bg-[#24346D] text-white px-12 py-4 text-lg w-full ${isTablet ? "md:w-fit md:py-2 text-sm" : ""}`}>
            {t("unlimitedBtn")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plans;
