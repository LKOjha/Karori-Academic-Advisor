// api/verify-otp.js
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { token, otp } = req.body || {};
  if (!token || !otp) return res.status(400).json({ error: 'token and otp required' });

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET || 'jwt-secret'); // throws if invalid/expired

    // Recompute hmac of user-entered otp and compare to stored hmac
    const expected = crypto.createHmac('sha256', process.env.OTP_SECRET || 'otp-secret')
                           .update(otp.toString())
                           .digest('hex');

    if (expected !== payload.hmac) {
      return res.status(400).json({ ok: false, verified: false, message: 'Invalid OTP' });
    }

    // Verified!
    // You can: (a) issue a short lived "verified" token, (b) return success for frontend to proceed.
    return res.status(200).json({ ok: true, verified: true, email: payload.email });
  } catch (err) {
    console.error('verify-otp error', err);
    return res.status(400).json({ ok: false, error: 'Invalid or expired token' });
  }
};
