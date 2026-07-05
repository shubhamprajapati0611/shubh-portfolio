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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        formData
      );

      console.log(res.data);

      alert("Message Sent Successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      alert(
        error?.response?.data?.error ||
          "Failed to send message. Check backend."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12"
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-10 lg:mb-14">
        Contact Me
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

        {/* Left Card */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className={`${cardStyle} rounded-3xl p-6 sm:p-8`}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">
            Let's Connect
          </h3>

          <div className="space-y-5 text-base sm:text-lg break-words">
            <p>📧 shubhprajapati609@gmail.com</p>
            <p>📱 +91 77984612177</p>
            <p>📍 India</p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`${cardStyle} rounded-3xl p-6 sm:p-8 flex flex-col gap-5`}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`p-3 sm:p-4 rounded-xl outline-none ${inputStyle}`}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`p-3 sm:p-4 rounded-xl outline-none ${inputStyle}`}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className={`p-3 sm:p-4 rounded-xl outline-none h-36 sm:h-40 resize-none ${inputStyle}`}
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-600 rounded-xl p-3 sm:p-4 font-bold transition duration-300"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>

      </div>
    </section>
  );
}

export default Contact;