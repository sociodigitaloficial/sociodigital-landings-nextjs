import React from 'react';

const layoutBackgroundAndOverlay = ({ children , background, overlay }) => {

    const colorBackground = background[0];
    const mobileBackground = background[1];
    const desktopBackground = background[2];

    return (
        <>
        <div className="background">
            <div className="overlay">
                {children}
            </div>
        </div>
        <style jsx>{`

            .background {
                background-attachment: fixed;
                background-color: ${colorBackground};
                background-image: url('${mobileBackground}');
                background-position: center;
                background-size: cover; 
            }
            
            .overlay {
                background-color: ${overlay}; 
            }
            
            @media (min-width: 700px) {
                .background {
                    background-image: url('${desktopBackground}');
                }
            } 

      `}</style>
      </>
    );
}

export default layoutBackgroundAndOverlay;