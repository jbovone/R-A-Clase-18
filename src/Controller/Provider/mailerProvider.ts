'use strict';
import nodemailer from 'nodemailer';

/**
 * recipient: bar@example.com, baz@example.com'\
 * subject: @example get your mail verified!\
 * contents: copy de code verification
 */
interface mailer {
  recipient: string;
  subject: string;
  contents: string;
}

async function mailerNotifier(props: mailer) {
  // Generate test SMTP service account from ethereal.email
  const testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  const info = await transporter.sendMail({
    from: process.env.MAILER,
    to: props.recipient,
    subject: props.subject,
    text: props.contents, // plain text body
    //html: '<b>Hello world?</b>', // html body
  });

  console.log('Message sent: %s', info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  // Preview only available when sending through an Ethereal account
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

export default mailerNotifier;
