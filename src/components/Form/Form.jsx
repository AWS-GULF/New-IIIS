import React from "react";
import styles from "./form.module.css";

const ContactForm = () => {
  return (
    <div className="relative lg:top-[-200px] w-full min-h-screen flex flex-col items-center justify-center pb-[100px] bg-white px-4 md:px-0 overflow-hidden">

      <div className={`${styles.bg} hidden md:block absolute top-0 left-[-150px] w-1/3 h-full bg-cover bg-no-repeat`}></div>
      <div className={`${styles.secbg} hidden md:block absolute top-0 right-[-150px] w-1/3 h-full bg-cover bg-no-repeat`}></div>

      <div className="relative z-10 w-full max-w-2xl bg-white p-8 rounded-lg text-center mt-10 md:mt-6">
        <h2 className="text-2xl font-bold text-[#24346D] text-[42px] font-taj">LET'S TALK!</h2>
        <form className="mt-6 space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative w-full md:w-1/2">
              <input
                type="text"
                id="name"
                className="peer w-full p-3 border-b-2 border-gray-300 bg-transparent outline-none focus:border-[#203E73]"
                placeholder=" "
              />
              <label
                htmlFor="name"
                className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-[-8px] peer-focus:text-xs peer-focus:text-[#203E73]"
              >
                Name
              </label>
            </div>

            <div className="relative w-full md:w-1/2">
              <input
                type="text"
                id="phone"
                className="peer w-full p-3 border-b-2 border-gray-300 bg-transparent outline-none focus:border-[#203E73]"
                placeholder=" "
              />
              <label
                htmlFor="phone"
                className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-[-8px] peer-focus:text-xs peer-focus:text-[#203E73]"
              >
                Phone
              </label>
            </div>
          </div>

          <div className="relative w-full">
            <input
              type="email"
              id="email"
              className="peer w-full p-3 border-b-2 border-gray-300 bg-transparent outline-none focus:border-[#203E73]"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-[-8px] peer-focus:text-xs peer-focus:text-[#203E73]"
            >
              Email
            </label>
          </div>

          <div className="relative w-full">
            <textarea
              id="message"
              className="peer w-full p-3 border-b-2 border-gray-300 bg-transparent outline-none focus:border-[#203E73] h-32 resize-none"
              placeholder=" "
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-[-8px] peer-focus:text-xs peer-focus:text-[#203E73]"
            >
              Message
            </label>
          </div>

          <button
            type="submit"
            className="bg-[#203E73] rounded bg-gradient-to-r transition-all duration-100
               hover:text-white bg-linear-to-r from-[#0395A5] to-[#213B71] hover:bg-gradient-to-l hover:from-[#213B71] to-[#0395A5]
              text-white font-semibold px-10 py-4 lg:w-46 flex-nowrap mt-10"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
