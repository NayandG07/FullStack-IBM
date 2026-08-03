const jwt = require("jsonwebtoken");
require('dotenv').config();

const authCheck = (req, res, next) => {
    const token = req.headers.authorization;
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if(err){
            return res.status(401).send({"message":"Unauthorized access", error: err.message})
        } else {
            try {
                const user = await userModel.findById(decoded.userId);
                if(user) {
                    req.headers.userId = decoded.userId;
                    next();
                } else {
                    return res.status(401).send({"message":"Unauthorized access"});
                }
            } catch (error) {
                return res.status(500).send({"message":"Internal server error", error: error.message})
            }
        }
    });

}

module.exports = {
    authCheck
}