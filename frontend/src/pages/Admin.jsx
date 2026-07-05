import { useEffect, useState } from "react";
import axios from "axios";

function Admin() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMessages = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        "http://localhost:5000/api/contact"
      );

      console.log("MESSAGES:", res.data);

      setMessages(res.data);
    } catch (error) {
      console.log("FETCH ERROR:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteMessage = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/contact/${id}`
      );

      // refresh after delete
      fetchMessages();
    } catch (error) {
      console.log("DELETE ERROR:", error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white p-10">

      <h1 className="text-4xl font-bold mb-8">
        Admin Dashboard
      </h1>

      {/* LOADING */}
      {loading ? (
        <p className="text-gray-400">Loading messages...</p>
      ) : messages.length === 0 ? (
        <p className="text-gray-400">No messages found.</p>
      ) : (
        <div className="grid gap-6">
          {messages.map((msg) => (
            <div
              key={msg._id}
              className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/10 hover:bg-white/15 transition"
            >
              <h2 className="text-2xl font-bold">
                {msg.name}
              </h2>

              <p className="text-blue-400 mt-2">
                {msg.email}
              </p>

              <p className="mt-4 text-gray-300">
                {msg.message}
              </p>

              <button
                onClick={() => deleteMessage(msg._id)}
                className="mt-5 px-5 py-3 bg-red-500 rounded-lg hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Admin;