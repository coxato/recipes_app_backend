const { DataTypes, Model } = require('sequelize');

class Recipe_Ingredients extends Model {}

async function initRecipeIngredients(sequelizeInstance) {
    Recipe_Ingredients.init({
        id_recipe: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        id_ingredient: {
            type: DataTypes.STRING,
            primaryKey: true
        }
    }, {
        // Other model options go here
        sequelize: sequelizeInstance,
        modelName: 'Recipe_Ingredients'
    });

    await Recipe_Ingredients.sync();
}

function getRecipesIngredientsModel() {
    return Recipe_Ingredients
}

module.exports = {
    initRecipeIngredients,
    getRecipesIngredientsModel
}
