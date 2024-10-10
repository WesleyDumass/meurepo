const express = require('express');
const router = express.Router();
const materiaController = require('../controller/materiaController');

/**
 * @swagger
 * components:
 *   schemas:
 *     materia:
 *       type: object
 *       required:
 *         - descricao
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the user
 *         descricao:
 *           type: string
 *           description: Describle your Material
 *       example:
 *         descricao: Matematica
 */

/**
 * @swagger
 * tags:
 *   name: Materia
 *   description: The materia managing API
 */

/**
 * @swagger
 * /materia:
 *   get:
 *     summary: List all materias (descricao)
 *     tags: [Materia]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: The list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   descricao:
 *                     type: string
 */
router.get('/materia', materiaController.ListMateria);

module.exports = router;