// ============================================
// APLICAÇÃO PRINCIPAL
// ============================================

/**
 * Inicializa a aplicação quando o DOM está pronto
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log('Aplicação iniciada');
    
    // Carrega os produtos
    carregarProdutos();
    
    // Configura os event listeners
    configurarEventListeners();
});

/**
 * Configura todos os event listeners da aplicação
 */
function configurarEventListeners() {
    // Botão do carrinho
    const botaoCarrinho = document.getElementById('botaoCarro');
    botaoCarrinho.addEventListener('click', abrirCarrinho);
    
    // Botão de fechar carrinho
    const botaoFechar = document.getElementById('fecharCarrinho');
    botaoFechar.addEventListener('click', fecharCarrinho);
    
    // Overlay do carrinho (fechar ao clicar)
    const overlay = document.getElementById('overlayCarrinho');
    overlay.addEventListener('click', fecharCarrinho);
    
    // Botão finalizar pedido
    const botaoFinalizar = document.getElementById('finalizarPedido');
    botaoFinalizar.addEventListener('click', finalizarPedido);
    
    // Barra de pesquisa
    const inputPesquisa = document.getElementById('inputPesquisa');
    inputPesquisa.addEventListener('input', (e) => {
        const termo = e.target.value;
        const categoriaAtiva = document.querySelector('.botao-categoria.ativo');
        const categoria = categoriaAtiva ? categoriaAtiva.dataset.categoria : 'Todos';
        aplicarFiltros(categoria, termo);
    });
    
    // Botões de categoria
    const botoesCategoria = document.querySelectorAll('.botao-categoria');
    botoesCategoria.forEach(botao => {
        botao.addEventListener('click', () => {
            // Remove a classe ativa de todos os botões
            botoesCategoria.forEach(b => b.classList.remove('ativo'));
            
            // Adiciona a classe ativa ao botão clicado
            botao.classList.add('ativo');
            
            // Aplica o filtro
            const categoria = botao.dataset.categoria;
            const inputPesquisa = document.getElementById('inputPesquisa');
            const termo = inputPesquisa.value;
            aplicarFiltros(categoria, termo);
        });
    });
}
