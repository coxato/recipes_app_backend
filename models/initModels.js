const { initUsers } = require("./users");
const { initRecipes } = require("./recipes");
const { initIngredients } = require("./ingredients");
const { initRecipeIngredients } = require("./recipe_ingredients");

async function initModels(sequelizeInstance) {
    await initUsers(sequelizeInstance);
    await initRecipes(sequelizeInstance);
    await initIngredients(sequelizeInstance);
    await initRecipeIngredients(sequelizeInstance);
}

module.exports = initModels;