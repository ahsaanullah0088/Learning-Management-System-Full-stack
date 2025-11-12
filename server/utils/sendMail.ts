require('dotenv').config();
import nodemailer,{Transporter}  from "nodemailer";
import ejs from 'ejs';
import path from "path"
interface EmailOptions{
    email:string,
    subject:string,
    template:string,
    data:{[key:string]:any}
}

const sendMail=async(options:EmailOptions):Promise<void>=>{
const Transporter:Transporter=nodemailer.createTransport({
    host:process.env.SMTP_HOST,
    port:parseInt(process.env.SMTP_PORT||"587"), // Default SMTP port is 587
    service:process.env.SMTP_SERVICE,
    auth:{
        user:process.env.SMTP_MAIL,
        pass:process.env.SMTP_PASSWORD,
    }
})

// Extract values from options
  const { email, subject, template, data } = options;

  // Create the full path to the EJS template file
  const templatePath = path.join(__dirname, '../mails', template);

  // Render the EJS template to HTML by injecting data into it
  const html: string = await ejs.renderFile(templatePath, data);

  // Setup the email content
  const mailOptions = {
    from: process.env.SMTP_MAIL, // sender email
    to: email,                   // Recipient
    subject,                     // Subject line
    html                         // The actual HTML email content
  };
  // Send the email using the transporter
  await Transporter.sendMail(mailOptions);
};
export default sendMail;