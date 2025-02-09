import React from "react";
import about from "./About.module.css";
import tm from "../../assets/images/tms.gif";
import logo from "../../assets/images/transparent-logo.png";
import logortl from "../../assets/images/transparent-logo.png";
import { useTranslation } from "react-i18next";

export default function About({ isRTL }) {
  const { t } = useTranslation();

  return (
    <>
      <div
        id="about"
        className={`lg:flex ${isRTL ? "lg:flex-row-reverse" : ""} px-4 lg:px-0 lg:flex-row justify-center items-center gap-8 mt-32 overflow-hidden lg:pt-36 pb-20 lg:relative  flex-col `}
      >
        
        <img
          src={isRTL ? logortl : logo}
          className={`bg-gray-200 absolute h-[450px] z-[-9] ${
            isRTL ? "right-[100px]" : "left-[-100px]"
          }`}
          alt=""
        />

    
        <div className={`w-full lg:w-[45%] ${about.bg} text-${isRTL ? "right" : "left"} mb-36 lg:mb-0 lg:ps-8`}>
          <h2 className="text-4xl mb-10 font-taj font-bold text-[#24346D] lg:text-[42px]">
            {t("aboutTitle")} 
          </h2>
          <p className="text-[#24346d]  lg:text-[20px]">{t("aboutCont")}</p>
        </div>

    
        <div className="w-[40%] flex justify-start items-end m-auto lg:ms-16">
          <img
            src={tm}
            className={`lg:scale-[220%] scale-[300%]  lg:relative ${isRTL ? "lg:ltr:left-[30%]" : "lg:ltr:right-[-30%]"}`}
            alt=""
          />
        </div>
      </div>
    </>
  );
}
