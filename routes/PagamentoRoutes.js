const express = require('express');
const router = express.Router();
const PagamentoController = require('../controller/PagamentoController');

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat:
 *   schemas:
 *     Tutoria:
 *       type: object
 *       required:
 *         - cod_pagamento
 *         - data_pagamento
 *         - hora_pagamento
 *         - valor
 *       properties:
 *         cod_pagamento:
 *           type: integer
 *           description: Payment identification code
 *         data_pagamento:
 *           type: integer
 *           description: Date of Payment
 *         hora_pagamento:
 *           type: integer
 *           description: time of Payment
 *         valor:
 *           type: integer
 *           description: Payment Amount
 *       example:
 *         cod_pagamento: 1
 *         data_pagamento: 2024-12-13
 *         hora_pagamento: 13:00:00
 *         valor: 10
 */

/**
 * @swagger
 * tags:
 *   name: Pagamento
 *   description: API for managing Pagamento
 */

/**
 * @swagger
 * /pagamento:
 *   post:
 *     summary: Create a new Pagamento record
 *     tags: [Pagamento]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pagamento'
 *     responses:
 *       201:
 *         description: Successfully created a new Pagamento record
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pagamento'
 *       500:
 *         description: Server error
 */
router.post('/pagamento', PagamentoController.CreatePagamento);

/**
 * @swagger
 * /pagamento:
 *   get:
 *     summary: List all Pagamento records
 *     tags: [Pagamento]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: List of Pagamento records
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/pagamento'
 */
router.get('/pagamento', PagamentoController.ListPagamento);

module.exports = router;