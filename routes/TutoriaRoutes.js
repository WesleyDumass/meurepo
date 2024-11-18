const express = require('express');
const router = express.Router();
const TutoriaController = require('../controller/TutoriaController');

/**
 * @swagger
 * /tutoria:
 *   get:
 *     summary: List all Tutorias records
 *     tags: [Tutoria]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: List of AlunoCurso records
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/tutoria'
 */
router.get('/tutoria', TutoriaController.ListTutoria);

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     Tutoria:
 *       type: object
 *       required:
 *         - cod_tutoria
 *         - dia_agendado
 *         - hora_agendada
 *         - aval_tutor
 *         - cod_curso
 *       properties:
 *         id:
 *           type: integer
 *           description: Auto-generated ID of the record
 *         cod_tutoria:
 *           type: integer
 *           description: Student identification code
 *         dia_agendado:
 *           type: integer
 *           description: Course identification code
 *         hora_agendada:
 *           type: integer
 *           description: Number of completed modules
 *         aval_tutor:
 *           type: integer
 *           description: Number of completed modules
 *         cod_curso:
 *           type: integer
 *           description: Number of completed modules
 *       example:
 *         cod_aluno: 5
 *         cod_curso: 2
 *         progresso: 3
 */

/**
 * @swagger
 * tags:
 *   name: Tutoria
 *   description: API for managing Tutoria
 */

/**
 * @swagger
 * /tutoria:
 *   post:
 *     summary: Create a new Tutoria record
 *     tags: [Tutoria]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Tutoria'
 *     responses:
 *       201:
 *         description: Successfully created a new Tutoria record
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tutoria'
 *       500:
 *         description: Server error
 */
router.post('/tutoria', TutoriaController.CreateTutoria);

module.exports = router;
