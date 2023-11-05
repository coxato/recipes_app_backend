const { DataTypes, Model } = require('sequelize');

class Recipes extends Model {}

async function initRecipes(sequelizeInstance) {
    Recipes.init({
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.STRING
        },
    }, {
        // Other model options go here
        sequelize: sequelizeInstance,
        modelName: 'Recipes'
    });

    await Recipes.sync();
}

function getRecipesModel() {
    return Recipes
}

module.exports = {
    initRecipes,
    getRecipesModel
}
