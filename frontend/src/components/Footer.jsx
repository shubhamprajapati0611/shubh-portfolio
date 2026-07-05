import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer({ darkMode }) {
  const footerStyle = darkMode
    ? "bg-white/10 backdrop-blur-xl border-t border-white/10 shadow-2xl"
    : "bg-gradient-to-r from-blue-200/40 via-white/30 to-purple-200/40 backdrop-blur-2xl border-t border-white/40 shadow-xl";

  return (
    <footer className={`${footerStyle} mt-20 py-10 px-8`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Left */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Shubham.dev
          </h2>

          <p className="text-sm mt-3 text-gray-400 max-w-sm">
            Building scalable & premium digital experiences
          </p>
        </div>

        {/* Center Navigation */}
        <div className="flex gap-6 md:gap-8 text-lg">
          <a href="#about" className="hover:text-blue-400 transition-all duration-300">
            About
          </a>

          <a href="#skills" className="hover:text-blue-400 transition-all duration-300">
            Skills
          </a>

          <a href="#projects" className="hover:text-blue-400 transition-all duration-300">
            Projects
          </a>

          <a href="#contact" className="hover:text-blue-400 transition-all duration-300">
            Contact
          </a>
        </div>

        {/* Right */}
        <div className="flex items-center gap-5">
          <a
            href="#"
            className="text-2xl hover:text-blue-400 hover:scale-110 transition-all duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="#"
            className="text-2xl hover:text-blue-400 hover:scale-110 transition-all duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="#"
            className="text-2xl hover:text-blue-400 hover:scale-110 transition-all duration-300"
          >
            <FaEnvelope />
          </a>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="ml-3 px-5 py-3 bg-blue-500 rounded-xl hover:bg-blue-600 hover:scale-105 transition-all duration-300"
          >
            ↑ Top
          </button>
        </div>
      </div>

      <div className="text-center mt-10 text-sm text-gray-400 border-t border-white/10 pt-6">
        © 2025 Shubham Kumar. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;