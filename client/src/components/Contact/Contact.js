import React, { Component } from 'react';
import axios from 'axios';

import './Contact.scss';

const initialErrorState = {
    contactFormErrors: {
        firstnameError: '',
        lastnameError: '',
        emailError: '',
        subjectError: '',
        messageError: ''
    },
    emailSent: 'false',
    emailSentMessage: ''
};

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
            emailSent: false,
            emailSentMessage: ''
        };
    }

    onInput = e => {
        const { contactForm } = { ...this.state };
        const currentState = contactForm;
        const { name, value } = e.target;
        currentState[name] = value;
        console.log(name, value);
        this.setState({ contactForm: currentState });
        // this.validate();

        if (name === 'firstname' && !this.state.firstname) {
            this.setState({
                contactFormErrors: {
                    ...this.state.contactFormErrors,
                    firstnameError: ''
                }
            });
        } else if (name === 'lastname' && !this.state.lastname) {
            this.setState({
                contactFormErrors: {
                    ...this.state.contactFormErrors,
                    lastnameError: ''
                }
            });
        } else if (name === 'email' && !this.state.email) {
            this.setState({
                contactFormErrors: {
                    ...this.state.contactFormErrors,
                    emailError: ''
                }
            });
        } else if (name === 'subject' && !this.state.subject) {
            this.setState({
                contactFormErrors: {
                    ...this.state.contactFormErrors,
                    subjectError: ''
                }
            });
        } else if (name === 'message' && !this.state.message) {
            this.setState({
                contactFormErrors: {
                    ...this.state.contactFormErrors,
                    messageError: ''
                }
            });
        }
    };

    sendEmail = e => {
        e.preventDefault();

        this.setState(initialErrorState);

        let isValid = this.validate();
        if (!isValid) {
            return false;
        }

        const contact = { ...this.state.contactForm };

        axios
            .post('/email', contact)
            .then(res => {
                if (res.data === 'success') {
                    this.resetContactForm();
                    this.setState({
                        emailSent: true,
                        emailSentMessage:
                            'Thank you for contacting me, you should receive a response within 3 working days.'
                    });
                } else {
                    this.setState({
                        emailSent: false,
                        emailSentMessage: 'An error occured, please try again.'
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
        let firstnameError = '';
        let lastnameError = '';
        let emailError = '';
        let subjectError = '';
        let messageError = '';

        if (this.state.contactForm.firstname === '') {
            firstnameError = 'Please enter a first name';
        }

        if (this.state.contactForm.lastname === '') {
            lastnameError = 'Please enter a last name';
        }

        if (this.state.contactForm.email === '') {
            emailError = 'Please enter a email address';
        }

        if (this.state.contactForm.subject === '') {
            subjectError = 'Please enter a subject';
        }

        if (this.state.contactForm.message === '') {
            messageError = 'Please enter a message';
        }

        this.setState({
            contactFormErrors: {
                firstnameError,
                lastnameError,
                emailError,
                subjectError,
                messageError
            }
        });
        if (
            firstnameError ||
            lastnameError ||
            emailError ||
            subjectError ||
            messageError
        ) {
            return false;
        }
        return true;
    };

    render() {
        return (
            <div className="contact-container">
                {((this.state.emailSent && this.state.emailSentMessage) ||
                    (!this.state.emailSent && this.state.emailSentMessage)) && (
                    <p className="email-sent-confirmation">
                        {this.state.emailSentMessage}
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

                            {this.state.contactFormErrors.firstnameError && (
                                <div className="form-errors">
                                    {
                                        this.state.contactFormErrors
                                            .firstnameError
                                    }
                                </div>
                            )}
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

                            {this.state.contactFormErrors.lastnameError && (
                                <div className="form-errors">
                                    {this.state.contactFormErrors.lastnameError}
                                </div>
                            )}
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

                        {this.state.contactFormErrors.emailError && (
                            <div className="form-errors">
                                {this.state.contactFormErrors.emailError}
                            </div>
                        )}
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

                        {this.state.contactFormErrors.subjectError && (
                            <div className="form-errors">
                                {this.state.contactFormErrors.subjectError}
                            </div>
                        )}
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

                        {this.state.contactFormErrors.messageError && (
                            <div className="form-errors">
                                {this.state.contactFormErrors.messageError}
                            </div>
                        )}
                    </div>
                    <button type="submit" className="sendBtn">
                        Send
                    </button>
                </form>
            </div>
        );
    }
}
