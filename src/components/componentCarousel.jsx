import React from "react";
import Image from "next/image";
import DOMPurify from 'isomorphic-dompurify';

const componentCarousel = ({ data, carouselClass, visualitation }) => {

    const image = data.image;
    const alt = data.alt;
    const title = data.title;
    const paragraph = data.paragraph;
    const width = data.width;
    const imageWidth = data.imageWidth;
    const imageHeight = data.imageHeight;

    return(
        <>
        <div className={`element ${visualitation} ${carouselClass}`}>
            <div className="image">
                <Image src={image} alt={alt} layout="fill"></Image>
            </div>
            <p className="title">{title}</p>
            <p className="paragraph" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(paragraph)}}></p>
        </div>

        <style jsx>{`

        .element {
            display: flex;
            flex-direction: column;
            align-items: center; 
            box-sizing: border-box;
            padding: 25px;
            width: ${width[0]};
        }

        .image {
            display: flex;
            justify-content: center;
            height: ${imageHeight};
            position: relative;
            width: ${imageWidth};
        }

        .title {
            font-size: 30px;
            font-weight: bold;
            margin: 28px 0px;
        }

        .paragraph {
            font-size: 16px;
            margin: 0px;
            text-align: center;
        }

        .desktop {
            display: none;
        }

        @media (min-width: 700px) {
            .element {
                width: ${width[1]};
            }
            .desktop {
                display:inline-flex;
            }
        } 

        `}</style>
        </>
    );
};

export default componentCarousel;