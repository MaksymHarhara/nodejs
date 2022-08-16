const LoginService = require("../services/LoginService");

exports.login = async (req, res) => {
    try {
        const token = await LoginService(req.body)

        return res.status(200).json(token);
    } catch(err) {
        res.status(500).send({
            message: "Error while updating!",
            details: err
        });
    }
};
