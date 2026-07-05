import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Counters from "./components/Counters";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";

import ParticlesBackground from "./components/ParticlesBackground";
import CursorGlow from "./components/CursorGlow";
import ScrollProgress from "./components/ScrollProgress";
import FloatingOrbs from "./components/FloatingOrbs";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div
            className={
              darkMode
                ? "min-h-screen text-white bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900"
                : "min-h-screen text-gray-900 bg-gradient-to-br from-blue-100 via-white to-purple-100"
            }
          >
            {darkMode && (
              <>
                <div className="fixed top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-[140px] opacity-20"></div>
                <div className="fixed bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-[140px] opacity-20"></div>
              </>
            )}

            <ParticlesBackground />
            <CursorGlow darkMode={darkMode} />
            <ScrollProgress />
            <FloatingOrbs />

            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <Hero darkMode={darkMode} />
            <Counters darkMode={darkMode} />
            <About darkMode={darkMode} />
            <Skills darkMode={darkMode} />
            <Projects darkMode={darkMode} />
            <Contact darkMode={darkMode} />
            <Footer darkMode={darkMode} />
          </div>
        }
      />

      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;