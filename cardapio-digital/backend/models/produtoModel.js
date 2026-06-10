// ============================================
// MODEL - PRODUTOS
// ============================================

const { pool } = require('../database/conexao');

/**
 * Obtém todos os produtos do banco de dados
 * @returns {Promise<Array>} - Array com todos os produtos
 */
async function obterTodosProdutos() {
    try {
        const connection = await pool.getConnection();
        const [produtos] = await connection.query('SELECT * FROM produtos');
        connection.release();
        return produtos;
    } catch (erro) {
        throw new Error(`Erro ao obter produtos: ${erro.message}`);
    }
}

/**
 * Obtém um produto pelo ID
 * @param {Number} id - ID do produto
 * @returns {Promise<Object>} - Objeto produto
 */
async function obterProdutoPorId(id) {
    try {
        const connection = await pool.getConnection();
        const [produtos] = await connection.query(
            'SELECT * FROM produtos WHERE id = ?',
            [id]
        );
        connection.release();
        
        if (produtos.length === 0) {
            return null;
        }
        
        return produtos[0];
    } catch (erro) {
        throw new Error(`Erro ao obter produto: ${erro.message}`);
    }
}

/**
 * Cria um novo produto
 * @param {Object} dados - Dados do produto (categoria_id, nome, descricao, preco, imagem)
 * @returns {Promise<Object>} - Resultado da inserção
 */
async function criarProduto(dados) {
    try {
        const { categoria_id, nome, descricao, preco, imagem } = dados;
        
        const connection = await pool.getConnection();
        const [resultado] = await connection.query(
            'INSERT INTO produtos (categoria_id, nome, descricao, preco, imagem) VALUES (?, ?, ?, ?, ?)',
            [categoria_id, nome, descricao, preco, imagem]
        );
        connection.release();
        
        return {
            id: resultado.insertId,
            categoria_id,
            nome,
            descricao,
            preco,
            imagem
        };
    } catch (erro) {
        throw new Error(`Erro ao criar produto: ${erro.message}`);
    }
}

/**
 * Atualiza um produto existente
 * @param {Number} id - ID do produto
 * @param {Object} dados - Dados a atualizar
 * @returns {Promise<boolean>} - True se atualizado, False se não encontrado
 */
async function atualizarProduto(id, dados) {
    try {
        const { categoria_id, nome, descricao, preco, imagem } = dados;
        
        const connection = await pool.getConnection();
        const [resultado] = await connection.query(
            'UPDATE produtos SET categoria_id = ?, nome = ?, descricao = ?, preco = ?, imagem = ? WHERE id = ?',
            [categoria_id, nome, descricao, preco, imagem, id]
        );
        connection.release();
        
        // affectedRows indica quantas linhas foram atualizadas
        return resultado.affectedRows > 0;
    } catch (erro) {
        throw new Error(`Erro ao atualizar produto: ${erro.message}`);
    }
}

/**
 * Deleta um produto
 * @param {Number} id - ID do produto
 * @returns {Promise<boolean>} - True se deletado, False se não encontrado
 */
async function deletarProduto(id) {
    try {
        const connection = await pool.getConnection();
        const [resultado] = await connection.query(
            'DELETE FROM produtos WHERE id = ?',
            [id]
        );
        connection.release();
        
        return resultado.affectedRows > 0;
    } catch (erro) {
        throw new Error(`Erro ao deletar produto: ${erro.message}`);
    }
}

module.exports = {
    obterTodosProdutos,
    obterProdutoPorId,
    criarProduto,
    atualizarProduto,
    deletarProduto
};
