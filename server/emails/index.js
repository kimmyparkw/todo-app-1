const sgMail = require('@sendgrid/mail'),
  SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  const exampleHTMLEmail = `
<h1 style="color: blue;">Welcome to my task manager ${name}!</h1>
`;
  sgMail.send({
    to: email,
    from: `${process.env.FROM_EMAIL}`,
    subject: 'Thanks for signing up.',
    // text: `Hi ${name}! Welcome to your task manager api.`,
    html: exampleHTMLEmail,
  });
};

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: `${process.env.FROM_EMAIL}`,
    subject: 'Sorry to see you go.',
    text: `Bye ${name}. Hope to see you soon.`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
};
