const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const sendGrid = require('@sendGrid/mail');


const app = express();


app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


app.get('/backend', (req, res, next) => {
    res.send('200')
});

app.post('/backend/contact', (req, res, next) => {

    console.log(req.body);

    sendGrid.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: 'lajoiedevivre89@gmail.com',
        from: req.body.email,
        subject: 'Message',
        text: req.body.message
    }

    sendGrid.send(msg)
        .then(result => {

            res.status(200).json({
                success: true
               
            });

        })
        .catch(err => {

            console.log('error: ', err);
            res.status(401).json({
                success: false
            });

        });
});


app.listen(5000);