const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

// will pass to users controller eventuall but this is a test
router.put('/signup', userController.signup);

router.put('/login', userController.login);
module.exports = router;
