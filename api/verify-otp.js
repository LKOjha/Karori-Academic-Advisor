// api/verify-otp.js
import jwt from "jsonwebtoken";
import crypto from "crypto";

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed, use POST instead." });
    }

    // Ensure valid JSON
    let body = {};
    try {
      body = req.body || {};
      if (typeof body === "string") body = JSON.parse(body);
    } catch (err) {
      console.error("❌ JSON parse error:", err);
      return res.status(400).json({ error: "Invalid JSON body" });
    }

    const { email, otp, token } = body;

    if (!email || !otp || !token) {
      return res.status(400).json({ error: "Email, OTP, and token are required" });
    }

    // Verify JWT token
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET || "jwt-secret");
    } catch (err) {
      console.error("❌ Invalid or expired token:", err);
      return res.status(400).json({ error: "Invalid or expired token" });
    }

    // Check email match
    if (decoded.email !== email) {
      return res.status(400).json({ error: "Email mismatch" });
    }

    // Recompute HMAC for received OTP
    const verifyHmac = crypto
      .createHmac("sha256", process.env.OTP_SECRET || "otp-secret")
      .update(otp)
      .digest("hex");

    // Compare HMAC values
    if (verifyHmac !== decoded.hmac) {
      return res.status(400).json({ error: "Invalid OTP" });
    }

    // ✅ Success
    return res.status(200).json({ ok: true, message: "OTP verified successfully!" });
  } catch (err) {
    console.error("❌ verify-otp function error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
