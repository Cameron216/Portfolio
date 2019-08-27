const express = require('express');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const dotenv = require('dotenv').config();
const emailHelper = require('../utils/emailHelper');

// dotenv.config();
const router = express.Router();

router.post('/email', (req, res, next) => {
    console.log(req.body);

    const transporter = nodemailer.createTransport(
        sendgridTransport({
            auth: {
                api_key: process.env.EMAIL_API_KEY
            }
        })
    );
    transporter.sendMail({
        to: process.env.EMAIL_RECIPIENT,
        from: 'portfoilo@dev.com',
        subject: req.body.subject,
        html: '<h1>successfully signed up</h1>'
    });
    // .catch(err => {
    //     console.log(err);
    //     return res.send(err);
    // });

    res.send('success');
});

module.exports = router;
