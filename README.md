# recipes_app_backend

nodejs app

## Before run
install the database (recipes_app.sql) and run this command on folder root
`npm install`

### How to run
`node index.js`

## libraries used
- express.js
- bcryptjs (encrypt passwords),
- cors (CORS middleware)
- mysql2,
- sequelize (ORM),
- uuid (random id generator)

## API endpoints
All routes starts with `<<host>>/api`
### users
## `/api/users/register` (POST)

- params
```
{ 
    email: <string, required>, 
    password: <string, required>, 
    firstName: <string, required>, 
    lastName: <string, optional> 
}
```
- returns user id or an specific message in case didn't pass validation

## `/api/users/login` (POST)

- params
```
{ 
    email: <string, required>, 
    password: <string, required> 
}
```
- returns user basic info or null

### recipes
## `/api/recipes/getRecipe/:id` (GET)

- params
`recipe id`
- returns recipe

## `/api/recipes/SearchRecipesByIngredients` (POST)

- params
```
{ 
    ingredients: Array<string>
}
```
- recipes list based on ingredients