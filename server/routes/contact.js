const express = require('express');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

const emailHelper = require('../utils/emailHelper');

const router = express.Router();

router.post('/email', (req, res, next) => {
    console.log(req.body);

    const transporter = nodemailer.createTransport(
        sendgridTransport({
            auth: {
                api_key: emailHelper.emailApiKey
            }
        })
    );

    transporter
        .sendMail({
            to: emailHelper.emailrecipient,
            from: 'portfoilo@dev.com',
            subject: req.body.subject,
            html: '<h1>successfully signed up</h1>'
        })
        .catch(err => {
            console.log(err);
            return res.send(err);
        });

    res.send('success');
});

module.exports = router;
