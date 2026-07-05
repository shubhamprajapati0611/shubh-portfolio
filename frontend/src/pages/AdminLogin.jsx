import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/admin/login`,
        formData
      );
      localStorage.setItem("token", res.data.token);
      navigate("/admin-dashboard");

    } catch (error) {
      alert(error.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-black text-white">
      <form
        onSubmit={handleLogin}
        className="bg-white/10 p-8 rounded-xl w-[400px]"
      >
        <h1 className="text-3xl mb-6">Admin Login</h1>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded text-black"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded text-black"
        />

        <button className="w-full bg-blue-500 p-3 rounded">
          Login
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;