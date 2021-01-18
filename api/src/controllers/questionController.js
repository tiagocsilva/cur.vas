const questionService = require("../services/questionService");
const responseUtil = require('../util/responseUtil');

exports.get = async (req, res) => {
  responseUtil.responseFn(req, res, questionService.get());
};