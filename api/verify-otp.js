// api/verify-otp.js
import jwt from "jsonwebtoken";
import crypto from "crypto";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed, use POST" });
  }

  let body = {};
  try {
    body = req.body || {};
    if (typeof body === "string") body = JSON.parse(body);
  } catch (parseErr) {
    console.error("❌ JSON parse error:", parseErr);
    return res.status(400).json({ error: "Invalid JSON body" });
  }

  const { token, otp } = body;
  if (!token || !otp) {
    return res.status(400).json({ ok: false, message: "Token and OTP required" });
  }

  try {
    // Verify JWT
    const payload = jwt.verify(token, process.env.JWT_SECRET || "jwt-secret");

    // Compute HMAC of user-entered OTP
    const expectedHmac = crypto
      .createHmac("sha256", process.env.OTP_SECRET || "otp-secret")
      .update(otp.toString())
      .digest("hex");

    if (expectedHmac !== payload.hmac) {
      return res.status(400).json({ ok: false, verified: false, message: "Invalid OTP" });
    }

    // Success
    return res.status(200).json({ ok: true, verified: true, email: payload.email });
  } catch (err) {
    console.error("❌ verify-otp error:", err);
    return res.status(400).json({ ok: false, verified: false, message: "Invalid or expired token" });
  }
}
