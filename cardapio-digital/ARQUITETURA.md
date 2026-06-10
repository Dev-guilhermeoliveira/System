# 🏗️ Arquitetura e Fluxo da Aplicação

## 📊 Diagrama de Fluxo

```
┌─────────────────────────────────────────────────────────────────────────┐
│                          CARDÁPIO DIGITAL                              │
│                                                                         │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │                        PÁGINA INICIAL                           │  │
│  │  ┌────────────────────────────────────────────────────────────┐ │  │
│  │  │  CABEÇALHO (Sticky)                                        │ │  │
│  │  │  ┌─────────────┐  ┌────────────────────┐  ┌────────────┐ │ │  │
│  │  │  │ Logo + Nome │  │ Barra de Pesquisa  │  │ Btn Carrinho│ │ │  │
│  │  │  └─────────────┘  └────────────────────┘  └────────────┘ │ │  │
│  │  └────────────────────────────────────────────────────────────┘ │  │
│  │  ┌────────────────────────────────────────────────────────────┐ │  │
│  │  │  FILTROS (Sticky)                                          │ │  │
│  │  │  [Todos] [🍔 Lanches] [🍕 Pizzas] [🍟 Porções] ...        │ │  │
│  │  └────────────────────────────────────────────────────────────┘ │  │
│  │                                                                  │  │
│  │  ┌────────────────────────────────────────────────────────────┐ │  │
│  │  │  GRID DE PRODUTOS                                          │ │  │
│  │  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │ │  │
│  │  │  │ [Card 1]     │  │ [Card 2]     │  │ [Card 3]     │ ... │ │  │
│  │  │  │ Imagem       │  │ Imagem       │  │ Imagem       │     │ │  │
│  │  │  │ Nome         │  │ Nome         │  │ Nome         │     │ │  │
│  │  │  │ Descrição    │  │ Descrição    │  │ Descrição    │     │ │  │
│  │  │  │ Preço        │  │ Preço        │  │ Preço        │     │ │  │
│  │  │  │ [Adicionar]  │  │ [Adicionar]  │  │ [Adicionar]  │     │ │  │
│  │  │  └──────────────┘  └──────────────┘  └──────────────┘     │ │  │
│  │  └────────────────────────────────────────────────────────────┘ │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                         │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │  CARRINHO MODAL (Lado Direito)                                  │  │
│  │  ┌────────────────────────────────────────────────────────────┐ │  │
│  │  │  Meu Carrinho                                              │ │  │
│  │  │  ┌──────────────────────────────────────────────────────┐ │ │  │
│  │  │  │ [Item 1]  Qnt: [−] 2 [+]  [✕]                      │ │ │  │
│  │  │  │ [Item 2]  Qnt: [−] 1 [+]  [✕]                      │ │ │  │
│  │  │  │ [Item 3]  Qnt: [−] 3 [+]  [✕]                      │ │ │  │
│  │  │  └──────────────────────────────────────────────────────┘ │ │  │
│  │  │                                                            │ │  │
│  │  │  Subtotal:         R$ XX,XX                              │ │  │
│  │  │  Taxa Entrega:     R$ 5,00                               │ │  │
│  │  │  ─────────────────────────                               │ │  │
│  │  │  TOTAL:            R$ XX,XX                              │ │  │
│  │  │                                                            │ │  │
│  │  │  [FINALIZAR PEDIDO]                                       │ │  │
│  │  └────────────────────────────────────────────────────────────┘ │  │
│  └──────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────┘
```

## 🔄 Fluxo de Dados

```
                    ┌──────────────────────┐
                    │ produtos.json        │
                    │ (16 produtos)        │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │ carregarProdutos()   │ (JS)
                    │ (Fetch API)          │
                    └──────────┬───────────┘
                               │
                    ┌──────────▼───────────┐
                    │ produtosGlobal[]     │ (Variável)
                    │ (Array em memória)   │
                    └──────────┬───────────┘
                               │
            ┌──────────────────┼──────────────────┐
            │                  │                  │
            ▼                  ▼                  ▼
    ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
    │ Filtrar      │  │ Pesquisar    │  │ Renderizar   │
    │ Categoria    │  │ Termo        │  │ (exibir)     │
    └──────┬───────┘  └──────┬───────┘  └──────┬───────┘
           │                  │                  │
           └──────────────────┼──────────────────┘
                              │
                    ┌─────────▼──────────┐
                    │ containerProdutos  │ (DOM)
                    │ Cards HTML         │
                    └────────────────────┘
                              │
                    ┌─────────▼──────────────────┐
                    │ Clique no botão "Adicionar"│
                    └─────────┬──────────────────┘
                              │
                    ┌─────────▼──────────────────┐
                    │ adicionarAoCarrinho()      │ (JS)
                    └─────────┬──────────────────┘
                              │
                    ┌─────────▼──────────────────┐
                    │ carrinhoItens[]            │ (Variável)
                    │ (Array em memória)         │
                    └─────────┬──────────────────┘
                              │
                    ┌─────────▼──────────────────┐
                    │ atualizarCarrinho()        │ (JS)
                    └─────────┬──────────────────┘
                              │
            ┌─────────────────┼─────────────────┐
            │                 │                 │
            ▼                 ▼                 ▼
    ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
    │ Atualizar    │  │ Renderizar   │  │ Calcular     │
    │ Contador     │  │ Lista Itens  │  │ Totais       │
    └──────────────┘  └──────────────┘  └──────────────┘
            │                 │                 │
            └─────────────────┼─────────────────┘
                              │
                    ┌─────────▼──────────────────┐
                    │ carrinho-modal (DOM)       │
                    │ com itens, valores         │
                    └────────────────────────────┘
                              │
                    ┌─────────▼──────────────────┐
                    │ Clique "Finalizar Pedido"  │
                    └─────────┬──────────────────┘
                              │
                    ┌─────────▼──────────────────┐
                    │ finalizarPedido()          │ (JS)
                    │ - Mostra resumo            │
                    │ - Limpa carrinho           │
                    │ - Fecha modal              │
                    └────────────────────────────┘
```

