import React from "react";
import sindion from "../../assets/images/white-02-02.svg";
import meetstyle from "./meet.module.css";
import { useTranslation } from "react-i18next";

export default function Meet({ isRTL, i18n }) {
  const { t } = useTranslation();
  // console.log(isRTL,i18n);

  return (
    <div
      className={`lg:flex lg:flex-row flex-col space-y-10 text-center px-2 lg:justify-between lg:items-center lg:py-10 font-taj py-6 mt-24
      ${i18n === "en" ? meetstyle.bg : meetstyle.bgr}`}
      id="creators"
    >
      <div className="lg:w-[45%] lg:ms-12 text-[42px] font-bold leading-10 text-white " >
        <h2 className="mb-10 pt-4">{t("meetTitle")}</h2>
        <p className="lg:text-[20px] text-[24px] font-normal leading-10 text-white text-justify lg:p-2 p-4">
          {t("meetDesc")}
        </p>
      </div>
      <div className="lg:w-[36%] w-3/4 m-auto pb-4 flex justify-center">
        <img src={sindion} alt="" />
      </div>
    </div>
  );
}
