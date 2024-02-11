'use server'
import sendEmail from '../../utils/sendEmail';

export default async function handler(req, res) {
  const { subject, text } = req.body;

  try {
    await sendEmail(subject, text);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email: ', error);
    res.status(500).json({ success: false, error: 'Error sending email' });
  }
}
