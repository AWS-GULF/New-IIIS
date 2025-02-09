import React from "react";
import Navbar from "../navbar/Navbar";
import styles from "./Hero.module.css";
import { useTranslation } from "react-i18next";
import play from "../../assets/images/playYotube.jpg"
import ScrollMouse from "../mouse/ScrollMouse";

export default function Hero() {
    const {t}=useTranslation()
  return (
    <div className={`w-full h-svh   ${styles.hero}`}>
      <Navbar />

      <div className="flex-col text-center items-center justify-center font-taj mt-10 lg:mt-0 ">
        <p className="font-taj text-5xl lg:text-[52px] leading-[72px]  font-bold mb-10 lg:mb-8 text-[#F4F9FA]">IIIS</p>
        <h1 className=" text-2xl lg:text-3xl text-[#F4F9FA] font-bold mb-4">{t("h1")}</h1>
        <p className="text-2xl lg:text-2xl text-[#F4F9FA] leading-[40px]  ">{t("HeroCont")}</p>
        <button
            className="bg-[#203E73] rounded bg-gradient-to-r transition-all duration-100
               hover:text-white bg-linear-to-r from-[#0395A5] to-[#213B71] hover:bg-gradient-to-l hover:from-[#213B71]to-[#0395A5]
              text-white font-semibold px-10 py-4 lg:w-46 flex-nowrap mt-10 "
          >
            <a>{t("request")}</a>
          </button>
         
          <a href="https://www.youtube.com/@sindiontechnologyltd3700" target="_blank" className="flex items-center justify-center mt-8 font-bold text-white">
           <span className="me-2"><img className="w-[20px] h-[20px] rounded" src={play} alt="" /></span>
          {t("watch")}</a>
<div className="mb-4"> <ScrollMouse/></div>
          
      </div>
    </div>
  );
}
