import useMailData from '@hooks/useMailData';
import nodemailer  from '@lib/nodemailer';
import firestore from '@lib/firestore';
import jsonwebtoken from '@lib/jsonwebtoken';

export default function (req, res) {

    const { verifyToken } = jsonwebtoken();

    let sendData;

    if(verifyToken(req.body.token)){

        console.log('Acceso autorizado');

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

        const { clientMail, prospectMail } = useMailData(leadData, clientData);
        const { insertData } = firestore();
        const { sendNotification } = nodemailer();

        sendData = async () =>{

            try {
                await Promise.all([insertData(leadData, clientData), sendNotification(clientMail)]);

                try {
                    await sendNotification(prospectMail);
                } catch (error) {
                    console.log('Error en el envío del correo al prospecto: ' + error);
                }

                res.statusCode = 200;
                res.end();
            } catch (error) {
                res.statusCode = 400;
                console.log('Error en el sendData de contact: ' + error);
                res.end();
            }
        };

        return sendData();
        
    } else {
        res.statusCode = 400;
        console.log('Usuario no verificado');
        res.end();
    }
    
}