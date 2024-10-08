const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');


/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 * 
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - username
 *         - loginuser
 *         - celular
 *         - password
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the user
 *         username:
 *           type: string
 *           description: The username of the user
 *         idade:
 *           type: integer
 *           description: This is your age
 *         loginuser:
 *           type: string
 *           description: The login username of the user
 *         celular:
 *           type: integer
 *           description: This is your phone number
 *         password:
 *           type: string
 *           description: The password of the user
 *         active:
 *           type: boolean
 *           description: Indicates if the user is active
 *       example:
 *         username: John Cezar
 *         idade: "12"
 *         loginuser: cezar.john
 *         celular: 1198765432
 *         password: secret@123
 *         active: true
 */

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: The authentication managing API
 */

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: The user was successfully created
 *       500:
 *         description: Some server error
 */
router.post('/register', authController.register);

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login an existing user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               loginuser:
 *                 type: string
 *                 description: The login username of the user
 *               celular:
 *                  type: string
 *                  description: This is your phone number
 *               password:
 *                 type: string
 *                 description: The password of the user
 *             example:
 *               loginuser: cezar.john
 *               password: secret@123
 *     responses:
 *       200:
 *         description: The user was successfully logged in
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       401:
 *         description: Invalid credentials or inactive user
 *       500:
 *         description: Some server error
 */
router.post('/login', authController.login);



module.exports = router;