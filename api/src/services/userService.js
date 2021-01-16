const { User } = require("../models");
const tokenUtil = require('../util/tokenUtil');
const sha1 = require("sha1");
const { v4: uuidv4 } = require('uuid');

exports.create = async (user) => {
    const validate = await validateFields(user);

    if (validate)
        return {
            error: true,
            message: validate,
        };

    const result = await User.create({
        ...user,
        id: uuidv4(),
        senha: user.senha ? sha1(user.senha) : null,
    });

    const ret = deletePassword(result).dataValues;

    const token = tokenUtil.generateToken(result);
    ret.token = token.value;
    ret.expiresIn = token.expiresIn;

    return ret;
};

exports.atualizar = async (id, user) => {
    let userExistente = null;
    let validacao = false;

    userExistente = await this.obterPeloId(id);
    if (!userExistente) validacao = "Não foi possível localizar o usuário";

    if (validacao)
        return {
            erro: true,
            message: validacao,
        };

    await User.update(
        {
            ...user,
            id: id,
            email: userExistente.email, // E-mail do not will updated
            senha: user.senha ? sha1(user.senha) : userExistente.senha, // If password is blank, don't update
        },
        { where: { id: id } }
    );

    return deletePassword(await this.obterPeloId(id));
};

exports.get = async (page) => {
    const pageSize = 10;
    if (!page) page = 1;

    return User.findAll({
        limit: pageSize,
        offset: (page - 1) * pageSize,
        attributes: {
            exclude: ["senha"],
        },
    });
};

exports.getById = (id) => {
    return User.findOne({
        where: {
            id: id,
        },
        attributes: {
            exclude: ["senha"],
        },
    });
};

exports.delete = (id) => {
    return User.destroy({
        where: {
            id: id,
        },
    });
};

function deletePassword(result) {
    delete result.dataValues.senha;
    return result;
}

async function validateFields(user) {
    let validate = doValidate([
        { prop: user.email, message: "E-mail inválido" },
        { prop: user.senha, message: "Senha inválida" },
    ]);

    if (!validate) {
        const userExists = await User.findOne({
            where: {
                email: user.email,
            },
        });

        if (userExists) validate = "E-mail já utilizado";
    }

    return validate;
}

function doValidate(list) {
    let error = null;
    list.forEach((x) => {
        if (!x.prop) error = x.message;
    });

    return error == null ? false : error;
}