interface Logo {
    alternativeText: string | null;
    height: number;
    url: string;
    width: number;
}

export interface MenuItem {
    id: number;
    __component: string;
    Label: string;
    Slug: string;
    Icon: string | null;
}

export interface NavigationResponse {
    status: string;
    nav: MenuItem[];
    logo: Logo;
}
