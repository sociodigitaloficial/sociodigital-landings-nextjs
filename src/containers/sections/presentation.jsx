import React from 'react';
import DOMPurify from 'isomorphic-dompurify';
import Layout from '@layouts/layoutBackgroundAndOverlay';
import ComponentQuestionResponseMessage from '@components/componentQuestionResponseMessage';
import Form from '@components/form';

const Presentation = ({ data }) => {

    const design = data.design;
    const section = data.section;
    const content = data.content;
    const formData = data.form;

    return (
        <Layout background={design.layout.background} overlay={design.layout.overlay}>
            <section className="section">
                <h1 className="title" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(section.title)}}></h1>
                <div className="container">
                    <div className="content">
                        {content.map( element => (
                            <ComponentQuestionResponseMessage data={element} key={element.id}/>
                        ))}
                    </div>
                    <div className="form">
                        <Form data={formData}/>
                    </div>
                </div>
            </section>
            <style jsx>{`

                .section {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: ${design.section.padding[0]};
                    text-align: center;
                }

                .title {
                    color: ${design.title.color};
                    font-size: ${design.title.fontSize[0]};
                    margin: ${design.title.margin[0]};
                }

                .container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: ${design.container.maxWidth[0]};
                }

                .content {
                    background-color: ${design.content.background[0]};
                    box-sizing: border-box;
                    margin: ${design.content.margin[0]};
                    padding: ${design.content.padding[0]};
                    width: ${design.content.width[0]};
                }

                .form {
                    background-color: ${design.form.background};
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    max-width: ${design.form.maxWidth};
                    padding: ${design.form.padding};
                    position: relative;
                }

                @media (min-width: 700px) {

                    .section {
                        padding: ${design.section.padding[1]};
                    }

                    .title {
                        font-size: ${design.title.fontSize[1]};
                        margin: ${design.title.margin[1]};
                    }

                    .container {
                        flex-direction: row;
                        justify-content: space-around;
                        max-width: ${design.container.maxWidth[1]};
                    }

                    .content {
                        background-color: ${design.content.background[1]};
                        margin: ${design.content.margin[1]};
                        padding: ${design.content.padding[1]};
                        text-align: left;
                        width: ${design.content.width[1]};
                    }

                }

            `}</style>
        </Layout>
    );
}

export default Presentation;