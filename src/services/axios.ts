import axios, { AxiosInstance, AxiosResponse } from 'axios';

/**
 * Une instance d'Axios pour faire des requêtes à l'API.
 */
let instance: AxiosInstance | null = null;

/**
 * Met à jour l'instance d'Axios avec les bonnes valeurs de base URL et d'entêtes.
 */
export function updateAxiosInstance() {
    const key = import.meta.env.VITE_API_KEY_STRAPI ?? '';

    if (!key ) {
        throw new Error('Missing JSONBIN_KEY or JSONBIN_BIN_ID in .env file');
    }

    instance = axios.create({
        baseURL: 'http://localhost:1337/api/',
        headers: {
            'Authorization': 'Bearer ' + key
        }
    });
}

interface contact {
    data: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        message: string;
    }
}

export async function sendContact(data: contact) {
    try {
        const sendData = await instance?.post('contacts', data);
        return sendData;
    } catch (error) {
        return error;
    }
}