import React from 'react';

const componentQuestionResponseMessage = ({ data }) => {

    const question = data.question;
    const response = data.response;
    const message = data.message;

    return (
        <>
            <div className="element">
                <p className="question">{question.text}</p>
                <p className="response">{response.text}</p>
                <p className="message">{message.text}</p>
            </div>

            <style jsx>{`

                .question {
                    color: ${question.color[0]};
                    font-size: ${question.fontSize[0]};
                    font-weight: ${question.fontWeight};
                    margin: ${question.margin};
                }

                .response {
                    color: ${response.color[0]};
                    font-size: ${response.fontSize[0]};
                    font-weight: ${response.fontWeight};
                    margin: ${response.margin};
                }

                .message {
                    color: ${message.color[0]};
                    font-size: ${message.fontSize[0]};
                    font-weight: ${message.fontWeight};
                    margin: ${message.margin};
                }

                @media (min-width: 700px) {

                    .question {
                        color: ${question.color[1]};
                        font-size: ${question.fontSize[1]};
                    }

                    .response {
                        color: ${response.color[1]};
                        font-size: ${response.fontSize[1]};
                    }

                    .message {
                        color: ${message.color[1]};
                        font-size: ${message.fontSize[1]};
                    }
                } 

            `}</style>

        </>
    );
};

export default componentQuestionResponseMessage;