## 🔌 Arquitetura de Módulos

```
┌─────────────────────────────────────────────────────────┐
│                    DOCUMENTO HTML                       │
│                    (index.html)                         │
└─────────────────────────────────────────────────────────┘
                          │
         ┌────────────────┼────────────────┐
         │                │                │
         ▼                ▼                ▼
    ┌─────────┐      ┌──────────┐    ┌──────────┐
    │ style   │      │ produtos │    │ carrinho │
    │ .css    │      │ .js      │    │ .js      │
    │         │      │          │    │          │
    │ Estilos │      │ Lógica   │    │ Lógica   │
    │ Design  │      │ Produtos │    │ Carrinho │
    └─────────┘      └──────────┘    └──────────┘
                          │
                          ▼
                    ┌──────────────┐
                    │  app.js      │
                    │              │
                    │ Orquestrador │
                    │ - Inicializa │
                    │ - Listeners  │
                    └──────────────┘
```

## 📱 Estados e Interações

### Estado do Carrinho
```javascript
carrinhoItens = [
  { id: 1, nome: "X-Burger", preco: 24.90, quantidade: 2, imagem: "..." },
  { id: 3, nome: "Pizza Margherita", preco: 35.90, quantidade: 1, imagem: "..." },
  ...
]
```

### Estados da Aplicação
- **Inicial**: Produtos carregados, carrinho vazio
- **Filtrando**: Usuário seleciona categoria ou pesquisa
- **Adicionando**: Produto é adicionado ao carrinho
- **Atualizando**: Quantidade aumenta/diminui
- **Removendo**: Item é removido do carrinho
- **Finalizando**: Pedido é enviado, carrinho limpo

## 🎯 Pontos de Interação (Event Listeners)

```
DOM Element                          Evento          Função
─────────────────────────────────────────────────────────────
#inputPesquisa                       input           aplicarFiltros()
.botao-categoria                     click           aplicarFiltros()
.botao-adicionar                     click           adicionarAoCarrinho()
#botaoCarro                          click           abrirCarrinho()
#fecharCarrinho                      click           fecharCarrinho()
#overlayCarrinho                     click           fecharCarrinho()
.botao-quantidade (−)                click           atualizarQuantidade()
.botao-quantidade (+)                click           atualizarQuantidade()
.botao-remover-item                  click           removerDoCarrinho()
#finalizarPedido                     click           finalizarPedido()
```

## 💾 Armazenamento de Dados

### Em Memória (Atual)
- `produtosGlobal[]` - Array de produtos
- `carrinhoItens[]` - Array de itens no carrinho

**⚠️ Problema**: Dados perdidos ao recarregar a página

### Recomendado Futuramente
```javascript
// LocalStorage - Persiste no navegador
localStorage.setItem('carrinho', JSON.stringify(carrinhoItens));
const carrinhoSalvo = JSON.parse(localStorage.getItem('carrinho'));

// Backend - Sincroniza com servidor
fetch('/api/carrinho', {
  method: 'POST',
  body: JSON.stringify(carrinhoItens)
});
```

## 🔐 Segurança

✅ **Implementado**:
- Sem dados sensíveis em cliente
- Validação de quantidades
- Cálculos no frontend (para UX)

⚠️ **Futuro - Implementar**:
- Validação no backend
- HTTPS obrigatório
- Autenticação de usuários
- Proteção de pagamentos

## 🚀 Escalabilidade

### Para pequenos restaurantes
- Usar produtos.json estático
- LocalStorage para carrinho
- Deploy em Vercel/Netlify

### Para crescer
- Adicionar backend (Node.js, Python, etc)
- Banco de dados (MongoDB, PostgreSQL)
- Sistema de usuários
- Histórico de pedidos
- Painel administrativo

### Para grande volume
- Cache (Redis)
- CDN para imagens
- Microsserviços
- Message Queue
- Analytics

---

**Diagrama pronto para ser expandido e melhorado!** 📈
