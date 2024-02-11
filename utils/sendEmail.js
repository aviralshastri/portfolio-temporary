import nodemailer from 'nodemailer';

async function sendEmail(subject, text) {
  

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MailID,
      pass: process.env.MailPassword,
    },
  });

  const mailOptions = {
    from: process.env.MailID,
    to: process.env.MailReciver,
    subject,
    text,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (error) {
    console.error('Error sending email: ', error);
    throw error;
  }
}

export default sendEmail;
