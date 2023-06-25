import React, { useState, ChangeEvent, FormEvent } from "react";
import "../scss/sections/Contact.scss";
import { sendContact, updateAxiosInstance } from "../services/axios";

interface IFormState {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
}

interface IResult {
    success: boolean;
    message: string;
}

const Contact: React.FC = () => {
    const [state, setState] = useState<IFormState>({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    const [result, setResult] = useState<IResult | null>(null);

    const sendEmail = async (event: FormEvent) => {
        event.preventDefault();
        updateAxiosInstance()

        try {
            const data = {
                data: {
                    firstName: state.firstName,
                    lastName: state.lastName,
                    email: state.email,
                    phone: state.phone,
                    message: state.message,
                }
            };

            const response = await sendContact(data);

            if (response && response.status === 200) {
                setResult({
                    success: true,
                    message: "Thank you for your message. I'll get back to you as soon as possible.",
                });
            } else {
                setResult({
                    success: false,
                    message: "Something went wrong. Please try again later.",
                });
            }

            setState({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                message: "",
            });

        } catch (error) {
            setResult({
                success: false,
                message: "Something went wrong. Please try again later.",
            });
        }
    };

    const onInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;

        setState({
            ...state,
            [name]: value,
        });
    };

    return (
        <div className="contact react-component page-width-large u-flex flex-column u-center v-gap-xl">
            <h1>Contact</h1>
            <form onSubmit={sendEmail} className="u-flex flex-column v-gap-l u-center align-items-center">
                <div className="fields-container u-flex flex-column justify-content-center u-marg-b-xl u-half-width">
                    <div className="field">
                        <input
                            className="field__input"
                            type="text"
                            name="firstName"
                            autoComplete="firstName"
                            autoCorrect="off"
                            autoCapitalize="off"
                            value={state.firstName}
                            onChange={onInputChange}
                        />
                        <label
                            htmlFor="firstName"
                            className="field__label"
                        >First Name</label>
                    </div>

                    <div className="field">
                        <input
                            className="field__input"
                            type="text"
                            name="lastName"
                            autoComplete="lastName"
                            autoCorrect="off"
                            value={state.lastName}
                            onChange={onInputChange}
                        />
                        <label
                            htmlFor="lastName"
                            className="field__label"
                        >Last Name</label>
                    </div>

                    <div className="field">
                        <input
                            className="field__input"
                            type="email"
                            name="email"
                            value={state.email}
                            onChange={onInputChange}
                        />
                        <label
                            htmlFor="email"
                            className="field__label"
                        >Email</label>
                    </div>

                    <div className="field">
                        <input
                            className="field__input"
                            type="tel"
                            name="phone"
                            value={state.phone}
                            onChange={onInputChange}
                        />
                        <label
                            htmlFor="phone"
                            className="field__label"
                        >Phone</label>
                    </div>

                    <div className="field">
                        <textarea
                            className="text-area text-area--resize-vertical field__input"
                            name="message"
                            value={state.message}
                            onChange={onInputChange}
                        />
                        <label
                            htmlFor="message"
                            className="field__label"
                        >Message</label>
                    </div>

                </div>


                <button
                    type="submit"
                    className="button button--primary "
                >Send</button>

            </form>
            {result && (
                <p className={`${result.success ? "success" : "error"}`}>
                    {result.message}
                </p>
            )}
        </div>
    );
};

export default Contact;