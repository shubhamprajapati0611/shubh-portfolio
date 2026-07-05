import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

function Contact({ darkMode }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const cardStyle = darkMode
    ? "bg-white/10 backdrop-blur-xl border border-white/10 text-white"
    : "bg-gradient-to-br from-blue-200/40 via-white/30 to-purple-200/40 backdrop-blur-2xl border border-white/50 text-black shadow-xl";

  const inputStyle = darkMode
    ? "bg-white/10 text-white border border-white/10 placeholder-gray-400"
    : "bg-white/60 text-black border border-white/40 placeholder-gray-600";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        formData
      )
      
      console.log("SERVER RESPONSE:", res.data);

      alert("Message Sent Successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log("ERROR SENDING MESSAGE:", error);

      alert(
        error?.response?.data?.error ||
        "Failed to send message. Check backend."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <h2 className="text-5xl font-bold text-center mb-14">
        Contact Me
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className={`${cardStyle} rounded-3xl p-8`}
        >
          <h3 className="text-3xl font-bold mb-6">
            Let's Connect
          </h3>

          <div className="space-y-6 text-lg">
            <p>📧 shubhprajapati609@gmail.com</p>
            <p>📱 77984612177</p>
            <p>📍 India</p>
          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className={`${cardStyle} rounded-3xl p-8 flex flex-col gap-6`}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={`p-4 rounded-xl outline-none ${inputStyle}`}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className={`p-4 rounded-xl outline-none ${inputStyle}`}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className={`p-4 rounded-xl outline-none h-40 ${inputStyle}`}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-600 p-4 rounded-xl font-bold transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;