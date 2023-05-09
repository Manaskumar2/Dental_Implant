const nodemailer = require('nodemailer');
const validation = require("../validation/validation");

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'manaskumarjena700@gmail.com',
    pass: 'pwupauplkptlgmvx'
  }
});


const createAppointement = async (req, res) => {
  try {
    const data = req.body;
      const { email, phone, name, comment } = data;


    if (!email) return res.status(400).send({ status: false, message: "please enter your email" });
    if (!validation.isValidEmail(email)) return res.status(400).send({ status: false, message: "enter valid email" });
    if (!phone) return res.status(400).send({ status: false, message: "please enter your phone number" });
    if (!validation.isValidPhone(phone)) return res.status(400).send({ status: false, message: "please enter valid phone number" });
    if (!name) return res.status(400).send({ status: false, message: "please enter your name" });
    if (!validation.isValidName(name)) return res.status(400).send({ status: false, message: "please enter valid name" });
    

    const userMailOptions = {
      from: 'manaskumarjena',
      to: data.email,
      subject: 'Appointment Confirmation',
      html: `
        <p>Hi ${data.name},</p>
        <p>Thank you for scheduling an appointment with us.</p>
        <p>Your appointment details are as follows:</p>
        <ul>
          <li>Name: ${data.name}</li>
          <li>Email: ${data.email}</li>
          <li>Phone: ${data.phone}</li>
          <li>Phone: ${data.comment}</li>
        </ul>
        <p>We look forward to seeing you soon.</p>
      `
    };

    await transporter.sendMail(userMailOptions);

    // send email notification with appointment details to admin
    const adminMailOptions = {
      from: 'manas kumar jena',
      to: 'manaskumarjena700@gmail.com',
      subject: 'New Appointment Created',
      html: `
        <p>A new appointment has been created:</p>
        <ul>
          <li>Name: ${data.name}</li>
          <li>Email: ${data.email}</li>
          <li>Phone: ${data.phone}</li>
        </ul>
      `
    };

    await transporter.sendMail(adminMailOptions);

    res.status(200).send({ status: true, message: "Appointment created successfully." });
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal server error');
  }
};

module.exports = { createAppointement };
