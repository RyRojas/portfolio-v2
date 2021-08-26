// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from 'nodemailer';

export default function handler(req, res) {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.SENDER_ADDRESS,
      pass: process.env.SENDER_PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: process.env.SENDER_ADDRESS,
    to: process.env.RECIPIENT_ADDRESS,
    subject: 'Portfolio Inquiry',
    text: `${req.body.message} | Sent by ${req.body.name} from: ${req.body.email}`,
    html: `
      <div>
        <p>
          Hello, I'm ${req.body.name}
        </p>
        <p>${req.body.message}</p>
        <p>Reach me at ${req.body.email}</p>
      </div>`,
  };

  transporter.sendMail(mailData, (err, info) => {
    err ? console.error(err) : console.log(info);
  });

  res.status(200).send('Success');
}
