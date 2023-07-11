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
        baseURL: 'https://murmuring-badlands-71376-95b0b2f10147.herokuapp.com',
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
    if (!instance) {
        throw new Error('Axios instance not initialized');
    }
    
    try {
        const sendData = await instance.post<IContactResponse>('/api/contacts', data);
        return sendData;
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

export async function getImagesByName(name: string): Promise<string | undefined> {
    if (!instance) {
        throw new Error('Axios instance not initialized');
    }
    
    try {
        const response = await instance.get(`/api/upload/files?filters[name][$eq]=${name}`);
        console.log(response);
        if (response.status === 200 && response.data.length > 0) {
            const imageUrl = response.data[0].url;
            const fullImageUrl = instance.defaults.baseURL + imageUrl;
            return fullImageUrl;
        }
        console.log('Image not found');
        return undefined;
    } catch (error) {
        console.log(error);
        return undefined;
    }
}

