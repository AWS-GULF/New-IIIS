import React, { useState } from "react";
import tm from "../../assets/images/right.png";
import { useTranslation } from "react-i18next";

export default function AdminInterface({ isRTL, i18n }) {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  const timelineData = [
    { title1: "Admin Interface", img: tm, content: t("adminDesc") },
    { title2: "Manager", img: tm, content: "بيبيبيشششششششش" },
    { title3: "Ceo", img: tm, content: "شبيناشبناشيبنايشنبانشيباشينب" },
    { title4: "Client", img: tm, content: t("adminDesc") },
    { title5: "Smart Support Interface", img: tm, content: "محتوى جديد" },
  ];

  const filledPercentage = ((activeIndex + 1) / timelineData.length) * 100;

  return (
    <>
      <div className="hidden lg:block font-taj flex-col justify-between items-center p-10">
        <div className="text-center mt-24">
          <h2 className="font-bold font-taj text-[48px] mb-6 text-[#24346D] leading-[32px]">
            {timelineData[activeIndex].title}
          </h2>
        </div>

        <div className="relative w-full lg:mx-auto px-5">
          <div className="text-center flex-col lg:flex lg:flex-row justify-center items-center">
            <img src={timelineData[activeIndex].img} className="lg:w-[40%] w-full m-auto" alt="" />
            <p className="font-taj font-[500] text-[#24346D] lg:text-[30px] mt-2 w-full lg:w-[50%] text-pretty">
              {timelineData[activeIndex].content}
            </p>
          </div>

          <div className="mt-24 mb-64 relative">
            <div className="">
              <svg className="absolute bottom-[-200px] left-0 w-full h-[260px]" viewBox="0 0 2051 698" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#24346D" />
                    <stop offset={`${filledPercentage}%`} stopColor="#24346D" />
                    <stop offset={`${filledPercentage + 1}%`} stopColor="#5CB5C2" />
                    <stop offset="100%" stopColor="#5CB5C2" />
                  </linearGradient>
                </defs>
                <path
                  d="M2046.5 349.291C2024.64 280.798 1785.81 -378.692 1536 357.967C1456.5 604.967 1243.4 950.767 1027 357.967C756.501 -383.032 524.5 246.291 494 393.292C463.5 540.293 267 1037.29 4 300.792"
                  strokeWidth="8" fill="transparent" stroke="url(#waveGradient)"
                />

                {timelineData.map((item, index) => (
                  <circle
                    key={index}
                    cx={`${(index / (timelineData.length - 1)) * 98 + 1}%`} // ضبط مواقع النقاط
                    cy="50%"
                    r="18"
                    fill={activeIndex === index ? "#24346D" : "gray"}
                    onMouseEnter={() => setActiveIndex(index)}
                    style={{ cursor: "pointer", transition: "fill 0.3s" }}
                  />
                ))}
              </svg>

              <div className="absolute top-[-30px] flex justify-between w-full px-8 text-center">
                {timelineData.map((item, index) => (
                  <span
                    key={index}
                    className="text-[#24346D] font-bold text-[22px]"
                    style={{
                      left: `${(index / (timelineData.length - 1)) * 98 + 1}%`,
                      position: "absolute",
                      transform: "translateX(-40%)"
                    }}
                  >
                    {item.title}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
