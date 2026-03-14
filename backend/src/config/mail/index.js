const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "alikldofficial@gmail.com", // Your Gmail address
    pass: "nvsq bpwv dyxc wjxi", // Your Gmail password or App password
  },
});

(module.exports = transporter),
  {
    /*let transporter = nodemailer.createTransport({
  host: 'smtp.your-email-provider.com',  // SMTP server address (e.g., smtp.mailtrap.io)
  port: 587,                              // Port (587 for TLS, 465 for SSL)
  secure: false,                          // Set to true if using port 465
  auth: {
    user: 'your-username',               // SMTP username
    pass: 'your-password',               // SMTP password
  },
});
*/
  };
