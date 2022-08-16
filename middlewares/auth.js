const jwt = require("jsonwebtoken");

const tokenCheck = (req, res, next) => {
    if(req.method === "OPTIONS"){
        next()
    }

    const token = req.headers?.authorization?.split(' ')[1];

    if (token) {
        try {
            const decodedData = jwt.verify(token, "secret")
            req.user = decodedData;
            next()
        } catch (err) {
            res.status(404).json({
                code: 403,
                message: "Forbidden error"
            });
        }
    } else {
        res.status(401).json({
            code: 401,
            message: "Not authorized!"
        });
    }
}

module.exports = tokenCheck;
