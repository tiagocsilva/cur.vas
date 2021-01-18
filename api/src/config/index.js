module.exports = {
  PORT: process.env.PORT || 3030,
  DATABASE: {
    HOST: "35.192.169.177",
    DATABASE: "curvas_db",
    // USERNAME: "curvas_user",
    USERNAME: "root",
    PASSWORD: "3n6tdczw",
    DIALECT: "mysql",
    PORT: "3306"
  },
  TOKEN: {
    SECRET: "🐴",
    EXPIRES_IN: 43200,
  },
};
