export interface IFormState {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
}

export interface contact {
    data: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        message: string;
    }
}

export interface IContactResponse {
    success: boolean;
    message: string;
}