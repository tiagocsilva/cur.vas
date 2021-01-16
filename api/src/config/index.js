module.exports = {
  PORT: process.env.PORT || 3030,
  DATABASE: {
    HOST: "localhost",
    DATABASE: "curvas_db",
    USERNAME: "curvas_user",
    PASSWORD: "3n6tdczw",
    DIALECT: "mysql",
    PORT: "3306"
  },
  TOKEN: {
    SECRET: "🐴",
    EXPIRES_IN: 43200,
  },
};
