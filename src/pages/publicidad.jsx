import React from 'react';
import usePublicidadData from '@hooks/usePublicidadData';
import Head from 'next/head';
import Header from '@sections/header';
import Presentation from '@sections/presentation';
import Carousel from '@sections/carousel';
import CallToAction from '@sections/callToAction';
import VideoDisclaimer from '@sections/videoDisclaimer';
import CallForLoss from '@sections/callForLoss';

const Publicidad = () => {

    const { head, header, presentation, carousel, callToAction, videoDisclaimer, callToAction2, carousel2, callForLoss } = usePublicidadData(); 

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

export default Publicidad;