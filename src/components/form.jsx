import React, { useState } from 'react';
import Image from 'next/image';
import DOMPurify from 'isomorphic-dompurify';

const Form = ({ data }) => {

    const content = data.content;
    const design = data.design;

    const [form, setForm] = useState(true);
    const [loanding, setLoanding] = useState(false);
    const [successful, setSuccessful] = useState(false);
    const [error, setError] = useState(false);

    const landing = content.landing;
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function formDisplay() {
        return (
            <>
                {content.title && <p className="title" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(content.title)}}></p>}
                {content.callToAction && <p className="callToAction" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(content.callToAction)}}></p>}
                <form id="form" className='form' onSubmit={sendForm}>
                    {content.landing && <input className="landing" type="text" name="form-landing" defaultValue={content.landing} hidden/>}
                    {content.name && <input className="name" onChange={(e)=>{setName(e.target.value);}} type="text" name="form-name" placeholder={content.name} required/>}
                    {content.phone && <input className="phone" onChange={(e)=>{setPhone(e.target.value);}} type="text" name="form-phone" placeholder={content.phone} required/>}
                    {content.email && <input className="email" onChange={(e)=>{setEmail(e.target.value);}} type="email" name="form-email" placeholder={content.email} required/>}
                    {content.message && <textarea className="message" onChange={(e)=>{setMessage(e.target.value);}} name="form-message" placeholder={content.message} required/>}
                    <button type="submit" className="button">{content.button}</button>
                </form>
            
                <style jsx>{`

                    .title {
                        font-size: ${design.title.fontSize[0]};
                        margin: ${design.title.margin[0]};
                    }

                    .callToAction {
                        font-size: ${design.callToAction.fontSize[0]};
                        margin: ${design.callToAction.margin[0]};
                    }

                    .form {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        width: 100%;
                    }

                    .name, .phone, .email, .message {
                        font-size: ${design.field.fontSize[0]};
                        height: ${design.field.height[0]};
                        margin: ${design.field.margin[0]};
                        max-width: ${design.field.maxWidth[0]};
                        padding: ${design.field.padding[0]};
                        width: ${design.field.width[0]};
                    }

                    .message {
                        font-family: ${design.message.fontFamily};
                        height: ${design.message.height[0]};
                        padding: ${design.message.padding};
                    }

                    .button {
                        background-color: ${design.button.backgroundColor};
                        border: ${design.button.border};
                        color: ${design.button.color};
                        font-size: ${design.button.fontSize};
                        font-weight: ${design.button.fontWeight};
                        height: ${design.button.height};
                        margin: ${design.button.margin};
                        max-width: ${design.button.maxWidth};
                        width: ${design.button.width};
                    }

                    .button:hover {
                        background-color: ${design.button.backgroundColorHover};
                        cursor: ${design.button.cursor};
                    }

                    @media (min-width: 700px) {

                        .title {
                            font-size: ${design.title.fontSize[1]};
                        }
                        .name, .phone, .email, .message {
                            font-size: ${design.field.fontSize[1]};
                        }
                    } 

                `}</style>
            </>
        );
    }

    function loandingDisplay() {
        return(
            <>
                {content.loandingTitle && <p className="title" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(content.loandingTitle)}}></p>}
                {content.loandingCallToAction && <p className="callToAction" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(content.loandingCallToAction)}}></p>}
                <div className="loader-container">
                    <div className="loader loader1"></div>
                    <div className="loader loader2"></div>
                </div>

                <style jsx>{`

                    .title {
                        font-size: ${design.title.fontSize[0]};
                        margin: ${design.title.margin[0]};
                    }

                    .callToAction {
                        font-size: ${design.callToAction.fontSize[0]};
                        margin: ${design.callToAction.margin[0]};
                    }

                    .loader-container {
                        height: 100px;
                        position: relative;
                        margin: 50px;
                        width: 100px;
                    }

                    .loader {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        border: solid 7px transparent;
                        border-top-color: ${design.loanding.color[0]};
                        border-left-color: ${design.loanding.color[1]};
                        border-radius: 50%;
                    }

                    .loader1 {
                        animation: loader 1.2s linear infinite;
                        height: 100%;
                        width: 100%;
                    }

                    .loader2 {
                        animation: loader2 1.2s linear infinite;
                        height: 70%;
                        width: 70%;
                    }

                    @keyframes loader {
                        0% {
                            transform: translate(-50%, -50%) rotate(0deg);
                        }
                        100% {
                            transform: translate(-50%, -50%) rotate(360deg);
                        }
                    }

                    @keyframes loader2 {
                        0% {
                            transform: translate(-50%, -50%) rotate(0deg);
                        }
                        100% {
                            transform: translate(-50%, -50%) rotate(-360deg);
                        }
                    }

                    @media (min-width: 700px) {

                        .title {
                            font-size: ${design.title.fontSize[1]};
                        }
                    } 

                `}</style>
            </>
        );
    }

    function successfulDisplay() {
        return(
            <>
                <div className="close-container">
                    <Image src={design.close.imageSrc} alt="close-cross" onClick={handleError} className="close-icon" height={20} width={20}/>
                </div>
                {content.successfulTitle && <p className="title" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(content.successfulTitle)}}></p>}
                {content.successfulCallToAction && <p className="callToAction" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(content.successfulCallToAction)}}></p>}

                <style jsx>{`

                    .title {
                        font-size: ${design.title.fontSize[0]};
                        margin: ${design.title.margin[0]};
                    }

                    .callToAction {
                        font-size: ${design.callToAction.fontSize[0]};
                        margin: ${design.callToAction.margin[0]};
                    }

                    .close-container {
                        display: flex;
                        align-items: center;
                        align-self: flex-end;
                        border: 1px solid white;
                        padding: 2px;
                        position: absolute;
                        right: 10px;
                        top: 10px;
                    }

                    .close-container:hover {
                        cursor: pointer;
                        border: 1px solid rgb(255, 0, 0, 1);
                    }

                    @media (min-width: 700px) {

                        .title {
                            font-size: ${design.title.fontSize[1]};
                        }
                    } 

                `}</style>
            </> 
        );
    }
    
    function errorDisplay() {
        return(
            <>
                <div className="close-container">
                    <Image src={design.close.imageSrc} alt="close-cross" onClick={handleError} className="close-icon" height={20} width={20}/>
                </div>
                {content.errorTitle && <p className="title" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(content.errorTitle)}}></p>}
                {content.errorCallToAction && <p className="callToAction" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(content.errorCallToAction)}}></p>}

                <style jsx>{`

                    .title {
                        font-size: ${design.title.fontSize[0]};
                        margin: ${design.title.margin[0]};
                    }

                    .callToAction {
                        font-size: ${design.callToAction.fontSize[0]};
                        margin: ${design.callToAction.margin[0]};
                    }

                    .close-container {
                        display: flex;
                        align-items: center;
                        align-self: flex-end;
                        border: 1px solid white;
                        padding: 2px;
                        position: absolute;
                        right: 10px;
                        top: 10px;
                    }

                    .close-container:hover {
                        cursor: pointer;
                        border: 1px solid rgb(255, 0, 0, 1);
                    }

                    @media (min-width: 700px) {

                        .title {
                            font-size: ${design.title.fontSize[1]};
                        }
                    } 

                `}</style>
            </> 
        );
    }

    const handleError = () => {
        setForm(true);
        setLoanding(false);
        setSuccessful(false);
        setError(false);
    };

    const sendForm = async event => {
        
        event.preventDefault();

        setForm(false);
        setLoanding(true);

        const token = localStorage.getItem("token");

        let data = {
            landing,
            name,
            phone,
            email,
            message,
            token
        };

        await fetch('/api/contact', {
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'POST'
        })
            .then(res => {
                setLoanding(false);
                if(res.status === 200){
                    setSuccessful(true);
                } else {
                    setError(true);
                }
            });
    };
    
    return (
        <div id={content.id}>
            {form && formDisplay()}
            {loanding && loandingDisplay()}
            {successful && successfulDisplay()}
            {error && errorDisplay()}
        </div>
    );
};

export default Form;