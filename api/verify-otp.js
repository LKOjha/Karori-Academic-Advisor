// api/verify-otp.js
import jwt from "jsonwebtoken";
import crypto from "crypto";

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed, use POST instead." });
    }

    // Parse body
    let body = {};
    try {
      body = req.body || {};
      if (typeof body === "string") body = JSON.parse(body);
    } catch (err) {
      console.error("❌ JSON parse error:", err);
      return res.status(400).json({ error: "Invalid JSON body" });
    }

    const { token, otp } = body;

    // Check required fields
    if (!token || !otp) {
      return res.status(400).json({ ok: false, message: "Token and OTP required" });
    }

    // Verify token validity and extract payload
    let payload;
    try {
      payload = jwt.verify(token, process.env.JWT_SECRET || "jwt-secret");
    } catch (err) {
      console.error("❌ Invalid or expired token:", err);
      return res.status(400).json({ ok: false, verified: false, message: "Invalid or expired token" });
    }

    // Recompute HMAC of the user-entered OTP
    const expectedHmac = crypto
      .createHmac("sha256", process.env.OTP_SECRET || "otp-secret")
      .update(otp.toString())
      .digest("hex");

    // Compare hashes
    if (expectedHmac !== payload.hmac) {
      return res.status(400).json({ ok: false, verified: false, message: "Incorrect OTP" });
    }

    // ✅ OTP verified successfully
    return res.status(200).json({ ok: true, verified: true, email: payload.email });
  } catch (err) {
    console.error("❌ verify-otp error:", err);
    return res.status(500).json({ ok: false, verified: false, message: "Internal server error" });
  }
}
