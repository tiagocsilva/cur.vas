module.exports = function (sequelize, DataTypes) {
    const Question = sequelize.define('Question', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        title: {
            type: DataTypes.STRING(1024),
            allowNull: false
        }
    });

    Question.associate = function (models) {
        Question.hasMany(models.QuestionAnswer, { foreignKey: 'questionId', sourceKey: "id", });
    }

    return Question;
};