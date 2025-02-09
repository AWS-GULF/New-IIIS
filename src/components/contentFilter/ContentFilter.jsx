import { useState, useEffect } from "react";
import img1 from "../../assets/images/1.svg";
import img2 from "../../assets/images/2.svg";
import img3 from "../../assets/images/3.svg";
import img4 from "../../assets/images/4.svg";
import img5 from "../../assets/images/5.svg";
import img6 from "../../assets/images/6.svg";
import laptop from "../../assets/images/laptop.png";
import { useTranslation } from "react-i18next";

export default function ContentFilter({ isRTL }) {
  const { t, i18n } = useTranslation();
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0); // نستخدم الفهرس بدلاً من النص

  const categories = [
    { img: img1, title: t("INcateg") },
    { img: img2, title: t("ITcateg") },
    { img: img3, title: t("EMcateg") },
    { img: img4, title: t("KNcateg") },
    { img: img5, title: t("PRcateg") },
    { img: img6, title: t("CHcateg") },
  ];

  const cardsData = [
    {
      id: 1,
      category: t("INcateg"),
      features: [t("IMfeature1"), t("IMfeature2"), t("IMfeature3"), t("IMfeature4")],
    },
    {
      id: 2,
      category: t("ITcateg"),
      features: [t("ITfeature1"), t("ITfeature2")],
    },
    {
      id: 3,
      category: t("EMcateg"),
      features: [t("Emfeature1"), t("Emfeature2")],
    },
    {
      id: 4,
      category: t("KNcateg"),
      features: [t("Knfeature1"), t("Knfeature2")],
    },
    {
      id: 5,
      category: t("PRcateg"),
      features: [t("profeature1"), t("profeature2")],
    },
    {
      id: 6,
      category: t("CHcateg"),
      features: [t("changefeature1"), t("changefeature2")],
    },
  ];

  // تحديث العنوان عند تغيير اللغة
  useEffect(() => {
    setSelectedCategoryIndex((prevIndex) => prevIndex); // نستخدم الفهرس الحالي
  }, [i18n.language]);

  const selectedCard = cardsData[selectedCategoryIndex];

  return (
    <div className="sm:p-6 font-taj flex-col">
      {/* Navbar Links */}
      <div className="lg:flex lg:justify-center lg:flex-row lg:gap-2 flex-col">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategoryIndex(index)}
            className={`lg:px-4 lg:py-2 py-4 my-4 lg:mb-4 rounded-lg w-full font-bold transition-all shadow-xl ${
              selectedCategoryIndex === index
                ? "bg-gradient-to-b from-[#0395A5] to-[#213D72] text-white"
                : "bg-white text-black border"
            }`}
          >
            <img src={category.img} alt="category-icon" className="w-8 h-8 mx-auto mb-2" />
            {category.title}
          </button>
        ))}
      </div>

      {/* Features List */}
      <div className="lg:flex lg:flex-row flex-col lg:justify-between overflow-hidden mt-20">
        <div className="mb-10 flex-col w-full lg:w-[45%]">
          <h2 className="text-2xl font-bold lg:text-start text-center lg:mt-10 lg:mb-10 text-[#24346d] lg:text-[42px]">
            {selectedCard?.category}
          </h2>
          <ul className="mt-4 text-lg lg:text-start font-normal space-y-2 lg:space-y-4 flex-col text-center">
            {selectedCard?.features.map((feature, index) => (
              <li key={index} className="cursor-pointer lg:ms-6">
                <span>▶ </span>
                {feature}
              </li>
            ))}
          </ul>
          <div className="text-center lg:text-start">
            <button
              className="bg-[#203E73] rounded bg-gradient-to-r transition-all duration-100 lg:ms-6 
               hover:text-white bg-linear-to-r from-[#0395A5] to-[#213B71] hover:bg-gradient-to-l hover:from-[#213B71]to-[#0395A5]
              text-white font-semibold px-10 py-4 lg:w-46 flex-nowrap mt-10"
            >
              <a>{t("request")}</a>
            </button>
          </div>
        </div>
        <div className={`mb-10 flex-col lg:relative ${isRTL && "right-[-180px]" } w-[90%] m-auto lg:w-[65%]`}>
          <img src={laptop} alt="" />
        </div>
      </div>
    </div>
  );
}