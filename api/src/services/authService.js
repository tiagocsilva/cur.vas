const { User } = require("../models");
const tokenUtil = require('../util/tokenUtil');
const sha1 = require("sha1");

exports.login = async (user) => {

    const result = await User.findOne({
        where: {
            email: user.email,
            senha: sha1(user.senha)
        }
    });

    if (result)
        return {
            token: tokenUtil.generateToken(user.email)
        }
    else {
        return {
            error: true,
            message: 'E-mail e/ou senha inválidos'
        };
    }

};
