const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const authenticateToken = require('../middlewares/authmiddlewares');

router.get('/users',authenticateToken, userController.listUsers);

module.exports = router;