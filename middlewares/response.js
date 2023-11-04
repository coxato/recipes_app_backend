function success(res, statusCode = 200, dataOrMessage = '') {
    res.send({
        statusCode,
        error: false,
        body: dataOrMessage
    })
}

function error(res, err) {
    const statusCode = err.statusCode || 500;

    res.send({
        statusCode,
        error: true,
        body: err.message || 'Internal server error'
    });

}

module.exports = {
    success,
    error
}