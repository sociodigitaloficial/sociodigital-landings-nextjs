import useMailData from '@hooks/useMailData';
import nodemailer  from '@lib/nodemailer';
import firestore from '@lib/firestore';

export default function (req, res) {
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

    async function sendData(){
        try {
            await insertData(leadData, clientData);
        } catch (error) {
            res.statusCode = 404;
            res.json(error);
            console.log('Error en el sendData de contact: ' + error);
            throw error;
        }
    }

    /*insertData(leadData, clientData)
    .then(function (response){
        res.statusCode = 200;
        res.end(JSON.stringify(response));
        return resolve;
    })
    .catch(function(error){
        console.log('Error en contactar: ' + error);
        res.json(error);
        res.statusCode = 400;
        return reject;
    });

    return new Promise ((resolve, reject) => {
    
    });*/

    return sendData();
    
}