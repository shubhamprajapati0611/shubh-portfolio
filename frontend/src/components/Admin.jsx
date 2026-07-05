import { useEffect, useState } from "react";
import axios from "axios";

function Admin() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchMessages = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await axios.get(
        "http://localhost:5000/api/contact"
      );

      setMessages(res.data);
    } catch (err) {
      console.log(err);
      setError("Failed to load messages");
    } finally {
      setLoading(false);
    }
  };

  const deleteMessage = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/contact/${id}`
      );

      // refresh list after delete
      fetchMessages();
    } catch (err) {
      console.log(err);
      setError("Failed to delete message");
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      
      <h1 className="text-4xl font-bold mb-8">
        Admin Dashboard
      </h1>

      {/* LOADING */}
      {loading && (
        <p className="text-gray-400">Loading messages...</p>
      )}

      {/* ERROR */}
      {error && (
        <p className="text-red-400 mb-4">{error}</p>
      )}

      {/* EMPTY STATE */}
      {!loading && messages.length === 0 && (
        <p className="text-gray-400">No messages found.</p>
      )}

      {/* MESSAGES */}
      <div className="grid gap-6">
        {messages.map((msg) => (
          <div
            key={msg._id}
            className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/10 hover:bg-white/15 transition"
          >
            <h3 className="text-2xl font-bold">
              {msg.name}
            </h3>

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
    </div>
  );
}

export default Admin;