import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { IContactResponse, contact } from '../types/Contact.type.ts';
import { NavigationResponse } from '../types/INav.types.ts';
import { ContentItem, PagesResponse, SimplifiedPage } from '../types/IPAges.types.ts';

/**
 * Une instance d'Axios pour faire des requêtes à l'API.
 */
let instance: AxiosInstance | null = null;

/**
 * Met à jour l'instance d'Axios avec les bonnes valeurs de base URL et d'entêtes.
 */
export function updateAxiosInstance() {
    const key = import.meta.env.VITE_API_KEY_STRAPI ?? '';
    const dev_key = import.meta.env.VITE_API_KEY_STRAPI_DEV ?? '';

    if (!key ) {
        throw new Error('Missing Strapi API key');
    }

    instance = axios.create({
        baseURL: 'http://localhost:1337',
        //baseURL: 'https://murmuring-badlands-71376-95b0b2f10147.herokuapp.com',
        headers: {
            'Authorization': 'Bearer ' + dev_key
        }
    });
}


export async function getNavigation(): Promise<NavigationResponse | undefined> {
    if (!instance) {
        throw new Error('Axios instance not initialized');
    }

    try {
        const response = await instance.get('/api/navigation?populate=deep');

        if (response.status === 200) {
            const nav = response.data.data.attributes.Navbar;
            const logo = response.data.data.attributes.Logo.data.attributes;
            return {
                status: "success",
                nav,
                logo : {
                    url: instance.defaults.baseURL + logo.url,
                    alternativeText: logo.alternativeText,
                    width: logo.width,
                    height: logo.height
                }
            }
        }
        return {
            status: "error",
            nav: [],
            logo: {
                url: '',
                alternativeText: '',
                width: 0,
                height: 0
            }
        }
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

export async function getPageByName(name: string): Promise<PagesResponse | undefined> {
    if (!instance) {
        throw new Error('Axios instance not initialized');
    }

    try {
        const response = await instance.get(`/api/pages?filters[Name][$eq]=${name}&populate=deep`);

        if (response.status === 200) {
            const pageData = response.data.data[0];
            const contentItems: ContentItem[] = pageData.attributes.Content.map((contentItem: any) => {
                const transformedContentItem: ContentItem = {
                    id: contentItem.id,
                    __component: contentItem.__component,
                    Description: contentItem.Description,
                    Title: contentItem.Title,
                    Subtitle: contentItem.Subtitle,
                }

                if (contentItem.Image) {
                    transformedContentItem.Image = contentItem.Image.data.map((image: any) => ({
                        width: image.attributes.width,
                        height: image.attributes.height,
                        alt: image.attributes.alternativeText,
                        url: instance?.defaults.baseURL + image.attributes.url,
                        name: image.attributes.name,
                    }));
                }

                if (contentItem.ImageMobile) {
                    transformedContentItem.ImageMobile = contentItem.ImageMobile.data.map((image: any) => ({
                        width: image.attributes.width,
                        height: image.attributes.height,
                        alt: image.attributes.alternativeText,
                        url: instance?.defaults.baseURL + image.attributes.url,
                        name: image.attributes.name,
                    }));
                }

                return transformedContentItem;
            });

            const simplifiedPage: SimplifiedPage = {
                id: pageData.id,
                Content: contentItems,
                Name: pageData.attributes.Name,
                Slug: pageData.attributes.Slug
            }

            return {
                status: 'success',
                page: simplifiedPage
            }
        }

        return {
            status: "error",
        }
    } catch (error) {
        console.error(error);
        return undefined;
    }
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
        const response = await instance.get(`/api/upload/files?filters[name][$contains]=${name}`);
        if (response.status === 200 && response.data.length > 0) {
            for (const image of response.data) {
                if (image.name.includes(name) ){
                    const imageUrl = image.url;
                    const fullImageUrl = instance.defaults.baseURL + imageUrl;
                    return fullImageUrl;
                }
            }
        }
        return undefined;
    } catch (error) {
        console.log(error);
        return undefined;
    }
}

