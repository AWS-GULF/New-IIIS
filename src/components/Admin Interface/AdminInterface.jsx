import React from "react";
// import about from "./About.module.css";
import tm from "../../assets/images/right.png";
import logo from "../../assets/images/transparent-logo.png";
import logortl from "../../assets/images/transparent-logo.png";
import { useTranslation } from "react-i18next";

export default function AdminInterface({ isRTL ,i18n}) {
  const { t } = useTranslation();
  // console.log(i18n.language);
  

  return (
    <>
      <div
        id="about"
        className={`lg:flex ${isRTL ? "lg:flex-row-reverse" : ""}  px-4 lg:px-0 lg:flex-row justify-center items-center gap-8 mt-20 overflow-hidden lg:pt-2 pb-20 lg:relative  flex-col `}
      >
        
        <img
          src={i18n.language==='en' ? logortl : logo}
          className={` hidden lg:block lg:absolute h-[450px] scale-140  z-[-9] ${
            i18n.language==='en' ? "left-[0%]" : "left-[80%]"
          }`}
          alt=""
        />

    
        <div className={`w-full lg:w-[45%]   text-${isRTL ? "right" : "left"} lg:mt-[-20px]   mb-36 lg:mb-0 ps-4 lg:ps-8 ${i18n.language==='ar' && "text-start"}`} id="ABOUT">
          <h2 className="text-4xl mb-10 font-taj font-bold text-[#24346D] lg:text-[42px]">
            {t("adminTitle")} 
          </h2>
          <p className="text-[#2e438f] font-taj front-[300] lg:text-[20px] text-[18px] lg:leading-10 text-justify-pretty lg:text-justify p-2  md:pb-20 lg:pb-0 md:text-[20px]">{t("adminDesc")} </p>
        </div>

    
        <div className="w-[40%] flex justify-start items-end mt-[-30px] m-auto lg:ms-16 ">
          <img
            src={tm}
            className={`lg:scale-[150%] scale-[260%]  lg:mb-10 pb-8 md:pb-20 lg:relative ms-[-15px] md:ms-[-40px] lg:ms-8 ${i18n.language==='en' && "lg:left-[20px] top-10" } ${i18n.language==='ar' && "lg:left-[-85px] top-10" }`}
            alt=""
          />
        </div>
      </div>
    </>
  );
}
