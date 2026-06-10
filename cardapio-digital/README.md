# 🍔 Cardápio Digital

Um sistema moderno e responsivo de cardápio digital para restaurantes, desenvolvido com HTML5, CSS3 e JavaScript puro (ES6+).

## 📋 Funcionalidades

- ✅ **Exibição de Produtos**: Cards com imagem, nome, descrição e preço
- ✅ **Categorização**: Filtros por categorias (Lanches, Pizzas, Porções, Bebidas, Sobremesas)
- ✅ **Pesquisa**: Busca em tempo real por nome ou descrição dos produtos
- ✅ **Carrinho de Compras**: Modal lateral com gerenciamento de itens
- ✅ **Controle de Quantidade**: Aumentar/diminuir quantidade de produtos no carrinho
- ✅ **Cálculo de Valores**: Subtotal, taxa de entrega e total automáticos
- ✅ **Responsividade**: Design Mobile First, compatível com celulares, tablets e desktops
- ✅ **Carregamento Dinâmico**: Produtos carregados via JSON com Fetch API
- ✅ **Design Moderno**: Visual inspirado em aplicativos de delivery

## 🏗️ Estrutura do Projeto

```
cardapio-digital/
│
├── index.html                 # Página principal (HTML)
│
├── css/
│   └── style.css             # Estilos e responsividade
│
├── js/
│   ├── app.js                # Aplicação principal e inicialização
│   ├── produtos.js           # Gerenciamento de produtos
│   └── carrinho.js           # Gerenciamento do carrinho
│
├── data/
│   └── produtos.json         # Base de dados de produtos
│
└── assets/
    ├── imagens/              # Imagens dos produtos
    └── icones/               # Ícones (logo, carrinho)
```

## 🎨 Design & Cores

- **Cor Primária**: #E63946 (Vermelho)
- **Fundo**: #FFFFFF (Branco)
- **Fundo Secundário**: #F5F5F5 (Cinza Claro)
- **Texto**: #333333 (Preto)

## 🚀 Como Usar

### 1. Abrir a Aplicação
Abra o arquivo `index.html` em um navegador web:
```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

Ou usando um servidor local (recomendado):
```bash
# Com Python 3
python -m http.server 8000

# Com Node.js (http-server)
npx http-server
```

### 2. Estrutura do JSON de Produtos

Edite o arquivo `data/produtos.json` para adicionar seus produtos:

```json
{
  "id": 1,
  "nome": "Nome do Produto",
  "descricao": "Descrição breve",
  "preco": 24.90,
  "categoria": "Lanches",
  "imagem": "caminho/para/imagem.jpg"
}
```

**Categorias disponíveis:**
- Lanches
- Pizzas
- Porções
- Bebidas
- Sobremesas

## 📱 Responsividade

A aplicação é otimizada para:
- 📱 **Celulares** (320px a 480px)
- 📱 **Tablets** (481px a 768px)
- 💻 **Desktops** (769px+)

## 🔧 Funções Principais

### Gerenciamento de Produtos (`produtos.js`)

```javascript
carregarProdutos()           // Carrega produtos do JSON
renderizarProdutos(produtos) // Renderiza cards na página
filtrarPorCategoria(cat)     // Filtra por categoria
pesquisarProdutos(termo)     // Pesquisa por termo
aplicarFiltros(cat, termo)   // Aplica filtros combinados
```

### Gerenciamento do Carrinho (`carrinho.js`)

```javascript
adicionarAoCarrinho(produto)      // Adiciona produto ao carrinho
removerDoCarrinho(produtoId)      // Remove produto
atualizarQuantidade(id, qtd)      // Atualiza quantidade
calcularSubtotal()                // Calcula subtotal
calcularTotal()                   // Calcula total com taxa
finalizarPedido()                 // Finaliza o pedido
abrirCarrinho()                   // Abre modal do carrinho
fecharCarrinho()                  // Fecha modal do carrinho
```

### Aplicação Principal (`app.js`)

```javascript
configurarEventListeners()    // Configura todos os eventos
```

## 🔐 Armazenamento de Dados

Atualmente, o carrinho é armazenado em **memória (JavaScript)**. Para futuros desenvolvimentos:

- **LocalStorage**: Persistir carrinho no navegador
- **Backend com Banco de Dados**: Sincronizar com servidor
- **PWA**: Funcionar offline com Service Workers

## 🛠️ Desenvolvimento Futuro

- [ ] Integração com banco de dados
- [ ] Painel administrativo para gerenciar produtos
- [ ] Sistema de autenticação de usuários
- [ ] Histórico de pedidos
- [ ] Múltiplas opções de pagamento
- [ ] Localização do restaurante (Google Maps)
- [ ] Avaliações e comentários
- [ ] PWA - Instalação em celulares
- [ ] Push notifications
- [ ] Dark Mode
- [ ] Multi-idiomas

## 💡 Exemplos de Customização

### Alterar Nome do Restaurante
Abra `index.html` e procure por:
```html
<h1 class="nome-restaurante">Seu Restaurante</h1>
```

### Alterar Logo
Substitua o arquivo `assets/icones/logo.png` pela sua logo

### Alterar Cores
Edite as variáveis CSS em `css/style.css`:
```css
:root {
    --cor-primaria: #E63946;
    --cor-branca: #FFFFFF;
    /* ... */
}
```

### Adicionar Taxa de Entrega Diferente
Em `js/carrinho.js`:
```javascript
const TAXA_ENTREGA = 5.00; // Alterar valor
```

## 📚 Tecnologias Utilizadas

- **HTML5**: Semântica e estrutura
- **CSS3**: Flexbox, Grid, Media Queries
- **JavaScript ES6+**: Classes, Arrow Functions, Promises
- **Fetch API**: Carregamento de dados

## 🤝 Contribuições

Este é um projeto de código aberto. Sinta-se livre para:
- Reportar bugs
- Sugerir melhorias
- Fazer fork e enviar pull requests

## 📄 Licença

Este projeto está disponível sob a licença MIT.

## 👨‍💻 Autor

Desenvolvido como um sistema escalável e moderno para restaurantes.

---

**Dúvidas ou Sugestões?** Contribua com o projeto! 🎉
