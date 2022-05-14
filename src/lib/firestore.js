const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const firestore = () => {

    const getDatabase = async () =>{

        require('dotenv').config();

        initializeApp({
            credential: cert({
                project_id: process.env.FIREBASE_PROJECT_ID,
                private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
                client_email: process.env.FIREBASE_CLIENT_EMAIL
            })
        });
            
        const db = getFirestore();

        return db;
    }

    const insertData = async (leadData, clientData) =>{
        
        const today = new Date();
        const db = await getDatabase();

        try {
            await db.collection('leads').add({
                client: clientData.name,
                campaign: clientData.campaign,
                landing: clientData.landing,
                capture_date: today.getTime(), 
                sale_stage: 'lead',
                state: 'noContacted',
                data: leadData
            })
        } catch (error) {
            console.log('Error en el insert a Firestore: ' + error);
            throw error;
        }
    }

    return {
        insertData
    }
    
};

export default firestore;
