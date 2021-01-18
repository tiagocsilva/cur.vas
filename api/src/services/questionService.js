const { Question, QuestionAnswer } = require("../models");

exports.get = async () => {
    return Question.findAll({
        include: [QuestionAnswer]
    });
};
