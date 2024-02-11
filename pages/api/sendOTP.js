'use server';
import sendOTP from '../../utils/sendOTP';

function generateOTP() {
  const otp = Math.floor(100000 + Math.random() * 900000);
  return otp.toString();
}

export default async function handler(req, res) {
  const { to } = req.body;
  const otp = generateOTP();
  const subject = 'Verification OTP.';
  const text = `Your E-Mail verification OTP is: ${otp}`;

  try {
    await sendOTP(subject, text, to);
    res.status(200).json({ success: true, otp });
  } catch (error) {
    console.error('Error in sendOTP handler: ', error);
    res.status(500).json({ success: false, error: 'Error sending email' });
  }
}
