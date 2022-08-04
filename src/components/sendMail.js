const nodemailer = require("nodemailer");

async function sendMailTo() {
  let testEmailAccount = await nodemailer.createTestAccount();
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testEmailAccount.user,
      pass: testEmailAccount.pass
    }
  });
  let result = await transporter.sendMail({
    from: '"Node js" <nodejs@example.com>',
    to: "admin@migbelg.ru",
    subject: "Message from Node js",
    text: "This message was sent from Node js server.",
    html: "This <i>message</i> was sent from <strong>Node js</strong> server."
  });
  console.log("Message sent: %s", result.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(result));
}

sendMailTo().catch(console.error);

export default sendMailTo;
