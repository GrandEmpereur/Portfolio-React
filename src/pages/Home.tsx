import React, { useEffect, useState } from "react"; // import useState et useEffect
import "../scss/templates/Home.scss";
import Icon from "../common/Icon";
import PictureImg from "../components/PictureImg";
import { Link } from "react-router-dom";
import { getPageByName, updateAxiosInstance } from "../services/axios.ts";
import { PageContent, PagesResponse } from "../types/IPAges.types.ts";

const Home: React.FC = () => {
    const [pageContent, setPageContent] = useState<PageContent | null>(null);

    const [image, setImage] = useState({
        src: '',
        alt: 'Image de présentation',
        width: 420,
        height: 430,
    });
    const [imageMobile, setImageMobile] = useState({
        src: '',
        alt: 'Image de présentation',
        width: 210,
        height: 215,
    });

    useEffect(() => {
        // Mise à jour de l'instance Axios
        updateAxiosInstance();

        const fetchPages = async () => {
            const home: any | undefined = await getPageByName("Home");

            console.log('home', home);
            
            if (home?.status === 'success' && home?.page) {
                setPageContent(home.page);

                const firstContentItem = home.page.Content[0];

                if (firstContentItem.__component === 'blocks.image-text') {
                    if (firstContentItem.Image && firstContentItem.Image.length > 0) {
                        setImage({
                            src: firstContentItem.Image[0].url,
                            alt: firstContentItem.Image[0].alt,
                            width: firstContentItem.Image[0].width,
                            height: firstContentItem.Image[0].height,
                        });
                    }

                    if (firstContentItem.ImageMobile && firstContentItem.ImageMobile.length > 0) {
                        setImageMobile({
                            src: firstContentItem.ImageMobile[0].url,
                            alt: firstContentItem.ImageMobile[0].alt,
                            width: firstContentItem.ImageMobile[0].width,
                            height: firstContentItem.ImageMobile[0].height,
                        });
                    }
                }
            }
        };
        
        fetchPages();
    }, []);

    console.log('pageContent', pageContent);

    return (
        <div className="Home page-width-large page-width-mobile u-flex align-items-center justify-content-around u-full-width">
            <div className="Home__content u-flex flex-column v-gap-l">
                <span className="Home__preTitle h4 u-gold">{pageContent?.Content[0]?.Title}</span>

                <span className="Home__title h2">
                    {pageContent?.Content[0]?.Subtitle || ''}
                </span>

                <p className="Home__subtitle u-gray">
                    {pageContent?.Content[0]?.Description || ''}
                </p>

                <div className="Home__button u-flex h-gap-2xl u-pad-t-m">
                    {/* <Link to="/services" className="button button--primary button-rounded">Mes projets</Link> */}
                    <Link to="/contact" className="button button--primary button-rounded">Contactez Moi</Link>
                </div>
                <div className="Home__icons u-flex h-gap-l">
                    <a href="https://github.com/GrandEmpereur" className="u-white" target="_black">
                        <Icon symbolId="icon-github" className="custom-icon" stroke="transparent" />
                    </a>
                    <a href="https://www.linkedin.com/in/patrick-bartosik/" className="u-white" target="_black">
                        <Icon symbolId="icon-linkedin" className="custom-icon" stroke="transparent" />
                    </a>
                </div>
            </div>
            <div className="Home__image">
                <PictureImg
                    img={image}
                    imgMobile={imageMobile || image}
                    img_classes="u-rounded-border"
                    lazy={false}
                />
            </div>
        </div>
    );
};

export default Home;

