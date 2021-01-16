module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define('User', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID
        },
        email: {
            type: DataTypes.STRING(1024),
            allowNull: false
        },
        senha: {
            type: DataTypes.STRING(2024),
            allowNull: false
        },
    });

    return User;
};