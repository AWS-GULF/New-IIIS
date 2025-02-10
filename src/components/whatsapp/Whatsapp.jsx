import React from "react";

const Whatsapp = () => {
  const handleClick = () => {
    window.open("https://wa.me/yourphonenumber", "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6">
      <button
        onClick={handleClick}
        className="bg-green-500 text-white p-4 rounded-full transition-all hover:bg-green-600 
                   shadow-[0_0_40px_10px_rgba(34,197,94,1)] animate-glow-custom animate-bounce-custom"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-8 h-8"
        />
      </button>

      <style>
        {`
          @keyframes glow {
            0% { box-shadow: 0 0 15px 5px rgba(34, 197, 94, 0.8); }
            50% { box-shadow: 0 0 40px 15px rgba(34, 197, 94, 1); }
            100% { box-shadow: 0 0 15px 5px rgba(34, 197, 94, 0.8); }
          }

          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }

          .animate-glow-custom {
            animation: glow 1.2s infinite alternate;
          }

          .animate-bounce-custom {
            animation: bounce 1.2s infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Whatsapp;
