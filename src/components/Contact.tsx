import React, { useState, ChangeEvent, FormEvent } from "react";
import { toast } from 'react-toastify';
import "../scss/sections/Contact.scss";
import { sendContact, updateAxiosInstance } from "../services/axios";
import { IFormState } from "../types/Contact.type.ts";
import * as yup from 'yup';

const Contact: React.FC = () => {
    const [state, setState] = useState<IFormState>({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    const [errors, setErrors] = useState<IFormState>({ firstName: "", lastName: "", email: "", phone: "", message: "" });

    const sendEmail = async (event: FormEvent) => {
        event.preventDefault();
        updateAxiosInstance();

        const errorFields = await validateFields();

        if(Object.values(errorFields).some(field => field !== "")){
            setErrors(errorFields);
            toast.error("Please correct the errors before submitting.");
            return;
        }

        try {
            const data = {
                data: state
            };

            const response = await sendContact(data);

            if (response && response.status === 200) {
                toast.success("Thank you for your message. I'll get back to you as soon as possible.");
                setState({ firstName: "", lastName: "", email: "", phone: "", message: "" });
                setErrors({ firstName: "", lastName: "", email: "", phone: "", message: "" });
            } else {
                toast.error("Something went wrong. Please try again later.");
            }

        } catch (error) {
            toast.error("Something went wrong. Please try again later.");
        }
    };

    const onInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;

        setState({
            ...state,
            [name]: value,
        });

        setErrors({
            ...errors,
            [name]: "",
        });
    };

    const validateFields = async (): Promise<IFormState> => {
        const schema = yup.object().shape({
            firstName: yup.string().required("First Name is required"),
            lastName: yup.string().required("Last Name is required"),
            email: yup.string().required("Email is required").email("Email is not valid"),
            phone: yup.string().required("Phone is required"),
            message: yup.string().required("Message is required")
        });

        try {
            await schema.validate(state, { abortEarly: false });
            return { firstName: "", lastName: "", email: "", phone: "", message: "" };
        } catch (error) {
            const validationErrors: IFormState = { firstName: "", lastName: "", email: "", phone: "", message: "" };
            (error as yup.ValidationError).inner.forEach((fieldError: yup.ValidationError) => {
                validationErrors[fieldError.path as keyof IFormState] = fieldError.message;
            });
            return validationErrors;
        }
    };

    return (
        <div className="contact page-width-large u-flex flex-column u-center v-gap-xl">
            <h1>Contactez-moi</h1>
            <form onSubmit={sendEmail} className="u-flex flex-column u-center align-items-center">
                <div className="fields-container u-flex flex-column justify-content-center u-marg-b-xl u-half-width">
                    <div className="field u-flex flex-column v-gap-s align-items-start">
                        <input
                            className={`field__input ${errors.firstName && "field__input--error"}`}
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={state.firstName}
                            onChange={onInputChange}
                        />
                        <label
                            htmlFor="firstName"
                            className="field__label"
                        >First Name</label>
                        {errors.firstName && <p className="u-error">{errors.firstName}</p>}
                    </div>

                    <div className="field u-flex flex-column v-gap-s align-items-start">
                        <input
                            className={`field__input ${errors.lastName && "field__input--error"}`}
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={state.lastName}
                            onChange={onInputChange}
                        />
                        <label
                            htmlFor="lastName"
                            className="field__label"
                        >Last Name</label>
                        {errors.lastName && <p className="u-error">{errors.lastName}</p>}
                    </div>

                    <div className="field u-flex flex-column v-gap-s align-items-start">
                        <input
                            className={`field__input ${errors.email && "field__input--error"}`}
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={state.email}
                            onChange={onInputChange}
                        />
                        <label
                            htmlFor="email"
                            className="field__label"
                        >Email</label>
                        {errors.email && <p className="u-error">{errors.email}</p>}
                    </div>

                    <div className="field u-flex flex-column v-gap-s align-items-start">
                        <input
                            className={`field__input ${errors.phone && "field__input--error"}`}
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            value={state.phone}
                            onChange={onInputChange}
                        />
                        <label
                            htmlFor="phone"
                            className="field__label"
                        >Phone</label>
                        {errors.phone && <p className="u-error">{errors.phone}</p>}
                    </div>

                    <div className="field u-flex flex-column v-gap-s align-items-start">
                        <textarea
                            className={`field__input ${errors.message && "field__input--error"}`}
                            name="message"
                            placeholder="Message"
                            value={state.message}
                            onChange={onInputChange}
                        />
                        <label
                            htmlFor="message"
                            className="field__label"
                        >Message</label>
                        {errors.message && <p className="u-error">{errors.message}</p>}
                    </div>

                </div>


                <button
                    type="submit"
                    className="button button--primary "
                >Send</button>

            </form>
        </div>
    );
};

export default Contact;