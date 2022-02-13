import React from 'react';
import DOMPurify from 'isomorphic-dompurify';
import Layout from '@layouts/layoutBackgroundAndOverlay';

const callForLoss = ({ data }) => {

    const design = data.design;
    const content = data.content;

    function handleClick (){
        window.location.href = content.href;
    }

    return (
        <Layout background={design.background} overlay={design.overlay}>
            <section className="section">
                <div className='container'>
                    <p className='title' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(content.title)}}></p>
                    <p className='paragraph' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(content.paragraph)}}></p>
                    <button className='button' onClick={handleClick}>{content.button}</button>
                </div>
            </section>
            <style jsx>{`

            .section {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: ${design.sectionPadding[0]}
            }

            .container {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;
            }

            .title {
                color: ${design.title.color};
                font-size: ${design.title.fontSize[0]};
                margin: ${design.title.margin[0]};
                text-align: center;
            }

            .paragraph {
                color: ${design.paragraph.color};
                font-size: ${design.paragraph.fontSize};
                margin: ${design.paragraph.margin[0]};
                text-align: center;
            }

            .button {
                background-color: ${design.button.backgroundColor};
                border: ${design.button.border};
                color: ${design.button.color};
                font-size: ${design.button.fontSize};
                font-weight: ${design.button.fontWeight};
                height: ${design.button.height};
                max-width: ${design.button.maxWidth};
                width: ${design.button.width};
            }

            .button:hover {
                background-color: ${design.button.backgroundColorHover};
                cursor: ${design.button.cursor};
            }

            @media (min-width: 700px) {
                .section {
                    padding: ${design.sectionPadding[1]};
                }
                .container {
                    max-width: ${design.maxWidth};
                }
                .title {
                    font-size: ${design.title.fontSize[1]};
                    margin: ${design.title.margin[1]};
                }
                .paragraph {
                    margin: ${design.paragraph.margin[1]};
                }
            } 

            `}</style>
        </Layout>
    )
}

export default callForLoss;