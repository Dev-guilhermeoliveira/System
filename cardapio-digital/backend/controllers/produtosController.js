// ============================================
// CONTROLLER - PRODUTOS
// ============================================

const produtoModel = require('../models/produtoModel');

/**
 * GET /produtos
 * Obtém todos os produtos
 */
async function listarTodosProdutos(req, res) {
    try {
        const produtos = await produtoModel.obterTodosProdutos();
        
        res.status(200).json({
            sucesso: true,
            mensagem: `${produtos.length} produtos encontrados`,
            dados: produtos,
            total: produtos.length
        });
    } catch (erro) {
        console.error('Erro em listarTodosProdutos:', erro);
        res.status(500).json({
            sucesso: false,
            mensagem: erro.message,
            dados: null
        });
    }
}

/**
 * GET /produtos/:id
 * Obtém um produto pelo ID
 */
async function listarProdutoPorId(req, res) {
    try {
        const { id } = req.params;
        
        // Validar se ID é número
        if (isNaN(id)) {
            return res.status(400).json({
                sucesso: false,
                mensagem: 'ID inválido. Deve ser um número.',
                dados: null
            });
        }
        
        const produto = await produtoModel.obterProdutoPorId(id);
        
        if (!produto) {
            return res.status(404).json({
                sucesso: false,
                mensagem: 'Produto não encontrado.',
                dados: null
            });
        }
        
        res.status(200).json({
            sucesso: true,
            mensagem: 'Produto encontrado',
            dados: produto
        });
    } catch (erro) {
        console.error('Erro em listarProdutoPorId:', erro);
        res.status(500).json({
            sucesso: false,
            mensagem: erro.message,
            dados: null
        });
    }
}

/**
 * POST /produtos
 * Cria um novo produto
 */
async function criarNovoProduto(req, res) {
    try {
        const { categoria_id, nome, descricao, preco, imagem } = req.body;
        
        // Validar campos obrigatórios
        if (!categoria_id || !nome || !descricao || !preco) {
            return res.status(400).json({
                sucesso: false,
                mensagem: 'Campos obrigatórios: categoria_id, nome, descricao, preco',
                dados: null
            });
        }
        
        // Validar tipos de dados
        if (isNaN(categoria_id) || isNaN(preco)) {
            return res.status(400).json({
                sucesso: false,
                mensagem: 'categoria_id e preco devem ser números',
                dados: null
            });
        }
        
        const novoProduto = await produtoModel.criarProduto({
            categoria_id,
            nome,
            descricao,
            preco,
            imagem: imagem || null
        });
        
        res.status(201).json({
            sucesso: true,
            mensagem: 'Produto criado com sucesso',
            dados: novoProduto
        });
    } catch (erro) {
        console.error('Erro em criarNovoProduto:', erro);
        res.status(500).json({
            sucesso: false,
            mensagem: erro.message,
            dados: null
        });
    }
}

/**
 * PUT /produtos/:id
 * Atualiza um produto existente
 */
async function atualizarProdutoExistente(req, res) {
    try {
        const { id } = req.params;
        const { categoria_id, nome, descricao, preco, imagem } = req.body;
        
        // Validar se ID é número
        if (isNaN(id)) {
            return res.status(400).json({
                sucesso: false,
                mensagem: 'ID inválido. Deve ser um número.',
                dados: null
            });
        }
        
        // Validar campos obrigatórios
        if (!categoria_id || !nome || !descricao || !preco) {
            return res.status(400).json({
                sucesso: false,
                mensagem: 'Campos obrigatórios: categoria_id, nome, descricao, preco',
                dados: null
            });
        }
        
        // Validar tipos de dados
        if (isNaN(categoria_id) || isNaN(preco)) {
            return res.status(400).json({
                sucesso: false,
                mensagem: 'categoria_id e preco devem ser números',
                dados: null
            });
        }
        
        // Verificar se produto existe
        const produtoExistente = await produtoModel.obterProdutoPorId(id);
        if (!produtoExistente) {
            return res.status(404).json({
                sucesso: false,
                mensagem: 'Produto não encontrado.',
                dados: null
            });
        }
        
        const atualizado = await produtoModel.atualizarProduto(id, {
            categoria_id,
            nome,
            descricao,
            preco,
            imagem: imagem || produtoExistente.imagem
        });
        
        if (!atualizado) {
            return res.status(500).json({
                sucesso: false,
                mensagem: 'Erro ao atualizar produto.',
                dados: null
            });
        }
        
        res.status(200).json({
            sucesso: true,
            mensagem: 'Produto atualizado com sucesso',
            dados: {
                id,
                categoria_id,
                nome,
                descricao,
                preco,
                imagem
            }
        });
    } catch (erro) {
        console.error('Erro em atualizarProdutoExistente:', erro);
        res.status(500).json({
            sucesso: false,
            mensagem: erro.message,
            dados: null
        });
    }
}

/**
 * DELETE /produtos/:id
 * Deleta um produto
 */
async function deletarProdutoExistente(req, res) {
    try {
        const { id } = req.params;
        
        // Validar se ID é número
        if (isNaN(id)) {
            return res.status(400).json({
                sucesso: false,
                mensagem: 'ID inválido. Deve ser um número.',
                dados: null
            });
        }
        
        // Verificar se produto existe
        const produto = await produtoModel.obterProdutoPorId(id);
        if (!produto) {
            return res.status(404).json({
                sucesso: false,
                mensagem: 'Produto não encontrado.',
                dados: null
            });
        }
        
        const deletado = await produtoModel.deletarProduto(id);
        
        if (!deletado) {
            return res.status(500).json({
                sucesso: false,
                mensagem: 'Erro ao deletar produto.',
                dados: null
            });
        }
        
        res.status(200).json({
            sucesso: true,
            mensagem: 'Produto deletado com sucesso',
            dados: { id: parseInt(id) }
        });
    } catch (erro) {
        console.error('Erro em deletarProdutoExistente:', erro);
        res.status(500).json({
            sucesso: false,
            mensagem: erro.message,
            dados: null
        });
    }
}

module.exports = {
    listarTodosProdutos,
    listarProdutoPorId,
    criarNovoProduto,
    atualizarProdutoExistente,
    deletarProdutoExistente
};
