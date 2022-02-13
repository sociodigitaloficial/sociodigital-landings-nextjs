import React from 'react';
import DOMPurify from 'isomorphic-dompurify';
import Layout from '@layouts/layoutBackgroundAndOverlay';
import ComponentDisclaimer from '@components/ComponentDisclaimer';

const videoDisclaimer = ({ data }) => {

    const design = data.design;
    const section = data.section;
    const content = data.content;

    return (
        <Layout background={design.background} overlay={design.overlay}>
            <section className="section">
                <h2 className="title" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(section.title)}}></h2>
                <div className="container">
                <video className="video" src={section.videoSrc} type="video/mp4" poster={section.posterSrc} controls></video>
                    <div className="content">
                        {content.map( element => (
                            <ComponentDisclaimer data={element} key={element.id}/>   
                        ))}
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

            .video {
                height: auto;
                max-height: 393.75px;
                max-width: 700px;
                width: 100%;  
            }

            .content {
                display: flex;
                flex-direction: column;
                align.items: center;
                max-width: ${design.maxWidth};
                width: 100%;
            }

            @media (min-width: 700px) {
                .section {
                    padding: ${design.sectionPadding[1]};
                }
                .title {
                    font-size: ${design.titleSize[1]};
                    margin: ${design.titleMargin[1]};
                }
                .video {
                    margin-bottom: 46px;
                }
            } 

            `}</style>
        </Layout>
    );
}

export default videoDisclaimer;