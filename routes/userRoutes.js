const router = require("express").Router();
const response = require("../middlewares/response");
const userServices = require("../services/userServices");

router.post('/register', registerUser);
router.post('/login', loginUser);

// routes handlers

function registerUser(req, res, next) {
    userServices.registerUser(req.body)
        .then((data) => response.success(res, 200, data))
        .catch(next);
}

function loginUser(req, res, next) {
    userServices.loginUser(req.body)
        .then((data) => response.success(res, 200, data))
        .catch(next);
}

module.exports = router;