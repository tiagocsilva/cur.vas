const userService = require("../services/userService");
const responseUtil = require('../util/responseUtil');

exports.get = async (req, res) => {
  const { page } = req.query;
  responseUtil.responseFn(req, res, userService.get(page));
};

exports.put = async (req, res) => {
  const user = req.body;
  const { id } = req.params;

  responseUtil.responseFn(req, res, userService.update(id, user));
};

exports.post = async (req, res) => {
  responseUtil.responseFn(req, res, userService.create(req.body));
};

exports.getById = async (req, res) => {
  responseUtil.responseFn(req, res, userService.getById(req.params.id));
};

exports.delete = async (req, res) => {
  responseUtil.responseFn(req, res, userService.delete(req.params.id), 204);
};