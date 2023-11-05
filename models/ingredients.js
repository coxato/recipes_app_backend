const { DataTypes, Model } = require('sequelize');

class Ingredients extends Model {}

async function initIngredients(sequelizeInstance) {
    Ingredients.init({
        id: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
        }
    }, {
        // Other model options go here
        sequelize: sequelizeInstance,
        modelName: 'Ingredients'
    });

    await Ingredients.sync();
}

function getIngredientModel() {
    return Ingredients
}

module.exports = {
    initIngredients,
    getIngredientModel
}
