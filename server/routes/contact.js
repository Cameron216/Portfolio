const express = require('express');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

const router = express.Router();

router.post('/email', (req, res, next) => {
    sendEmail(req)
        .then(r => {
            if (r) {
                res.send('success');
            } else {
                res.send('error');
            }
        })
        .catch(err => {
            console.log(err);
            res.send('error');
        });
});

const sendEmail = (req, res) => {
    return new Promise((resolve, reject) => {
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
                html: `<p>Name: ${req.body.firstname} ${req.body.lastname}</>
                        <p>Email address: ${req.body.email}</p>
                        <p>Message: ${req.body.message}</p>`
            },
            (err, info) => {
                if (err) {
                    console.log(err);
                    resolve(false);
                } else {
                    resolve(true);
                }
            }
        );
    });
};

module.exports = router;