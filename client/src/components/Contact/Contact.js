import React, { Component } from 'react';
import axios from 'axios';

import './Contact.scss';

export default class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contactForm: {
                firstname: '',
                lastname: '',
                email: '',
                subject: '',
                message: ''
            },
            contactFormErrors: {
                firstnameError: '',
                lastnameError: '',
                emailError: '',
                subjectError: '',
                messageError: ''
            },
            emailSent: false
        };
    }

    onInput = e => {
        const { contactForm } = { ...this.state };
        const currentState = contactForm;
        const { name, value } = e.target;
        currentState[name] = value;

        this.setState({ contactForm: currentState });
    };

    sendEmail = e => {
        e.preventDefault();

        let isValid = this.validate();
        if (!isValid) {
            return false;
        }

        const contact = { ...this.state.contactForm };

        axios
            .post('/email', contact)
            .then(res => {
                if (res.data) {
                    this.resetContactForm();
                    this.setState({
                        emailSent: true
                    });
                }
            })
            .catch(err => {
                console.log(err);
            });
    };

    resetContactForm = () => {
        this.setState({
            contactForm: {
                firstname: '',
                lastname: '',
                email: '',
                subject: '',
                message: ''
            }
        });
    };

    validate = () => {
        if (this.state.contactForm.firstname === '') {
            this.setState({
                contactFormErrors: {
                    firstnameError: 'Please enter a first name'
                }
            });
            return false;
        }
    };

    render() {
        return (
            <div className="contact-container">
                {this.state.emailSent && (
                    <p className="email-sent-confirmation">
                        Thank you for contacting me, you should receive a
                        response within 3 working days.
                    </p>
                )}

                <h1>Get in touch...</h1>
                <p>
                    Please use the form below if you would like to get in touch
                    to discuss more about my skills and work.
                </p>

                <form className="contact-form" onSubmit={this.sendEmail}>
                    <div className="nameInput-container">
                        <div
                            style={{ marginRight: '10px' }}
                            className="contact-inputs col-6"
                        >
                            <input
                                type="text"
                                id="firstname"
                                name="firstname"
                                value={this.state.contactForm.firstname}
                                onChange={this.onInput}
                            />
                            <label
                                htmlFor="firstname"
                                className={
                                    this.state.contactForm.firstname !== ''
                                        ? 'active'
                                        : ''
                                }
                            >
                                Firstname
                            </label>
                            <div className="form-errors">
                                {this.state.contactFormErrors.firstnameError}
                            </div>
                        </div>
                        <div className="contact-inputs col-6">
                            <input
                                type="text"
                                id="lastname"
                                name="lastname"
                                value={this.state.contactForm.lastname}
                                onChange={this.onInput}
                            />
                            <label
                                htmlFor="lastname"
                                className={
                                    this.state.contactForm.lastname !== ''
                                        ? 'active'
                                        : ''
                                }
                            >
                                Lastname
                            </label>
                        </div>
                    </div>
                    <div className="contact-inputs col-12">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={this.state.contactForm.email}
                            onChange={this.onInput}
                        />
                        <label
                            htmlFor="email"
                            className={
                                this.state.contactForm.email !== ''
                                    ? 'active'
                                    : ''
                            }
                        >
                            Email
                        </label>
                    </div>
                    <div className="contact-inputs col-12">
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={this.state.contactForm.subject}
                            onChange={this.onInput}
                        />
                        <label
                            htmlFor="subject"
                            className={
                                this.state.contactForm.subject !== ''
                                    ? 'active'
                                    : ''
                            }
                        >
                            Subject
                        </label>
                    </div>
                    <div className="contact-inputs col-12">
                        <textarea
                            type="text"
                            id="message"
                            name="message"
                            value={this.state.contactForm.message}
                            onChange={this.onInput}
                        />
                        <label
                            htmlFor="message"
                            className={
                                this.state.contactForm.message !== ''
                                    ? 'active'
                                    : ''
                            }
                        >
                            Message:
                        </label>
                    </div>
                    <button type="submit" className="sendBtn">
                        Send
                    </button>
                </form>
            </div>
        );
    }
}
