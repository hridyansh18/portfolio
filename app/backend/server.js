/**
 * Hridyansh Chaudhary — Portfolio API
 * Express.js + Resend (Contact Form)
 *
 * Run with:
 *   node server.js
 *   OR for auto-reload: npx nodemon server.js
 */

import express from "express";
import cors from "cors";
import { Resend } from "resend";
import { body, validationResult } from "express-validator";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8001;
const resend = new Resend(process.env.RESEND_API_KEY);

// ─── Middleware ────────────────────────────────────────────────────────────────
app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    methods: ["GET", "POST"],
  })
);

// ─── Routes ───────────────────────────────────────────────────────────────────

// Health check
app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Portfolio API is running 🚀" });
});

// Contact form endpoint
app.post(
  "/api/contact",
  [
    body("name").trim().notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Enter a valid email"),
    body("message").trim().notEmpty().withMessage("Message can't be empty"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const { name, email, subject, message } = req.body;

    try {
      // Email sent TO you (notification)
      await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: process.env.EMAIL_USER,
        reply_to: email,
        subject: subject ? `[Portfolio] ${subject}` : `[Portfolio] New message from ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: auto;">
            <h2 style="color: #E63946;">New Contact Form Submission</h2>
            <table style="width:100%; border-collapse:collapse;">
              <tr><td style="padding:8px; font-weight:bold; color:#555;">Name</td><td style="padding:8px;">${name}</td></tr>
              <tr><td style="padding:8px; font-weight:bold; color:#555;">Email</td><td style="padding:8px;">${email}</td></tr>
              <tr><td style="padding:8px; font-weight:bold; color:#555;">Subject</td><td style="padding:8px;">${subject || "—"}</td></tr>
              <tr><td style="padding:8px; font-weight:bold; color:#555; vertical-align:top;">Message</td><td style="padding:8px; white-space:pre-wrap;">${message}</td></tr>
            </table>
          </div>
        `,
      });

      // Auto-reply TO the sender
      await resend.emails.send({
        from: "Hridyansh Chaudhary <onboarding@resend.dev>",
        to: email,
        subject: "Got your message! I'll reply soon.",
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: auto;">
            <h2 style="color: #E63946;">Hey ${name}, thanks for reaching out!</h2>
            <p>I received your message and will get back to you within <strong>24 hours</strong>.</p>
            <p style="color:#888; font-size:13px;">— Hridyansh Chaudhary</p>
          </div>
        `,
      });

      return res.status(200).json({ success: true, message: "Message sent!" });
    } catch (err) {
      console.error("Mail error:", err);
      return res.status(500).json({ success: false, message: "Failed to send email." });
    }
  }
);

// ─── Start ─────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});