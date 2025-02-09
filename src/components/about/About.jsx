import React from "react";
import about from "./About.module.css";
import tm from "../../assets/images/Frame 586.png";
import logo from "../../assets/images/transparent-logo.png";
import logortl from "../../assets/images/transparent-logo.png";
import { useTranslation } from "react-i18next";

export default function About({ isRTL ,i18n}) {
  const { t } = useTranslation();
  console.log(i18n.language);
  

  return (
    <>
      <div
        id="about"
        className={`lg:flex ${isRTL ? "lg:flex-row-reverse" : ""}  px-4 lg:px-0 lg:flex-row justify-center items-center gap-8 mt-32 overflow-hidden lg:pt-36 pb-20 lg:relative  flex-col `}
      >
        
        <img
          src={isRTL ? logortl : logo}
          className={` hidden lg:block lg:absolute h-[450px]  z-[-9] ${
            isRTL ? "right-[90%]" : "left-[0]"
          }`}
          alt=""
        />

    
        <div className={`w-full lg:w-[45%]  ${about.bg} text-${isRTL ? "right" : "left"} mb-36 lg:mb-0 lg:ps-8`}>
          <h2 className="text-4xl mb-10 font-taj font-bold text-[#24346D] lg:text-[42px]">
            {t("aboutTitle")} 
          </h2>
          <p className="text-[#2e438f] font-taj front-[300] lg:text-[20px] leading-10">{t("aboutCont")}</p>
        </div>

    
        <div className="w-[40%] flex justify-start items-end m-auto lg:ms-16">
          <img
            src={tm}
            className={`lg:scale-[130%] scale-[210%]  mb-10 lg:relative ${i18n.language==='en' && "lg:left-[120px]" } ${i18n.language==='ar' && "lg:left-[-50px]" }`}
            alt=""
          />
        </div>
      </div>
    </>
  );
}
