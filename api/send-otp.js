// api/send-otp.js
const jwt = require('jsonwebtoken');
const sgMail = require('@sendgrid/mail');
const crypto = require('crypto');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { email } = req.body || {};
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) return res.status(400).json({ error: 'Valid email required' });

  try {
    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // HMAC the OTP with OTP_SECRET (so we don't store plain OTP)
    const hmac = crypto.createHmac('sha256', process.env.OTP_SECRET || 'otp-secret')
                       .update(otp)
                       .digest('hex');

    // Create a signed token that includes email + hmac, short expiry
    const token = jwt.sign({ email, hmac }, process.env.JWT_SECRET || 'jwt-secret', { expiresIn: '5m' });

    // Send email (SendGrid)
    const msg = {
      to: email,
      from: process.env.SENDGRID_FROM_EMAIL, // must be verified in SendGrid
      subject: 'Your verification code',
      text: `Your verification code is: ${otp}\nIt will expire in 5 minutes.`,
      html: `<p>Your verification code is: <strong>${otp}</strong></p><p>It will expire in 5 minutes.</p>`
    };

    await sgMail.send(msg);

    // Return the token to client (token does NOT contain otp in plaintext)
    return res.status(200).json({ ok: true, token });
  } catch (err) {
    console.error('send-otp error', err);
    return res.status(500).json({ error: 'Failed to send OTP' });
  }
};
