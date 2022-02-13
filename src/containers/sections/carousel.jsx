import React from 'react';
import DOMPurify from 'isomorphic-dompurify';
import Layout from '@layouts/layoutBackgroundAndOverlay';
import ComponentCarousel from '@components/componentCarousel';

const Carousel = ({ data }) => {

    const design = data.design;
    const section = data.section;
    const content = data.content;

    const handlePreviusElement = () => {
        const elements = document.getElementsByClassName(section.carouselClass);
        for( let i = 0; i < elements.length; i++){
            if(elements[i].classList.contains('mobile')){
                if((i-1) >= 0){
                    elements[i-1].classList.replace('desktop','mobile');
                } else {
                    elements[elements.length-1].classList.replace('desktop','mobile');
                }
                elements[i].classList.replace('mobile','desktop');
                break;
            }
        }
    }

    const handleNextElement = () => {
        const elements = document.getElementsByClassName(section.carouselClass);
        for( let i = 0; i < elements.length; i++){
            if(elements[i].classList.contains('mobile')){
                if((i+1) < elements.length){
                    elements[i+1].classList.replace('desktop','mobile');
                } else {
                    elements[0].classList.replace('desktop','mobile');
                }
                elements[i].classList.replace('mobile','desktop');
                break;
            }
        }
    }

    const previus = "<";
    const next = ">";

    return (
        <Layout background={design.background} overlay={design.overlay}>
            <section className="section">
                <h2 className="title" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(section.title)}}></h2>
                <div className="container">
                    <div className="content">
                        {content.map( element => (
                            element.id === "element1" ?
                            <ComponentCarousel data={element} carouselClass={section.carouselClass} visualitation="mobile" key={element.id}/>
                            :
                            <ComponentCarousel data={element} carouselClass={section.carouselClass} visualitation="desktop" key={element.id}/>   
                        ))}
                    </div>
                    <div className="controls">
                        <p className="arrow" onClick={handlePreviusElement}>{previus}</p>
                        <p className="arrow" onClick={handleNextElement}>{next}</p>
                    </div>
                </div>
            </section>
            <style jsx>{`

            .section {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: ${design.sectionPadding[0]}
            }

            .title {
                color: ${design.titleColor};
                font-size: ${design.titleSize[0]};
                margin: ${design.titleMargin[0]};
                text-align: center;
            }

            .container {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;
            }

            .content {
                display: flex;
                justify-content: space-around;
                flex-wrap: wrap;
                width: 100%;
            }

            .controls {
                display: flex;
                justify-content: space-between;
                width: 200px;
            }

            .arrow {
                background-color: ${design.arrowBackground};
                color: ${design.arrowColor};
                font-size: ${design.arrowSize};
                font-weight: normal;
                margin: 0px;
                padding: 10px 18px;
            }

            .arrow:hover {
                background-color: ${design.arrowHover};
            }

            @media (min-width: 700px) {
                .section {
                    padding: ${design.sectionPadding[1]};
                }
                .title {
                    font-size: ${design.titleSize[1]};
                    margin: ${design.titleMargin[1]};
                }
                .controls {
                    display: none;
                }
            } 

            `}</style>
        </Layout>
    );
}

export default Carousel;