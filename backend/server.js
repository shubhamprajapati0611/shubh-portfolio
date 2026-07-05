const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const contactRoutes = require("./routes/contactRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

app.use(cors({
  origin: "*",
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Running...");
});

app.use("/api/contact", contactRoutes);
app.use("/api/admin", adminRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB Error:", err.message);
  });