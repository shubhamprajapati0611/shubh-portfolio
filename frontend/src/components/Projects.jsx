import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import carspa from "../assets/carspa.jpg";
import luxurycar from "../assets/luxurycar.jpg";
import s3clone from "../assets/s3clone.jpg";

function Projects({ darkMode }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const cardStyle = darkMode
    ? "bg-white/[0.12] backdrop-blur-2xl border border-white/20 shadow-2xl shadow-black/40"
    : "bg-gradient-to-br from-blue-300/50 via-white/50 to-pink-500/50 backdrop-blur-3xl border border-white/50 shadow-xl shadow-purple-300/30";

  const modalStyle = darkMode
    ? "bg-white/10 backdrop-blur-2xl border border-white/20"
    : "bg-white/40 backdrop-blur-3xl border border-white/40";

  const projects = [
    {
      title: "Car Spa Website",
      description: "Booking and admin dashboard system.",
      details:
        "This project includes car washing service booking, admin dashboard, backend APIs, MongoDB database and email notifications.",
      image: carspa,
    },
    {
      title: "Luxury Car Website",
      description: "React-based car showcase website.",
      details:
        "This website showcases luxury cars with premium UI, modals, car details and appointment booking system.",
      image: luxurycar,
    },
    {
      title: "AWS S3 Clone",
      description: "Python cloud storage system.",
      details:
        "This project simulates AWS S3 functionalities like file upload, storage and retrieval using Python.",
      image: s3clone,
    },
  ];

  return (
    <section id="projects" className="py-20 px-8">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`${cardStyle} rounded-2xl overflow-hidden hover:scale-105 duration-300`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>

              <button
                onClick={() => setSelectedProject(project)}
                className="mt-5 px-5 py-3 bg-blue-500 rounded-lg hover:bg-blue-600"
              >
                View Info
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className={`${modalStyle} p-8 rounded-3xl max-w-lg w-full relative shadow-2xl`}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-white text-2xl"
              >
                ✕
              </button>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-56 object-cover rounded-xl mb-4"
              />

              <h2 className="text-3xl font-bold mb-4">
                {selectedProject.title}
              </h2>

              <p className="text-gray-300">
                {selectedProject.details}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;