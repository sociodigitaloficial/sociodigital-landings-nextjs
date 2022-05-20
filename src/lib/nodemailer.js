const nodemailerAPI = require('nodemailer');

const nodemailer = () => {

    const getTransporter = async () =>{

        try {
            let transporter = nodemailerAPI.createTransport({
                host: process.env.AWS_NOTIFICATIONS_HOST,
                port: 587,
                auth: {
                user: process.env.AWS_NOTIFICATIONS_USER,
                pass: process.env.AWS_NOTIFICATIONS_PASS
                },
                tls: {
                rejectUnauthorized: false
                }
            });
    
            return transporter;
        
        } catch (error) {
            console.log('Error en conección a Nodemailer: ' + error);
            throw error;
        };
    };

    const sendNotification = async (mail) =>{

        const transporter = await getTransporter(); 

        try {
            await transporter.sendMail(mail);
        } catch (error) {
            console.log('Error en el envío del correo con Nodemailer: ' + error);
            throw error;
        }
    };

    return {
        sendNotification
    };
    
};

export default nodemailer;

