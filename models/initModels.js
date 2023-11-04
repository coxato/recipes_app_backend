const { initUsers } = require("./users");

async function initModels(sequelizeInstance) {
    await initUsers(sequelizeInstance);
}

module.exports = initModels;