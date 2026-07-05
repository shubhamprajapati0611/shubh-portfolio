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
      className="min-h-screen flex items-center justify-center px-12"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl w-full">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p className="text-blue-400 text-xl mb-4">Hello, I'm</p>

          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            Shubham Kumar
          </h1>

          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mt-4">
            Full Stack Developer
          </h2>

          <p className="mt-6 text-lg text-gray-400 max-w-xl leading-8">
            I build premium web applications with modern frontend and backend
            technologies. Passionate about creating scalable, elegant and
            high-performance digital experiences.
          </p>

          <div className="flex gap-6 mt-8">
            <button className="px-8 py-4 bg-blue-500 rounded-xl hover:bg-blue-600 transition-all duration-300 hover:scale-105">
              Hire Me
            </button>

            <button className={`${glassStyle} px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300`}>
              Resume
            </button>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative flex justify-center"
        >
          {/* Floating Tech Icons */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-10 left-0 px-4 py-2 bg-blue-500 rounded-xl shadow-xl"
          >
            React
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-20 right-0 px-4 py-2 bg-green-500 rounded-xl shadow-xl"
          >
            Node.js
          </motion.div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3.5, repeat: Infinity }}
            className="absolute bottom-16 left-10 px-4 py-2 bg-purple-500 rounded-xl shadow-xl"
          >
            MongoDB
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 4.5, repeat: Infinity }}
            className="absolute bottom-10 right-10 px-4 py-2 bg-yellow-500 rounded-xl shadow-xl"
          >
            Python
          </motion.div>

          {/* Main Card */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className={`${glassStyle} rounded-3xl p-8 w-[420px] min-h-[500px]`}
          >
            <div className="relative flex justify-center">
              <div className="absolute w-56 h-56 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-2xl opacity-70 animate-pulse"></div>

              <div className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 rounded-full">
                <img
                  src={bac}
                  alt="Profile"
                  className="w-56 h-56 rounded-full object-cover"
                />
              </div>
            </div>

            <h3 className="text-3xl font-bold text-center mt-8">
              Software Developer
            </h3>

            <p className="text-center text-gray-400 mt-3">
              Building scalable & modern applications
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Hero;