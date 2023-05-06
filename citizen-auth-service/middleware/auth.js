import Token from "../model/Token.js";
import jwt from 'jsonwebtoken';

let auth = async (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_KEY);

    try {
        const citizentokens = await Token.findOne({_customerId: decoded.customerId, token: token, tokenType: "login"});
        if(!citizentokens) {
            return res.json({
                isAuth: false,
            });
        }
        req.token = token;
        req.customerId = decoded.customerId;
        next();
    } catch(err) {
        throw err;
    }
};

export {auth};
