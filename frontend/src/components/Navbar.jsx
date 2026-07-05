import { Link } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  const navStyle = darkMode
    ? "bg-black/20 backdrop-blur-xl border-b border-white/10"
    : "bg-white/20 backdrop-blur-xl border-b border-white/30";

  return (
    <nav className={`${navStyle} sticky top-0 z-50 px-16 py-6`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Shubham.dev
        </h1>

        <div className="flex items-center gap-10">
          <ul className="flex gap-8 text-lg items-center">
            {["about", "skills", "projects", "contact"].map((item) => (
              <li key={item} className="group relative cursor-pointer">
                <a
                  href={`#${item}`}
                  className="hover:text-blue-400 transition-all duration-300"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>

                <span className="absolute left-0 bottom-[-5px] h-[2px] w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}

            <li>
              <Link
                to="/admin-login"
                className="hover:text-blue-400 transition-all"
              >
                Admin
              </Link>
            </li>
          </ul>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 transition-all"
          >
            {darkMode ? "☀" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;