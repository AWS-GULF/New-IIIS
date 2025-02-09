import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import logoRtl from "../../assets/images/logo-rtl.png";

import { useTranslation } from "react-i18next";
export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isRTL, setIsRTL] = useState(i18n.language === "ar");

 
  const toggleLanguage = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("ar"); 
      document.dir = "rtl"; 
      setIsRTL(true);
    } else {
      i18n.changeLanguage("en"); 
      document.dir = "ltr"; 
      setIsRTL(false);
    }
  };

  return (
    <div className="navbar sm:px-20  font-taj">
      <div className="navbar-start">
      <div className="drawer drawer-end lg:hidden">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
   
    <label htmlFor="my-drawer-4" className=" text-white ">
    <svg
    className="swap-off fill-current"
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 512 512">
    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
  </svg>
    </label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay "></label>
    <ul className="menu bg- text-base-content min-h-full bg-menu w-80 p-4">
    <li className="px-4 py-4 me-2 hover:text-[#24346D] text-white cursor-pointer font-bold">
            <a>{t("Features")}</a>
          </li>
          <li className="px-4 py-4 me-2 hover:text-[#24346D] text-white cursor-pointer font-bold">
            <a>{t("creators")}</a>
          </li>
          <li className="px-4 py-4 me-2 hover:text-[#24346D] text-white cursor-pointer font-bold">
            <a>{t("pricing")}</a>
          </li>
          <li
            className="bg-white rounded me-2 transition-all duration-100 hover:bg-transparent
              hover:border-white hover:border-2 hover:text-white
              text-[#3db1c1] font-semibold px-8 lg:w-46 flex-nowrap flex justify-center items-center"
          >
            <a>{t("request")}</a>
          </li>
    </ul>
  </div>
</div>
        <a className="cursor-pointer text-xl">
          <img src={isRTL ? logoRtl : logo} alt="Logo" />
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu-horizontal">
          <li className="px-4 py-4 me-2 hover:text-[#24346D] text-white cursor-pointer font-bold">
            <a>{t("Features")}</a>
          </li>
          <li className="px-4 py-4 me-2 hover:text-[#24346D] text-white cursor-pointer font-bold">
            <a>{t("creators")}</a>
          </li>
          <li className="px-4 py-4 me-2 hover:text-[#24346D] text-white cursor-pointer font-bold">
            <a>{t("pricing")}</a>
          </li>
          <li
            className="bg-white rounded me-2 transition-all duration-100 hover:bg-transparent
              hover:border-white hover:border-2 hover:text-white
              text-[#3db1c1] font-semibold px-8 lg:w-46 flex-nowrap flex justify-center items-center"
          >
            <a>{t("request")}</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end lg:w-fit mt-3 lg:mt-0">
        <button onClick={toggleLanguage} className="btn btn-ghost text-[16px] bg-[#24346D]">
          {t("lng")}
        </button>
      </div>
    </div>
  );
}
