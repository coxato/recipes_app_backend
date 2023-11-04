const response = require("./response");

// express error middleware
function errorMiddleware(err, req, res, _next) {
    console.error('[error]', err);

    response.error(res, err);
}

module.exports = errorMiddleware;