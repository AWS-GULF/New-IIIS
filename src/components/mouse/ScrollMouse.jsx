import { motion } from "framer-motion";

const ScrollMouse = () => {
  return (
    <div className="flex justify-center items-center h-32">
    
      <div className="w-6 h-[40px] border-2 border-white rounded-full flex justify-center items-center relative mt-[-10px]">
      
        <motion.div
          className="w-2 h-2 bg-white rounded-full"
          animate={{
            y: [0, 10, 0], 
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
};

export default ScrollMouse;
