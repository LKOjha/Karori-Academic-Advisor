// api/verify-otp.js
import jwt from "jsonwebtoken";
import crypto from "crypto";

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed, use POST instead." });
    }

    let body = {};
    try {
      body = req.body || {};
      if (typeof body === "string") body = JSON.parse(body);
    } catch (err) {
      console.error("❌ JSON parse error:", err);
      return res.status(400).json({ error: "Invalid JSON body" });
    }

    const { email, otp, token } = body;
    console.log("🟡 Incoming verify request:", { email, otp, token: token ? "token_present" : "no_token" });

    if (!email || !otp || !token) {
      console.error("❌ Missing fields");
      return res.status(400).json({ error: "Email, OTP, and token are required" });
    }

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET || "jwt-secret");
    } catch (err) {
      console.error("❌ Invalid or expired token:", err.message);
      return res.status(400).json({ error: "Invalid or expired token" });
    }

    console.log("🟢 Token decoded:", decoded);

    if (decoded.email !== email) {
      console.error("❌ Email mismatch:", decoded.email, email);
      return res.status(400).json({ error: "Email mismatch" });
    }

    const verifyHmac = crypto
      .createHmac("sha256", process.env.OTP_SECRET || "otp-secret")
      .update(otp)
      .digest("hex");

    console.log("🔵 Comparing HMACs:", { verifyHmac, decodedHmac: decoded.hmac });

    if (verifyHmac !== decoded.hmac) {
      console.error("❌ Invalid OTP");
      return res.status(400).json({ error: "Invalid OTP" });
    }

    console.log("✅ OTP verified successfully!");
    return res.status(200).json({ ok: true, message: "OTP verified successfully!" });
  } catch (err) {
    console.error("❌ verify-otp function error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
