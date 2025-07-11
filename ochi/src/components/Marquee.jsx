import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div className="w-full h-[50vh] py-10 rounded-lg bg-[#004d43] overflow-hidden">
      {/* Static border wrapper */}
      <div className="relative">
        <div className="absolute top-0 left-0 w-full border-t-2 border-zinc-300" />
        <div className="absolute bottom-0 left-0 w-full border-b-2 border-zinc-300" />

        {/* Animated content */}
        <motion.div
          className="flex gap-10 text-white whitespace-nowrap pt-10 pb-10"
          style={{
            willChange: "transform",
            display: "flex",
            transform: "translateZ(0)" // force GPU acceleration
          }}
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            ease: "linear",
            duration: 10,
            repeat: Infinity,
          }}
        >
          {[...Array(6)].map((_, index) => (
            <h1
              key={index}
              className="text-[17vw] leading-none font-[Founders_Grotest] font-bold uppercase"
            >
              We are Ochi
            </h1>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
