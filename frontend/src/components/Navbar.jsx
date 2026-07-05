import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navStyle = darkMode
    ? "bg-black/20 backdrop-blur-xl border-b border-white/10"
    : "bg-white/20 backdrop-blur-xl border-b border-white/30";

  return (
    <nav className={`${navStyle} sticky top-0 z-50`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-5 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Shubham.dev
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 text-lg">
            {["about", "skills", "projects", "contact"].map((item) => (
              <li key={item} className="group relative">
                <a
                  href={`#${item}`}
                  className="hover:text-blue-400 transition duration-300"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>

                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}

            <li>
              <Link
                to="/admin-login"
                className="hover:text-blue-400 transition"
              >
                Admin
              </Link>
            </li>
          </ul>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 transition"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Mobile Buttons */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 text-lg pb-4">
          {["about", "skills", "projects", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-400 transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}

          <li>
            <Link
              to="/admin-login"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-400 transition"
            >
              Admin
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;