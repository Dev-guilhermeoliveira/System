// ============================================
// GERENCIAMENTO DE PRODUTOS
// ============================================

// Armazena todos os produtos carregados
let produtosGlobal = [];

/**
 * Carrega os produtos do arquivo produtos.json
 * Usa Fetch API para obter os dados
 */
async function carregarProdutos() {
    try {
        const resposta = await fetch('data/produtos.json');
        
        if (!resposta.ok) {
            throw new Error(`Erro ao carregar produtos: ${resposta.status}`);
        }
        
        produtosGlobal = await resposta.json();
        console.log('Produtos carregados com sucesso:', produtosGlobal);
        
        // Renderiza os produtos após carregar
        renderizarProdutos(produtosGlobal);
        
    } catch (erro) {
        console.error('Erro ao carregar produtos:', erro);
        const container = document.getElementById('containerProdutos');
        container.innerHTML = '<p style="text-align: center; color: red;">Erro ao carregar produtos. Por favor, recarregue a página.</p>';
    }
}

/**
 * Renderiza os produtos na página
 * @param {Array} produtos - Array de produtos a renderizar
 */
function renderizarProdutos(produtos) {
    const container = document.getElementById('containerProdutos');
    const mensagemVazia = document.getElementById('mensagemVazia');
    
    // Limpa o container
    container.innerHTML = '';
    
    // Verifica se há produtos para exibir
    if (produtos.length === 0) {
        mensagemVazia.style.display = 'block';
        return;
    }
    
    mensagemVazia.style.display = 'none';
    
    // Cria um card para cada produto
    produtos.forEach(produto => {
        const cardProduto = criarCardProduto(produto);
        container.appendChild(cardProduto);
    });
}

/**
 * Cria um elemento de card para um produto
 * @param {Object} produto - Objeto produto com id, nome, descricao, preco, categoria, imagem
 * @returns {HTMLElement} - Elemento do card do produto
 */
function criarCardProduto(produto) {
    const card = document.createElement('div');
    card.className = 'card-produto';
    card.setAttribute('data-produto-id', produto.id);
    
    // Formata o preço
    const precoFormatado = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(produto.preco);
    
    card.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}" class="imagem-produto">
        <div class="conteudo-produto">
            <h3 class="nome-produto">${produto.nome}</h3>
            <p class="descricao-produto">${produto.descricao}</p>
            <p class="preco-produto">${precoFormatado}</p>
            <button class="botao-adicionar" data-produto-id="${produto.id}">
                Adicionar ao Carrinho
            </button>
        </div>
    `;
    
    // Adiciona evento de click ao botão
    const botaoAdicionar = card.querySelector('.botao-adicionar');
    botaoAdicionar.addEventListener('click', (e) => {
        e.stopPropagation();
        adicionarAoCarrinho(produto);
    });
    
    return card;
}

/**
 * Filtra produtos por categoria
 * @param {String} categoria - Nome da categoria para filtrar
 * @returns {Array} - Array de produtos filtrados
 */
function filtrarPorCategoria(categoria) {
    // Se a categoria é "Todos", retorna todos os produtos
    if (categoria === 'Todos') {
        return produtosGlobal;
    }
    
    // Filtra por categoria específica
    return produtosGlobal.filter(produto => produto.categoria === categoria);
}

/**
 * Pesquisa produtos por nome ou descrição
 * @param {String} termo - Termo de pesquisa
 * @returns {Array} - Array de produtos encontrados
 */
function pesquisarProdutos(termo) {
    const termoLowercase = termo.toLowerCase();
    
    return produtosGlobal.filter(produto => 
        produto.nome.toLowerCase().includes(termoLowercase) ||
        produto.descricao.toLowerCase().includes(termoLowercase)
    );
}

/**
 * Filtra e renderiza produtos baseado em categoria e pesquisa
 * @param {String} categoria - Categoria selecionada
 * @param {String} termodePesquisa - Termo de pesquisa (opcional)
 */
function aplicarFiltros(categoria = 'Todos', termoPesquisa = '') {
    let produtosFiltrados = filtrarPorCategoria(categoria);
    
    // Aplica filtro de pesquisa se houver termo
    if (termoPesquisa.trim()) {
        produtosFiltrados = produtosFiltrados.filter(produto =>
            produto.nome.toLowerCase().includes(termoPesquisa.toLowerCase()) ||
            produto.descricao.toLowerCase().includes(termoPesquisa.toLowerCase())
        );
    }
    
    renderizarProdutos(produtosFiltrados);
}
