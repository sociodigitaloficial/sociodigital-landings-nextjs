const jwt = require('jsonwebtoken');

const jsonwebtoken = () => {

    function signToken(payload){
        const clave = process.env.JWT_SECRET;
        const token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (10 * 60),
            data: payload
          }, clave);
        
        return token;
    }

    function verifyToken(token){
        const clave = process.env.JWT_SECRET;
        try{
            jwt.verify(token, clave);
            return true;
        } catch {
            return false;
        }
    }

    return {
        signToken,
        verifyToken
    }
}

export default jsonwebtoken;