/**
 * @typedef contact
 * @property {object} data - Contact data
 * @property {string} data.firstName - First name
 * @property {string} data.lastName - Last name
 * @property {string} data.email - Email
 * @property {string} data.phone - Phone number
 * @property {string} data.message - Message
 */
export interface contact {
    data: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        message: string;
    }
}

/**
 * @typedef IContactResponse
 * @property {boolean} success - Indicates if the contact information was sent successfully
 * @property {string} message - Response message
 */
export interface IContactResponse {
    success: boolean;
    message: string;
}



