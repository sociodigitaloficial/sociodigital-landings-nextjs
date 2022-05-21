import React, { useEffect } from 'react';
import jsonwebtoken from '@lib/jsonwebtoken';
import useInstagramData from '@hooks/useInstagramData';
import Head from 'next/head';
import Header from '@sections/header';
import Presentation from '@sections/presentation';
import Carousel from '@sections/carousel';
import CallToAction from '@sections/callToAction';
import VideoDisclaimer from '@sections/videoDisclaimer';
import CallForLoss from '@sections/callForLoss';

const Instagram = (props) => {

    const { head, header, presentation, carousel, callToAction, videoDisclaimer, callToAction2, carousel2, callForLoss } = useInstagramData(); 

    useEffect(()=> {
      localStorage.setItem('token', props.token);
    }, []);

    return (
        <>
            <Head>
                <title>{head.title}</title>
                <meta name="description" content={head.description}></meta>
                <link rel="shortcut icon" href={head.faviconSrc} type="ico"/>
            </Head>
            <Header data={header}/>
            <Presentation data={presentation}/>
            <Carousel data={carousel}/>
            <CallToAction data={callToAction}/>
            <VideoDisclaimer data={videoDisclaimer}/>
            <CallToAction data={callToAction2}/>
            <Carousel data={carousel2}/>
            <CallForLoss data={callForLoss}/>
        </>
    );
};

export function getServerSideProps() {
    
    const { signToken } = jsonwebtoken();
    const token = signToken({role:'prospect'});
  
    return {
      props: {
        token,
    }
  };
};

export default Instagram;