const { getRecipesModel } = require("../models/recipes");
const { v4: uuidv4 } = require('uuid');
const { getDBInstance } = require("../db");
const { Sequelize } = require("sequelize");


async function createRecipe(body) {
    const Recipes = getRecipesModel();
    const { name, description, ingredients, image } = body;

    const newRecipe = new Recipes({
        id: uuidv4(),
        name,
        description, 
        ingredients, 
        image
        // can also save it like ...body, but that way doesn't show enough information
    })
    await newRecipe.save();
    return newRecipe.id;
}

// set ingredients array for each recipe 
async function _setIngredientsArray(recipesArr) {
    const dbInstance = getDBInstance();

    for (const recipe of recipesArr) {
        const ingredientsForThisRecipe = await dbInstance.query(`
            SELECT ingredients.name, ingredients.id  FROM ingredients 
            INNER JOIN recipe_ingredients ON ingredients.id = recipe_ingredients.id_ingredient 
            WHERE recipe_ingredients.id_recipe = ${recipe.id}
        `,
        { type: Sequelize.QueryTypes.SELECT }
        );
        // declare array
        recipe.ingredients = ingredientsForThisRecipe;
    }
}

async function getRecipe({ id }) {
    const Recipes = getRecipesModel();
    const recipe = await Recipes.findOne({ where: { id } });
    if(!recipe) return null;

    await _setIngredientsArray([recipe]);
    console.log("@@@");
    console.log(recipe.ingredients);

    return {
        ...recipe.dataValues,
        ingredients: recipe.ingredients
    }
}

async function getRecipesByIngredients({ ingredients }) {
    const dbInstance = getDBInstance();

    function buildJoins(arr) {
        let r = "";
        for (let i = 0; i < arr.length; i++) {
            r += `INNER JOIN recipe_ingredients AS ri${i} ON r.id = ri${i}.id_recipe
            INNER JOIN ingredients AS i${i} ON ri${i}.id_ingredient = i${i}.id AND i${i}.name = '${arr[i]}'
            `
        }
        return r;
    }
    const joins = buildJoins(ingredients);

    // match all the array items 
    const results = await dbInstance.query(
        `
        SELECT r.*
        FROM recipes AS r
        ${joins}
        `,
        { type: Sequelize.QueryTypes.SELECT }
    );

    // add array of ingredients for each recipe found
    if(results.length){
        await _setIngredientsArray(results);
    }

    return {
        results
    }
}




module.exports = {
    createRecipe,
    getRecipe,
    getRecipesByIngredients
}