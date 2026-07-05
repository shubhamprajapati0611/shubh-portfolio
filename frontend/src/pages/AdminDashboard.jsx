import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();

  const fetchMessages = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please login first");
        navigate("/admin-login");
        return;
      }

      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        {
          headers: {
            authorization: token,
          },
        }
      );

      setMessages(res.data);
    } catch (error) {
      console.log("FETCH ERROR:", error);
      alert("Unauthorized");
      navigate("/admin-login");
    }
  };

  const deleteMessage = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/contact/${id}`,
        {
          headers: {
            authorization: token,
          },
        }
      );

      fetchMessages();
    } catch (error) {
      console.log("DELETE ERROR:", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/admin-login");
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <div className="flex justify-between mb-10">
        <h1 className="text-4xl font-bold">Admin Dashboard</h1>

        <button
          onClick={logout}
          className="bg-red-500 px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      {messages.length === 0 ? (
        <p>No messages found.</p>
      ) : (
        messages.map((msg) => (
          <div key={msg._id} className="bg-white/10 p-5 rounded mb-4">
            <h2>{msg.name}</h2>
            <p>{msg.email}</p>
            <p>{msg.message}</p>

            <button
              onClick={() => deleteMessage(msg._id)}
              className="bg-red-500 px-4 py-2 rounded mt-4"
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default AdminDashboard;