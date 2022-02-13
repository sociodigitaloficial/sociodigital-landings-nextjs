import React from "react";
import DOMPurify from 'isomorphic-dompurify';

const componentCarousel = ({ data }) => {

    const id = data.id;
    const text = data.text;
    const color = data.color;
    const margin = data.margin;
    const size = data.size;
    const textAlign = data.textAlign;
    const weight = data.weight;

    return(
        <>
        <p id={id} dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(text)}}></p>

        <style jsx>{`

        #${id} {
            color: ${color};
            font-size: ${size};
            font-weight: ${weight};
            margin: ${margin};
            text-align: ${textAlign};
        }

        `}</style>
        </>
    );
};

export default componentCarousel;