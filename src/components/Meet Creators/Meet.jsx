import React from "react";
import sindion from "../../assets/images/sindion.png";
import meetstyle from "./meet.module.css";
import { useTranslation } from "react-i18next";

export default function Meet({ isRTL ,i18n }) {
      const {t}=useTranslation()
      console.log(isRTL,i18n);
      
  return (
    
    <div className={`lg:flex lg:flex-row flex-col space-y-10 text-center px-2 lg:justify-between lg:items-center lg:py-10 font-taj  ${ i18n==='en'? meetstyle.bg:meetstyle.bgr}`}>
      <div className="lg:w-[45%] lg:ms-12 text-[42px] font-bold leading-10 text-white">
        <h2 className="mb-10 pt-4">{t("meetTitle")}</h2>
        <p className="text-[20px] font-normal leading-10 text-white">
        {t("meetDesc")}
        </p>
      </div>
      <div className="lg:w-[45%] w-3/4 m-auto pb-4 flex justify-center">
        <img src={sindion} alt="" />
      </div>
    </div>
  );
}