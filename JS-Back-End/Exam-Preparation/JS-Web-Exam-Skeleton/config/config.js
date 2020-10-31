module.exports = {
  development: {
    port: process.env.PORT || 3000,
    privateKey: 'SOFT-UNI-WORKSHOP',
    databaseUrl: `mongodb+srv://nvgeorgiev:Parola3030@js-web.ger8u.mongodb.net/Theaters?retryWrites=true&w=majority`,
  },
  production: {},
};
