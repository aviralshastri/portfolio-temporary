import nodemailer from 'nodemailer';

async function sendOTP(subject, text, to) {
  var toPerson="";
  if (to === "none"){
    toPerson==process.env.MailReceiver
  }
  else{
    toPerson==to;
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MailID,
      pass: process.env.MailPassword,
    },
  });

  const mailOptions = {
    from: process.env.MailID,
    to: to,
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

export default sendOTP;
