const authService = require("../services/authService");
const responseUtil = require('../util/responseUtil');

exports.post = async (req, res) => {
  responseUtil.responseFn(req, res, authService.login(req.body));
};