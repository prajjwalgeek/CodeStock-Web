const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');
const User = require("../models/User");


const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.register = (req, res) => {

    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.status(400).json({ email: "Email already exists" });
        } else {
            const newUser = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => {
                            // const msg = {
                            //     to: user.email,
                            //     from: process.env.emailFrom,
                            //     subject: 'Sending with Twilio SendGrid is Fun',
                            //     text: 'and easy to do anywhere, even with Node.js',
                            //     html: '<strong>and easy to do anywhere, even with Node.js</strong>',
                            // };
                            // sgMail.send(msg).then(() => {
                            //     console.log('Message sent')
                            // }).catch((error) => {
                            //     console.log(error.response.body)
                            // })
                            res.json(user);
                        })
                        .catch(err => console.log(err))
                });
            });
        }
    });
}



exports.login = (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email })
        .then(user => {
            if (!user) {
                return res.json({ email: "Email not found" });
            }

            bcrypt.compare(password, user.password).then(isMatch => {
                if (isMatch) {
                    const payload = {
                        id: user.id,
                        firstName: user.firstName
                    };

                    jwt.sign(
                        payload,
                        process.env.secretOrKey,
                        {
                            expiresIn: 31556926
                        },
                        (err, token) => {
                            res.json({
                                success: true,
                                token: "Bearer " + token
                            });
                        }
                    );
                } else {
                    return res.json({
                        password: "Password incorrect"
                    });
                }
            });
        });
}
