const { getRecipesModel } = require("../models/recipes");
const { getIngredientModel } = require("../models/ingredients");
const { getRecipesIngredientsModel } = require("../models/recipe_ingredients");
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


async function getRecipe({ id }) {
    const Recipes = getRecipesModel();
    const recipe = await Recipes.findOne({ where: { id } });

    return {
        recipe
    }
}


async function getRecipesByIngredients({ ingredients }) {
    const dbInstance = getDBInstance();

    function normalize(arr) {
        let r = "";
        for (const s of arr) {
            r += `'${s}',`
        }
        r = r.substring(0, r.length -1);
        return r;
    }
    const normalizedValues = normalize(ingredients);

    const results = await dbInstance.query(
        `SELECT r.name FROM recipes as r
        INNER JOIN recipe_ingredients ON r.id = recipe_ingredients.id_recipe
        INNER JOIN ingredients ON recipe_ingredients.id_ingredient = ingredients.id
        WHERE (SELECT (ingredients.name)  FROM ingredients
            INNER JOIN recipe_ingredients ON ingredients.id = recipe_ingredients.id_ingredient
            INNER JOIN recipes ON recipe_ingredients.id_recipe = recipes.id 
            WHERE recipes.id = r.id GROUP BY ingredients.name) IN (${normalizedValues})
        `,
        { type: Sequelize.QueryTypes.SELECT }
    );

    return {
        results
    }
}




module.exports = {
    createRecipe,
    getRecipe,
    getRecipesByIngredients
}