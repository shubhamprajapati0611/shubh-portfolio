import bac from "../assets/bac.png";
import { motion } from "framer-motion";

function Hero({ darkMode }) {
  const glassStyle = darkMode
    ? "bg-white/[0.08] backdrop-blur-xl border border-white/10 shadow-2xl"
    : "bg-gradient-to-br from-blue-200/50 via-white/30 to-purple-200/50 backdrop-blur-3xl border border-white/50 shadow-2xl";

  return (
    <motion.section
      initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center justify-center px-5 sm:px-8 lg:px-12 py-12"
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl w-full">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center lg:text-left order-2 lg:order-1"
        >
          <p className="text-blue-400 text-lg sm:text-xl mb-3">
            Hello, I'm
          </p>

          <h1 className="font-bold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Shubham Kumar
          </h1>

          <h2 className="mt-4 font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent text-2xl sm:text-3xl lg:text-4xl">
            Full Stack Developer
          </h2>

          <p className="mt-6 text-gray-400 leading-8 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg">
            I build premium web applications with modern frontend and backend
            technologies. Passionate about creating scalable, elegant and
            high-performance digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5 mt-8">
            <button className="px-8 py-4 bg-blue-500 rounded-xl hover:bg-blue-600 transition hover:scale-105">
              Hire Me
            </button>

            <button
              className={`${glassStyle} px-8 py-4 rounded-xl hover:scale-105 transition`}
            >
              Resume
            </button>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative flex justify-center order-1 lg:order-2"
        >
          {/* Floating Tech */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-4 left-2 sm:left-6 lg:left-0 px-3 py-2 bg-blue-500 rounded-xl text-xs sm:text-sm shadow-xl"
          >
            React
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-10 right-2 sm:right-6 lg:right-0 px-3 py-2 bg-green-500 rounded-xl text-xs sm:text-sm shadow-xl"
          >
            Node.js
          </motion.div>

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3.5, repeat: Infinity }}
            className="absolute bottom-20 left-4 sm:left-8 lg:left-10 px-3 py-2 bg-purple-500 rounded-xl text-xs sm:text-sm shadow-xl"
          >
            MongoDB
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 4.5, repeat: Infinity }}
            className="absolute bottom-10 right-4 sm:right-8 lg:right-10 px-3 py-2 bg-yellow-500 rounded-xl text-xs sm:text-sm shadow-xl"
          >
            Python
          </motion.div>

          {/* Card */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className={`${glassStyle} rounded-3xl p-6 sm:p-8 w-full max-w-[380px] md:max-w-[420px] min-h-[420px] sm:min-h-[500px]`}
          >
            <div className="relative flex justify-center">
              <div className="absolute w-44 h-44 sm:w-56 sm:h-56 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-2xl opacity-70 animate-pulse"></div>

              <div className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 rounded-full">
                <img
                  src={bac}
                  alt="Profile"
                  className="w-44 h-44 sm:w-56 sm:h-56 rounded-full object-cover"
                />
              </div>
            </div>

            <h3 className="text-center font-bold mt-8 text-2xl sm:text-3xl">
              Software Developer
            </h3>

            <p className="text-center text-gray-400 mt-3 text-sm sm:text-base">
              Building scalable & modern applications
            </p>
          </motion.div>
        </motion.div>

      </div>
    </motion.section>
  );
}

export default Hero;