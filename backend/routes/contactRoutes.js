const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const nodemailer = require("nodemailer");
const auth = require("../middleware/auth");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((error) => {
  if (error) {
    console.log("MAIL ERROR:", error);
  } else {
    console.log("Mail server ready");
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        error: "All fields required",
      });
    }

    const newMessage = new Contact({ name, email, message });
    await newMessage.save();

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Portfolio Contact Message",
      html: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thanks for contacting me",
      html: `
        <h2>Thank you ${name}!</h2>
        <p>Your message has been received successfully.</p>
        <p>I will contact you soon.</p>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: error.message,
    });
  }
});

router.get("/", auth, async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;