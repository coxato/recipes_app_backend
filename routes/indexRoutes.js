const userRoutes = require("./userRoutes");
const recipesRoutes = require("./recipesRoutes");

// this function is a wrapper for all the routes 
function useRoutes(app) {
    app.use('/api/users', userRoutes);
    app.use('/api/recipes', recipesRoutes);
}

module.exports = useRoutes;