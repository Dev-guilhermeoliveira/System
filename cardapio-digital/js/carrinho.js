// ============================================
// GERENCIAMENTO DO CARRINHO
// ============================================

// Armazena os itens do carrinho
let carrinhoItens = [];

// Taxa de entrega fixa
const TAXA_ENTREGA = 5.00;

/**
 * Adiciona um produto ao carrinho
 * @param {Object} produto - Produto a ser adicionado
 */
function adicionarAoCarrinho(produto) {
    // Procura se o produto já existe no carrinho
    const itemExistente = carrinhoItens.find(item => item.id === produto.id);
    
    if (itemExistente) {
        // Se existe, aumenta a quantidade
        itemExistente.quantidade++;
    } else {
        // Se não existe, adiciona um novo item
        carrinhoItens.push({
            id: produto.id,
            nome: produto.nome,
            preco: produto.preco,
            imagem: produto.imagem,
            quantidade: 1
        });
    }
    
    // Atualiza a visualização do carrinho
    atualizarCarrinho();
    
    // Mostra uma animação ou feedback (opcional)
    console.log(`${produto.nome} adicionado ao carrinho`);
}

/**
 * Remove um item do carrinho
 * @param {Number} produtoId - ID do produto a remover
 */
function removerDoCarrinho(produtoId) {
    carrinhoItens = carrinhoItens.filter(item => item.id !== produtoId);
    atualizarCarrinho();
}

/**
 * Atualiza a quantidade de um item no carrinho
 * @param {Number} produtoId - ID do produto
 * @param {Number} novaQuantidade - Nova quantidade
 */
function atualizarQuantidade(produtoId, novaQuantidade) {
    if (novaQuantidade <= 0) {
        removerDoCarrinho(produtoId);
        return;
    }
    
    const item = carrinhoItens.find(item => item.id === produtoId);
    if (item) {
        item.quantidade = novaQuantidade;
        atualizarCarrinho();
    }
}

/**
 * Calcula o subtotal do carrinho
 * @returns {Number} - Valor do subtotal
 */
function calcularSubtotal() {
    return carrinhoItens.reduce((total, item) => {
        return total + (item.preco * item.quantidade);
    }, 0);
}

/**
 * Calcula o total do carrinho (subtotal + taxa)
 * @returns {Number} - Valor total
 */
function calcularTotal() {
    const subtotal = calcularSubtotal();
    return carrinhoItens.length > 0 ? subtotal + TAXA_ENTREGA : 0;
}

/**
 * Atualiza toda a visualização do carrinho
 */
function atualizarCarrinho() {
    // Atualiza o contador no botão do carrinho
    const contador = document.getElementById('contadorCarrinho');
    const totalItens = carrinhoItens.reduce((total, item) => total + item.quantidade, 0);
    contador.textContent = totalItens;
    
    // Atualiza o conteúdo do carrinho
    atualizarConteudoCarrinho();
    
    // Atualiza o resumo (subtotal, taxa, total)
    atualizarResumoCarrinho();
}

/**
 * Atualiza a lista de itens exibida no carrinho
 */
function atualizarConteudoCarrinho() {
    const listaItens = document.getElementById('listaItensCarrinho');
    const carrinhoVazio = document.getElementById('carrinhoVazio');
    
    if (carrinhoItens.length === 0) {
        // Se carrinho está vazio, mostra mensagem
        listaItens.style.display = 'none';
        carrinhoVazio.style.display = 'block';
        return;
    }
    
    // Se tem itens, mostra a lista
    carrinhoVazio.style.display = 'none';
    listaItens.style.display = 'flex';
    listaItens.innerHTML = '';
    
    // Cria um elemento para cada item do carrinho
    carrinhoItens.forEach(item => {
        const itemElement = criarElementoItemCarrinho(item);
        listaItens.appendChild(itemElement);
    });
}

/**
 * Cria um elemento HTML para um item do carrinho
 * @param {Object} item - Item do carrinho
 * @returns {HTMLElement} - Elemento do item
 */
function criarElementoItemCarrinho(item) {
    const div = document.createElement('div');
    div.className = 'item-carrinho';
    
    const precoFormatado = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(item.preco);
    
    div.innerHTML = `
        <img src="${item.imagem}" alt="${item.nome}" class="imagem-item-carrinho">
        <div class="info-item-carrinho">
            <p class="nome-item-carrinho">${item.nome}</p>
            <p class="preco-item-carrinho">${precoFormatado}</p>
            <div class="controle-quantidade">
                <button class="botao-quantidade menos" data-produto-id="${item.id}">−</button>
                <span class="quantidade-item">${item.quantidade}</span>
                <button class="botao-quantidade mais" data-produto-id="${item.id}">+</button>
            </div>
        </div>
        <button class="botao-remover-item" data-produto-id="${item.id}">✕</button>
    `;
    
    // Adiciona eventos
    div.querySelector('.botao-quantidade.menos').addEventListener('click', () => {
        atualizarQuantidade(item.id, item.quantidade - 1);
    });
    
    div.querySelector('.botao-quantidade.mais').addEventListener('click', () => {
        atualizarQuantidade(item.id, item.quantidade + 1);
    });
    
    div.querySelector('.botao-remover-item').addEventListener('click', () => {
        removerDoCarrinho(item.id);
    });
    
    return div;
}

/**
 * Atualiza o resumo financeiro do carrinho
 */
function atualizarResumoCarrinho() {
    const subtotal = calcularSubtotal();
    const total = calcularTotal();
    const rodapeCarrinho = document.getElementById('rodapeCarrinho');
    
    // Formata os valores para exibição
    const subtotalFormatado = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(subtotal);
    
    const taxaFormatada = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(TAXA_ENTREGA);
    
    const totalFormatado = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(total);
    
    // Atualiza os valores na página
    document.getElementById('subtotal').textContent = subtotalFormatado;
    document.getElementById('taxaEntrega').textContent = taxaFormatada;
    document.getElementById('total').textContent = totalFormatado;
    
    // Mostra o rodapé apenas se há itens no carrinho
    rodapeCarrinho.style.display = carrinhoItens.length > 0 ? 'block' : 'none';
}

/**
 * Finaliza o pedido
 */
function finalizarPedido() {
    if (carrinhoItens.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    
    const total = calcularTotal();
    const totalFormatado = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(total);
    
    // Simula o pedido (pode ser integrado com um servidor depois)
    const resumoPedido = carrinhoItens.map(item => 
        `${item.nome} x${item.quantidade} - R$ ${(item.preco * item.quantidade).toFixed(2)}`
    ).join('\n');
    
    alert(`Pedido Finalizado!\n\n${resumoPedido}\n\nTotal: ${totalFormatado}\n\nObrigado por sua compra!`);
    
    // Limpa o carrinho
    carrinhoItens = [];
    atualizarCarrinho();
    
    // Fecha o carrinho
    fecharCarrinho();
}

/**
 * Abre o carrinho modal
 */
function abrirCarrinho() {
    const carrinho = document.getElementById('carrinho');
    const overlay = document.getElementById('overlayCarrinho');
    
    carrinho.classList.add('ativo');
    overlay.classList.add('ativo');
}

/**
 * Fecha o carrinho modal
 */
function fecharCarrinho() {
    const carrinho = document.getElementById('carrinho');
    const overlay = document.getElementById('overlayCarrinho');
    
    carrinho.classList.remove('ativo');
    overlay.classList.remove('ativo');
}
