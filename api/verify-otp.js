// api/verify-otp.js
import jwt from "jsonwebtoken";
import crypto from "crypto";

console.log("🚀 verify-otp API file loaded"); // logs when file is loaded by the server

export default async function handler(req, res) {
  console.log("✅ verify-otp handler triggered");

  if (req.method !== "POST") {
    console.log("❌ Invalid method:", req.method);
    return res.status(405).json({ error: "Method not allowed, use POST instead." });
  }

  try {
    // Parse request body
    let body = {};
    try {
      body = req.body || {};
      if (typeof body === "string") body = JSON.parse(body);
    } catch (err) {
      console.error("❌ JSON parse error:", err);
      return res.status(400).json({ error: "Invalid JSON body" });
    }

    const { token, otp } = body;
    console.log("📩 Received data:", { tokenPresent: !!token, otp });

    if (!token || !otp) {
      console.log("❌ Missing token or otp");
      return res.status(400).json({ error: "token and otp required" });
    }

    // Verify the token
    let payload;
    try {
      payload = jwt.verify(token, process.env.JWT_SECRET || "jwt-secret");
      console.log("🔐 Token verified:", payload.email);
    } catch (jwtErr) {
      console.error("❌ JWT verification failed:", jwtErr.message);
      return res.status(400).json({ error: "Invalid or expired token" });
    }

    // Recreate HMAC from user-entered OTP
    const expectedHmac = crypto
      .createHmac("sha256", process.env.OTP_SECRET || "otp-secret")
      .update(otp.toString())
      .digest("hex");

    console.log("🧮 Expected HMAC:", expectedHmac);
    console.log("🧩 Payload HMAC:", payload.hmac);

    if (expectedHmac !== payload.hmac) {
      console.log("❌ OTP mismatch");
      return res.status(400).json({ ok: false, verified: false, message: "Invalid OTP" });
    }

    console.log("✅ OTP verified successfully for:", payload.email);
    return res.status(200).json({ ok: true, verified: true, email: payload.email });
  } catch (err) {
    console.error("💥 verify-otp unexpected error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
