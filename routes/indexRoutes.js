const userRoutes = require("./userRoutes");
// const recipesRoutes = require("./recipesRoutes");

function useRoutes(app) {
    app.use('/api/users', userRoutes);
    // app.use('/api/recipes', recipesRoutes);
}

module.exports = useRoutes;