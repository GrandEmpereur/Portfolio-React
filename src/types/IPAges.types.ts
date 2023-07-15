export type ImageData = {
    width: number;
    height: number;
    alt: string;
    url: string;
    name: string;
}

export type ContentItem = {
    id: number;
    Description?: string;
    Title?: string;
    Subtitle?: string;
    __component?: string;
    Image?: ImageData[];
    ImageMobile?: ImageData[];
}

export type SimplifiedPage = {
    id: number;
    Content: ContentItem[];
    Name: string;
    Slug: string;
}

export type PagesResponse = {
    status: 'success' | 'error';
    page?: SimplifiedPage; 
}


export type PageContent = {
    Name: string;
    Content: {
        Title: string;
        Subtitle: string;
        Description: string;
    }[];
};