import React from "react";
import Navbar from "../navbar/Navbar";
import styles from "./Hero.module.css";
import { useTranslation } from "react-i18next";
import ScrollMouse from "../mouse/ScrollMouse";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Hero({i18n}) {
    const {t}=useTranslation()
  return (
    <div className={`w-full lg:h-dvh   ${styles.hero}`}>
      <Navbar i18n={i18n}/>

      <div className="flex-col text-center items-center justify-center font-taj  lg:mt-0  ">
        <p className="font-taj text-5xl lg:text-[52px] leading-[72px]  font-bold mb-8 lg:mb-5 md:mt-8 lg:mt-6 text-[#F4F9FA]">IIIS</p>
        <h1 className=" text-2xl lg:text-[26px] text-[#F4F9FA] font-bold mb-3  ">{t("h1")}</h1>
        <p className="text-2xl lg:text-[20px] text-[#F4F9FA] leading-[40px]  mb-10 lg:mb-[30px] md:mt-5 lg:mt-3 pe-3 ">{t("HeroCont")}</p>
        <button
            className="bg-[#203E73]  bg-gradient-to-r transition-all duration-100
               hover:text-white bg-linear-to-r from-[#0395A5] to-[#213B71] hover:bg-gradient-to-l hover:from-[#213B71]to-[#0395A5]
              text-white font-semibold px-[30px] py-3 lg:w-46 flex-nowrap  md:mt-8 lg:mt-2 rounded mb-2"
          >
            <a  href="#form" >{t("request")}</a>
          </button>
         
          <a href="https://www.youtube.com/@sindiontechnologyltd3700" target="_blank" className="flex mb-2 items-center justify-center mt-[20px] font-bold text-white">
           <span className="me-2 w-3 h-3 p-[10px]  flex justify-center items-center"><i className="fa-regular fa-circle-play"></i></span>
          {t("watch")}</a>
<div className="mb-4"> <ScrollMouse/></div>
          
      </div>
    </div>
  );
}
