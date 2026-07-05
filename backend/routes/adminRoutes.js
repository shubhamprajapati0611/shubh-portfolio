const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      email !== process.env.ADMIN_EMAIL ||
      password !== process.env.ADMIN_PASSWORD
    ) {
      return res.status(401).json({
        error: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      { email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).json({
      success: true,
      token,
    });

  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

module.exports = router;