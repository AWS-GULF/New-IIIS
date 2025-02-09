import React from "react";

const Whatsapp = () => {
  const phoneNumber = "+201289384409";
  const message = "good morning"; 

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={handleClick}
        className="bg-green-500 text-white p-3 rounded-full shadow-lg animate-bounce hover:bg-green-600 transition-all"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-8 h-8"
        />
      </button>
    </div>
  );
};

export default Whatsapp;