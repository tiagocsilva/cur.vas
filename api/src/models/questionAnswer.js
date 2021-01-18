module.exports = function (sequelize, DataTypes) {
    const QuestionAnswer = sequelize.define('QuestionAnswer', {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        questionId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Questions",
                key: "id",
            },
        },
        description: {
            type: DataTypes.STRING(1024),
            allowNull: false
        },
        feedback: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
    });

    // QuestionAnswer.associate = (models) => {
    //     QuestionAnswer.hasOne(models.Question, {
    //         foreignKey: "id",
    //         sourceKey: "questionId",
    //     });
    // };

    return QuestionAnswer;
};