const { Sequelize } = require("sequelize");
const { DB_USER, DB_NAME, DB_PASS } = require("./config");

function initDB() {
    return new Promise((resolve, reject) => {
        const sequelizeInstance = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
            host: "127.0.0.1",
            dialect : 'mysql',
            define: {
                charset: 'utf8',
                collate: 'utf8_general_ci',
            }
        });
    
        sequelizeInstance.authenticate()
            .then(()=> resolve(sequelizeInstance))
            .catch(() => {
                console.log('DB ERROR: ', error)
                reject(false);
            });
    })

}

module.exports = initDB;