// api/send-otp.js
import jwt from "jsonwebtoken";
import sgMail from "@sendgrid/mail";
import crypto from "crypto";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res
        .status(405)
        .json({ error: "Method not allowed, use POST instead." });
    }

    // Ensure body exists
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
      return res.status(400).json({ error: "Valid email required" });
    }

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // HMAC the OTP with secret
    const hmac = crypto
      .createHmac("sha256", process.env.OTP_SECRET || "otp-secret")
      .update(otp)
      .digest("hex");

    // Create signed token with short expiry
    const token = jwt.sign(
      { email, hmac },
      process.env.JWT_SECRET || "jwt-secret",
      { expiresIn: "5m" }
    );

    // Send email
    const msg = {
      to: email,
      from: process.env.SENDGRID_FROM_EMAIL,
      subject: "Your verification code",
      text: `Your verification code is: ${otp}\nIt will expire in 5 minutes.`,
      html: `<p>Your verification code is: <strong>${otp}</strong></p><p>It will expire in 5 minutes.</p>`,
    };

    try {
      await sgMail.send(msg);
    } catch (mailErr) {
      console.error("❌ SendGrid error:", mailErr.response?.body || mailErr);
      return res.status(500).json({ error: "Failed to send email" });
    }

    // Success
    return res.status(200).json({ ok: true, token });
  } catch (err) {
    console.error("❌ send-otp function error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
