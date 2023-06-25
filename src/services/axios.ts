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
        throw new Error('Missing Strapi API key');
    }

    instance = axios.create({
        baseURL: 'https://murmuring-badlands-71376-95b0b2f10147.herokuapp.com/api/',
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

export interface IContactResponse {
    success: boolean;
    message: string;
}

export async function sendContact(data: contact): Promise<AxiosResponse<IContactResponse> | undefined> {
    try {
        const sendData = await instance?.post<IContactResponse>('contacts', data);
        return sendData;
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

export async function getImages() {
    try {
        const images = await instance?.get('tests?populate=deep');
        return images;
    } catch (error) {
        return error;
    }
}