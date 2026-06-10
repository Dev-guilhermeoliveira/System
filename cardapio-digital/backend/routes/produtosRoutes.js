// ============================================
// ROUTES - PRODUTOS
// ============================================

const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/produtosController');

/**
 * GET /produtos
 * Obtém todos os produtos
 */
router.get('/', produtosController.listarTodosProdutos);

/**
 * GET /produtos/:id
 * Obtém um produto pelo ID
 */
router.get('/:id', produtosController.listarProdutoPorId);

/**
 * POST /produtos
 * Cria um novo produto
 */
router.post('/', produtosController.criarNovoProduto);

/**
 * PUT /produtos/:id
 * Atualiza um produto existente
 */
router.put('/:id', produtosController.atualizarProdutoExistente);

/**
 * DELETE /produtos/:id
 * Deleta um produto
 */
router.delete('/:id', produtosController.deletarProdutoExistente);

module.exports = router;
