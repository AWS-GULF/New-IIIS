import { useState, useEffect } from "react";
import img1 from "../../assets/images/1.svg";
import img2 from "../../assets/images/2.svg";
import img3 from "../../assets/images/3.svg";
import img4 from "../../assets/images/4.svg";
import img5 from "../../assets/images/5.svg";
import img6 from "../../assets/images/6.svg";
import laptop from "../../assets/images/laptop.png";
import { useTranslation } from "react-i18next";
import logo from "../../assets/images/transparent-logo.png";
import logortl from "../../assets/images/transparent-logo.png";

export default function ContentFilter({ isRTL}) {
  const { t, i18n } = useTranslation();
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0); 
  // console.log(i18n.language );
  

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

 
  useEffect(() => {
    setSelectedCategoryIndex((prevIndex) => prevIndex); 
  }, [i18n.language]);

  const selectedCard = cardsData[selectedCategoryIndex];

  return (
    <div className=" font-taj flex-col  " id="features">
    
      <div className="lg:flex lg:justify-center lg:flex-row lg:gap-2  flex-col mx-16  boxes" id="Boxes">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategoryIndex(index)}
            className={`lg:px-10 lg:py-8 py-4 my-4 lg:mb-4 rounded-lg w-full font-bold transition-all shadow-md box ${
              selectedCategoryIndex === index
                ? "bg-gradient-to-b from-[#0395A5] to-[#213D72] text-white"
                : "bg-white text-black border"
            }`}
          >
            <img src={category.img} alt="category-icon" className="w-12 h-12 mx-auto mb-2" />
            {category.title}
          </button>
        ))}
      </div>

      {/* features */}
      <div className="lg:flex lg:flex-row flex-col lg:justify-between overflow-hidden mt-20 lg:ps-16 ">
        


 <img
          src={i18n.language==='en' ? logortl : logo}
          className={` hidden lg:block lg:absolute h-[450px] scale-140  z-[-9] ${
            i18n.language==='en' ? "left-[0%]" : "left-[80%]"
          }`}
          alt=""
        />






        <div className="mb-10 flex-col w-full lg:w-[45%]">
          <h2 className="text-2xl font-bold lg:text-start text-center lg:mt-10 lg:mb-10 text-[#24346d] lg:text-[42px]">
            {selectedCard?.category}
          </h2>
          <ul className="mt-4 text-lg  font-normal  lg:space-y-4 flex-col ps-7  lg:ps-0 space-y-6 text-start ">
            {selectedCard?.features.map((feature, index) => (
              <li key={index} className="cursor-pointer md:ms-16   lg:ms-6">
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
              <a  href="#form">{t("request")}</a>
            </button>
          </div>
        </div>
        <div className={`mb-10 flex-col lg:relative ${i18n.language==='en'&& "right-[-120px]" } ${i18n.language==='ar'&& "right-[120px]" } w-[90%]  m-auto lg:w-[65%]`}>
          <img src={laptop} alt="" />
        </div>
      </div>
    </div>
  );
}