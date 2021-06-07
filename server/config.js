const dbConfig = {
    host: "http://localhost",
    mongoConfig: {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
};
module.exports = {
    development: dbConfig,
    production: dbConfig
};