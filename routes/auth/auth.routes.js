const express = require('express');
const router = express.Router();
const {register, login, postRegister, postLogin, forgotPassword} = require('../../controllers/auth/auth.controller');

// router.get('/register', register);

router.route('/register')
    .get(register)
    .post(postRegister);

router.route('/login')
    .get(login)
    .post(postLogin);

// router.get('/login', login);

module.exports = router;