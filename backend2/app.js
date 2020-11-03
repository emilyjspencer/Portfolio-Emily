const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");
const dotenv = require('dotenv').config();
const nodemailMailgun = require('nodemailer-mailgun-transport');


   const auth = {
      auth: {
       api_key: process.env.MAILGUN_API_KEY,
       domain: process.env.MAILGUN_DOMAIN
    }
};




let transporter = nodemailer.createTransport(nodemailMailgun(auth));

  const app = express();

  app.use(bodyParser.json());

  app.use(cors());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.get('/', (req, res, next) => {
  res.send('200 Success')
})



app.post('/new', (req, res, next) => {
  const name = req.body.name
  const email = req.body.email
  const message = req.body.message




  
  const mail = {
    from: email,
    to: 'lajoiedevivre89@gmail.com',
    subject: 'Message for Emily',
    html: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
  }



  transporter.sendMail(mail, (err, data) => {
    if(err){
      console.log(err)
      res.json({
        msg: "Unable to deliver"
      })
    } else {
      res.json({
        msg: "Message successfully sent"
      })
    }
    transporter.close();
  })
})






app.listen(process.env.PORT || 5000, '0.0.0.0')