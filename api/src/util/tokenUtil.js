const CONFIG = require("../config");
const jwt = require("jsonwebtoken");

exports.generateToken = (user) => {
    return {
        value: jwt.sign({ id: user.id, estado: user.estado }, CONFIG.TOKEN.SECRET, {
            expiresIn: CONFIG.TOKEN.EXPIRES_IN,
        }),
        expiresIn: CONFIG.TOKEN.EXPIRES_IN
    }
}