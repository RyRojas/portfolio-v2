// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.SENDER_ADDRESS,
      pass: process.env.SENDER_PASSWORD,
    },
    secure: true,
  });

  //Set
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

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, (err, info) =>
      err ? reject(err) : resolve(info)
    );
  });

  res.status(200).send('Success');
}
