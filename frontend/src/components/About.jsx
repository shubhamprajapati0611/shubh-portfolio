// import { motion } from "framer-motion";

// function About({ darkMode }) {
//   const cardStyle = darkMode
//     ? "bg-white/10 backdrop-blur-xl border border-white/10"
//     : "bg-gradient-to-br from-blue-200/40 via-white/30 to-purple-200/40 backdrop-blur-2xl border border-white/50 shadow-xl";

//   return (
//     <motion.section
//       initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
//       whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//       transition={{ duration: 1 }}
//       viewport={{ once: true }}
//     >
//       <h2 className="text-5xl font-bold mb-10">
//         About Me
//       </h2>

//       <div className={`${cardStyle} rounded-3xl p-10 max-w-5xl mx-auto`}>
//         <p className="text-lg leading-8 mb-6">
//           Hello, I'm <span className="text-blue-400 font-bold">Shubham Kumar</span>,
//           a passionate and dedicated Software Developer with strong expertise in
//           frontend and backend development.
//         </p>

//         <p className="text-lg leading-8 mb-6">
//           I specialize in building modern, scalable, and user-friendly web applications
//           using technologies like React, Node.js, MongoDB, JavaScript, and Python.
//         </p>

//         <p className="text-lg leading-8 mb-6">
//           I enjoy solving complex problems, designing premium user interfaces,
//           and developing efficient backend systems that deliver real-world solutions.
//         </p>

//         <p className="text-lg leading-8">
//           My goal is to continuously learn, innovate, and create impactful software
//           solutions that enhance user experience and business growth.
//         </p>
//       </div>
//     </motion.section>
//   );
// }

// export default About;  


import { motion } from "framer-motion";

function About({ darkMode }) {
  const cardStyle = darkMode
    ? "bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl"
    : "bg-gradient-to-br from-blue-200/40 via-white/30 to-purple-200/40 backdrop-blur-2xl border border-white/50 shadow-xl";

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="py-24 px-8"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
        className="text-5xl font-bold mb-12 text-center"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
        className={`${cardStyle} rounded-3xl p-10 max-w-5xl mx-auto relative overflow-hidden`}
      >
        {/* Premium glow background */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-blue-500 rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500 rounded-full blur-[120px] opacity-20"></div>

        <div className="relative z-10">
          <p className="text-lg leading-8 mb-6">
            Hello, I'm{" "}
            <span className="text-blue-400 font-bold">
              Shubham Kumar
            </span>
            , a passionate and dedicated Software Developer with strong expertise in
            frontend and backend development.
          </p>

          <p className="text-lg leading-8 mb-6">
            I specialize in building modern, scalable, and user-friendly web
            applications using technologies like React, Node.js, MongoDB,
            JavaScript, and Python.
          </p>

          <p className="text-lg leading-8 mb-6">
            I enjoy solving complex problems, designing premium user interfaces,
            and developing efficient backend systems that deliver real-world
            solutions.
          </p>

          <p className="text-lg leading-8">
            My goal is to continuously learn, innovate, and create impactful
            software solutions that enhance user experience and business growth.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default About;