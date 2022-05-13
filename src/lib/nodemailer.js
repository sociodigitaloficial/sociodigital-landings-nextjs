const nodemailerAPI = require('nodemailer');

const nodemailer = () => {

    require('dotenv').config();

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

        return {
            transporter
        };
    
    } catch (error) {
        if (!/already exists/u.test(error.message)) {
            // eslint-disable-next-line no-console
            console.error("Nodemailer conection error", error.stack);
        }
    };
    
};

export default nodemailer;

