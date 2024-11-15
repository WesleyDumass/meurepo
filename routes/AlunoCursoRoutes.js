const express = require('express');
const router = express.Router();
const AlunoCursoController = require('../controller/AlunoCursoController');

/**
 * @swagger
 * components:
 *   schemas:
 *     alunocurso:
 *       type: object
 *       required:
 *         - cod_aluno
 *         - cod_curso
 *         - progresso
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the user
 *         cod_aluno:
 *           type: integer
 *           description: Student identification code
 *         cod_curso:
 *           type: integer
 *           description: Student identification curse
 *         progresso:
 *           type: integer
 *           description: Number of complete modules
 *       example:
 *         descricao: Matematica
 */

/**
 * @swagger
 * tags:
 *   name: alunocurso
 *   description: The alunocurso managing API
 */

/**
 * @swagger
 * /alunocurso:
 *   get:
 *     summary: List all alunocurso (descricao)
 *     tags: [AlunoCurso]
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
 *                   cod_aluno:
 *                     type: integer
 *                   cod_curso:
 *                     type: integer
 *                   progresso:
 *                     type: integer
 */
router.get('/alunocurso', AlunoCursoController.ListAlunoCurso);

module.exports = router;