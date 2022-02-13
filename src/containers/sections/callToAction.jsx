import React from 'react';
import DOMPurify from 'isomorphic-dompurify';
import Layout from '@layouts/layoutBackgroundAndOverlay';

const callToAction = ({ data }) => {

    const design = data.design;
    const content = data.content;

    function handleClick (){
        window.location.href = content.href;
    }

    return (
        <Layout background={design.background} overlay={design.overlay}>
            <section className='section'>
                <div className='container'>
                    <p className='text' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(content.text)}}></p>
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

            .text {
                color: ${design.textColor};
                font-size: ${design.textSize[0]};
                margin: ${design.textMargin[0]};
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
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-around;
                    max-width: ${design.maxWidth};
                }
                .text {
                    font-size: ${design.textSize[1]};
                    margin: ${design.textMargin[1]};
                }
            } 

            `}</style>
        </Layout>
    )
}

export default callToAction;