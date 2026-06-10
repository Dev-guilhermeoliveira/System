// ============================================
// SERVIDOR EXPRESS - CARDÁPIO DIGITAL
// ============================================

const express = require('express');
const cors = require('cors');
const { testarConexao } = require('./database/conexao');
const produtosRoutes = require('./routes/produtosRoutes');

// Inicializar Express
const app = express();
const PORT = 3000;

// ============================================
// MIDDLEWARE
// ============================================

// Body parser - permitir JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS - permitir requisições de qualquer origem
app.use(cors());

// ============================================
// ROTAS
// ============================================

// Rota raiz
app.get('/', (req, res) => {
    res.json({
        mensagem: 'API Cardápio Digital',
        versao: '1.0.0',
        endpoints: {
            GET_todos: 'GET /produtos',
            GET_um: 'GET /produtos/:id',
            POST: 'POST /produtos',
            PUT: 'PUT /produtos/:id',
            DELETE: 'DELETE /produtos/:id'
        }
    });
});

// Health check
app.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        timestamp: new Date().toISOString()
    });
});

// Rotas de produtos
app.use('/produtos', produtosRoutes);

// Rota 404
app.use((req, res) => {
    res.status(404).json({
        sucesso: false,
        mensagem: 'Rota não encontrada',
        dados: null
    });
});

// ============================================
// INICIAR SERVIDOR
// ============================================

async function iniciarServidor() {
    try {
        // Testar conexão com banco de dados
        const conexaoOk = await testarConexao();
        
        if (!conexaoOk) {
            console.error('❌ Servidor não iniciado. Erro de conexão com banco de dados.');
            process.exit(1);
        }
        
        // Iniciar servidor Express
        app.listen(PORT, () => {
            console.log('');
            console.log('╔════════════════════════════════════════════════════════════════╗');
            console.log('║          🍔 SERVIDOR CARDÁPIO DIGITAL - RODANDO!              ║');
            console.log('╚════════════════════════════════════════════════════════════════╝');
            console.log('');
            console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
            console.log('');
            console.log('📚 Endpoints disponíveis:');
            console.log(`   GET  http://localhost:${PORT}/produtos`);
            console.log(`   GET  http://localhost:${PORT}/produtos/:id`);
            console.log(`   POST http://localhost:${PORT}/produtos`);
            console.log(`   PUT  http://localhost:${PORT}/produtos/:id`);
            console.log(`   DELETE http://localhost:${PORT}/produtos/:id`);
            console.log('');
            console.log('💡 Pressione Ctrl+C para parar o servidor');
            console.log('');
        });
    } catch (erro) {
        console.error('❌ Erro ao iniciar servidor:', erro.message);
        process.exit(1);
    }
}

// Iniciar
iniciarServidor();

module.exports = app;
