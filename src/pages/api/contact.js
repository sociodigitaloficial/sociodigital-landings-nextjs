import useMailData from '@hooks/useMailData';
import nodemailer  from '@lib/nodemailer';
import firestore from '@lib/firestore';

export default async function (req, res) {
    require('dotenv').config();

    const leadData = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message
    };
    
    const clientData = {
        name: process.env.SOCIODIGITAL_CLIENT_NAME,
        campaign: process.env.SOCIODIGITAL_CLIENT_CAMPAIGN,
        landing: req.body.landing,
        days: [false,true,true,true,true,true,false],
        hours: [8,20],
        number: '+56965056796',
        email: 'spizarro@sociodigital.cl',
    };

    const { insertData } = firestore();
    const { transporter } = nodemailer();
    const { leadMail, notificationMail } = useMailData(leadData, clientData);

    try {
        await insertData(leadData, clientData);
        await transporter.sendMail(leadMail)
        res.status = 200;
        resolve();
      } catch (error) {
        console.log('Error en contactar: ' + error);
    }
}