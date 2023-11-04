const { initUsers } = require("./users");
const { initRecipes } = require("./recipes");

async function initModels(sequelizeInstance) {
    await initUsers(sequelizeInstance);
    await initRecipes(sequelizeInstance);
}

module.exports = initModels;