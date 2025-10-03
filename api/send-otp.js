const jwt = require('jsonwebtoken');
const sgMail = require('@sendgrid/mail');
const crypto = require('crypto');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    // Parse JSON body safely
    let body = req.body;
    if (typeof body === 'string') body = JSON.parse(body);

    const { email } = body || {};
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) return res.status(400).json({ error: 'Valid email required' });

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // HMAC the OTP with OTP_SECRET
    const hmac = crypto.createHmac('sha256', process.env.OTP_SECRET || 'otp-secret')
                       .update(otp)
                       .digest('hex');

    // Create a signed token
    const token = jwt.sign({ email, hmac }, process.env.JWT_SECRET || 'jwt-secret', { expiresIn: '5m' });

    // Send email
    const msg = {
      to: email,
      from: process.env.SENDGRID_FROM_EMAIL,
      subject: 'Your verification code',
      text: `Your verification code is: ${otp}\nIt will expire in 5 minutes.`,
      html: `<p>Your verification code is: <strong>${otp}</strong></p><p>It will expire in 5 minutes.</p>`
    };

    await sgMail.send(msg);

    return res.status(200).json({ ok: true, token });
  } catch (err) {
    console.error('send-otp error', err.response?.body || err);
    return res.status(500).json({ error: 'Failed to send OTP', details: err.message });
  }
};
