const db = require("../models/main");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const Users = db.users;

const loginService = async (body) => {
    let condition = { login: body.login };

    const user = await Users.findAndCountAll({ where: condition});
    //if (user === undefined || user.login !== body.login)
    if(!user) {
         //res.status(403).send({ sucess: false, message: "Wrong username" })
    } else {
        console.log(user)
        //const payload = { id: user.id, isdeleted: user.isdeleted };
        return generateAccessToken(user.id, user.isdeleted);
    }
}

const generateAccessToken = (id, isdeleted) => {
    const payload = {
        id,
        isdeleted
    }

    const token = jwt.sign(payload, 'secret', {expiresIn: "24h"});
    console.log(token);
    return token;
}

module.exports = loginService;
