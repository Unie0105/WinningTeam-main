import nodemailer from 'nodemailer';

export const contactus = async (req, res) => {
  // Destructure form data from the request body
  const { name, email, message } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  
  const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_HOST,  // Use your Mailtrap or SMTP server details
    port: process.env.MAILTRAP_PORT,
    auth: {
      user: process.env.MAILTRAP_USER,
      pass: process.env.MAILTRAP_PASS,
    },
  });

  // Prepare email options
  const mailOptions = {
    from: `"${name}" <${email}>`, // Sender address
    to: 'winningTeam@gmail.com', // Receiver email address
    subject: 'New Contact Us Message', // Subject of the email
    text: `You have received a new message from ${name} (${email}):\n\n${message}`, // Message content
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.messageId);

    return res.status(200).json({ success: 'Your message has been sent successfully' });
  } catch (error) {
    console.error('Error sending email: ', error);

    
    return res.status(500).json({ error: 'There was a problem sending your message. Please try again later.' });
  }
};
