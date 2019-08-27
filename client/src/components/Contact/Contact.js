import React, { Component } from 'react';
import axios from 'axios';

import './Contact.scss';

export default class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            subject: '',
            message: '',
        };
    }

    onInput = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    sendEmail = e => {
        e.preventDefault();
        console.log('hello');

        const contact = { ...this.state };
        console.log(contact);

        axios
            .post('/email', contact)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    };

    render() {
        return (
            <div className="contact-container">
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
                                value={this.state.firstname}
                                onChange={this.onInput}
                            />
                            <label
                                htmlFor="firstname"
                                className={
                                    this.state.firstname !== '' ? 'active' : ''
                                }
                            >
                                Firstname
                            </label>
                        </div>
                        <div className="contact-inputs col-6">
                            <input
                                type="text"
                                id="lastname"
                                name="lastname"
                                value={this.state.lastname}
                                onChange={this.onInput}
                            />
                            <label
                                htmlFor="lastname"
                                className={
                                    this.state.lastname !== '' ? 'active' : ''
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
                            value={this.state.email}
                            onChange={this.onInput}
                        />
                        <label
                            htmlFor="email"
                            className={this.state.email !== '' ? 'active' : ''}
                        >
                            Email
                        </label>
                    </div>
                    <div className="contact-inputs col-12">
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={this.state.subject}
                            onChange={this.onInput}
                        />
                        <label
                            htmlFor="subject"
                            className={
                                this.state.subject !== '' ? 'active' : ''
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
                            value={this.state.message}
                            onChange={this.onInput}
                        />
                        <label
                            htmlFor="message"
                            className={
                                this.state.message !== '' ? 'active' : ''
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
