// api/send-otp.js
import jwt from "jsonwebtoken";
import sgMail from "@sendgrid/mail";
import crypto from "crypto";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  console.log("🚀 /api/send-otp called");

  try {
    if (req.method !== "POST") {
      console.log("❌ Invalid method:", req.method);
      return res
        .status(405)
        .json({ error: "Method not allowed, use POST instead." });
    }

    // Parse and validate body
    let body = {};
    try {
      body = req.body || {};
      if (typeof body === "string") body = JSON.parse(body);
    } catch (parseErr) {
      console.error("❌ JSON parse error:", parseErr);
      return res.status(400).json({ error: "Invalid JSON body" });
    }

    const { email } = body;
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      console.log("❌ Invalid email:", email);
      return res.status(400).json({ error: "Valid email required" });
    }

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    console.log("🔢 Generated OTP:", otp);

    // Create HMAC from OTP
    const hmac = crypto
      .createHmac("sha256", process.env.OTP_SECRET || "otp-secret")
      .update(otp)
      .digest("hex");

    // Sign JWT token with HMAC and short expiry
    const token = jwt.sign(
      { email, hmac },
      process.env.JWT_SECRET || "jwt-secret",
      { expiresIn: "5m" }
    );

    // Prepare email
    const msg = {
      to: email,
      from: process.env.SENDGRID_FROM_EMAIL,
      subject: "Your verification code",
      text: `Your verification code is: ${otp}\nIt will expire in 5 minutes.`,
      html: `
        <div style="font-family:sans-serif">
          <h3>Your verification code:</h3>
          <p style="font-size:20px"><strong>${otp}</strong></p>
          <p>This code will expire in 5 minutes.</p>
        </div>
      `,
    };

    // Send OTP email
    try {
      await sgMail.send(msg);
      console.log("📧 OTP email sent to:", email);
    } catch (mailErr) {
      console.error("❌ SendGrid error:", mailErr.response?.body || mailErr);
      return res.status(500).json({ error: "Failed to send email" });
    }

    // Respond to frontend with token
    return res.status(200).json({ ok: true, token });
  } catch (err) {
    console.error("💥 send-otp unexpected error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
