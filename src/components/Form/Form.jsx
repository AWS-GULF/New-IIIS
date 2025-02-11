import React from "react";
import styles from "./Form.module.css";
import { useTranslation } from "react-i18next";

function ContactForm({ lang }) {
  const { t } = useTranslation();
  return (
    <div
      className="relative capitalize lg:top-[-200px] w-full lg:min-h-screen flex flex-col items-center justify-center mb-5 lg:mb-0 bg-white px-4 md:px-0 overflow-hidden"
      id="form"
    >
      <div
        className={`${styles.bg} hidden lg:block absolute top-28 left-[-65px] w-1/3 h-[70%] bg-cover bg-no-repeat`}
      ></div>
      <div
        className={`${styles.secbg} hidden lg:block absolute top-28 right-[-220px] w-1/3 h-[70%] bg-cover bg-no-repeat`}
      ></div>
      <div
        className={`${styles.MBG} right-[130px]  md:block lg:hidden hidden z-[11] absolute w-full h-[70%] bg-cover bg-no-repeat`}
      ></div>

      <div
        className="relative z-10  w-full max-w-3xl bg-white p-3 rounded-lg text-center lg:mt-36 mt-20 "
        id="FORM"
      >
        <h2 className="text-2xl font-bold text-[#24346D] text-[42px] font-taj mb-20">
          {t("let's")}!
        </h2>
        <form className=" mt-6 space-y-6 px-0 md:px-20 lg:px-0">
          <div className="flex flex-col md:flex-row gap-4">
            <div
              className={`relative w-full md:w-1/2 ${
                lang === "ar" ? "text-right" : "text-left"
              }`}
            >
              <input
                type="text"
                id="name"
                className={`peer w-full px-0 py-3 border-b-2 border-gray-300  bg-transparent outline-none focus:border-[#203E73] ${
                  lang === "ar" ? "text-right" : "text-left"
                } `}
                placeholder=" "
                dir={lang === "ar" ? "rtl" : "ltr"}
              />
              <label
                htmlFor="name"
                className={`absolute ${
                  lang === "ar" ? "right-0" : "left-0"
                } top-[-8px] font-bold  text-gray-500 text-xs transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-[-8px] peer-focus:text-xs peer-focus:text-[#203E73] peer-valid:top-[-8px] peer-valid:text-xs peer-valid:text-[#203E73]`}
              >
                {t("name")}
              </label>
            </div>

            <div
              className={`relative w-full md:w-1/2 ${
                lang === "ar" ? "text-right" : "text-left"
              }`}
            >
              <input
                type="text"
                id="phone"
                className={`peer w-full px-0 py-3 border-b-2 border-gray-300 bg-transparent outline-none focus:border-[#203E73] ${
                  lang === "ar" ? "text-right" : "text-left"
                }`}
                placeholder=" "
                dir={lang === "ar" ? "rtl" : "ltr"}
              />
              <label
                htmlFor="phone"
                className={`absolute ${
                  lang === "ar" ? "right-0" : "left-0"
                } top-[-8px] font-bold text-gray-500 text-xs transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-[-8px] peer-focus:text-xs peer-focus:text-[#203E73] peer-valid:top-[-8px] peer-valid:text-xs peer-valid:text-[#203E73]`}
              >
                {t("phone")}
              </label>
            </div>
          </div>

          <div
            className={`relative w-full ${
              lang === "ar" ? "text-right" : "text-left"
            }`}
          >
            <input
              type="email"
              id="email"
              className={`peer w-full px-0 py-3 border-b-2 border-gray-300 bg-transparent outline-none focus:border-[#203E73] ${
                lang === "ar" ? "text-right" : "text-left"
              }`}
              placeholder=" "
              dir={lang === "ar" ? "rtl" : "ltr"}
            />
            <label
              htmlFor="email"
              className={`absolute ${
                lang === "ar" ? "right-0" : "left-0"
              } font-bold top-[-8px] text-gray-500 text-xs transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-[-8px] peer-focus:text-xs peer-focus:text-[#203E73] peer-valid:top-[-8px] peer-valid:text-xs peer-valid:text-[#203E73]`}
            >
              {t("email")}
            </label>
          </div>

          <div
            className={`relative w-full ${
              lang === "ar" ? "text-right" : "text-left"
            }  pb-10 `}
          >
            <textarea
              id="message"
              className={`peer w-full px-0 py-3 border-b-2 border-gray-300 bg-transparent outline-none focus:border-[#203E73] h-32 resize-none ${
                lang === "ar" ? "text-right" : "text-left"
              }`}
              placeholder=" "
              dir={lang === "ar" ? "rtl" : "ltr"}
            ></textarea>
            <label
              htmlFor="message"
              className={`absolute ${
                lang === "ar" ? "right-0" : "left-0"
              } font-bold top-[-8px] text-gray-500 text-xs transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-[-8px] peer-focus:text-xs peer-focus:text-[#203E73] peer-valid:top-[-8px] peer-valid:text-xs peer-valid:text-[#203E73]`}
            >
              {t("msg")}
            </label>
          </div>

          <button
            type="submit"
            className=" rounded bg-gradient-to-r transition-all duration-100 hover:text-white bg-linear-to-r from-[#0395A5] to-[#213B71] hover:bg-gradient-to-l hover:from-[#213B71]to-[#0395A5] text-white font-semibold px-16 py-3 lg:w-46 flex-nowrap  mt-10"
          >
            {t("send")}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
