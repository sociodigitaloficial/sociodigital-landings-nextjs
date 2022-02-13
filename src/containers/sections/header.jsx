import React from 'react';
import Image from 'next/image';
import Layout from '@layouts/layoutBackgroundAndOverlay';

const Header = ({ data }) => {
    
    const design = data.design;
    const section = data.section;
    
    return (
        <Layout background={design.layout.background} overlay={design.layout.overlay}>
            <header className="section">
                <div className="container">
                    <div className='image'>
                        <Image src={section.logoSrc} alt="logo" layout="fill"/>
                    </div>
                </div>
            </header>
            <style jsx>{`

                .section {
                    display: flex;
                    justify-content: center;
                    padding: ${design.section.padding[0]};
                }

                .container {
                    display: flex;
                    justify-content: center;
                    width: ${design.container.width[0]}
                }

                .image {
                    height: ${design.logo.height[0]};
                    position: relative;
                    width: ${design.logo.width[0]};
                }

                @media (min-width: 700px) {
                    
                    .section {
                        display: flex;
                        justify-content: center;
                        padding: ${design.section.padding[1]};
                    }

                    .container {
                        width: ${design.container.width[1]}
                    }

                    .image {
                        height: ${design.logo.height[1]};
                        width: ${design.logo.width[1]};
                    }
                } 

            `}</style>
        </Layout>
    );
}

export default Header;