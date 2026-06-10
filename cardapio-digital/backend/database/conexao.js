// ============================================
// CONEXÃO COM BANCO DE DADOS MYSQL
// ============================================

const mysql = require('mysql2/promise');

// Configurações de conexão
const config = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'masterkey',
    database: 'cardapio_digital',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};

// Criar pool de conexões
const pool = mysql.createPool(config);

/**
 * Testa a conexão com o banco de dados
 * Esta função é executada ao iniciar o servidor
 */
async function testarConexao() {
    try {
        const connection = await pool.getConnection();
        console.log('✅ Conexão com MySQL estabelecida com sucesso!');
        console.log(`   Host: ${config.host}`);
        console.log(`   Banco: ${config.database}`);
        console.log(`   Usuário: ${config.user}`);
        connection.release();
        return true;
    } catch (erro) {
        console.error('❌ Erro ao conectar ao MySQL:');
        console.error(`   ${erro.message}`);
        return false;
    }
}

module.exports = {
    pool,
    testarConexao
};
