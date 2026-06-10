# 📚 ÍNDICE DE ARQUIVOS - CARDÁPIO DIGITAL

## 🗂️ Estrutura Completa

```
cardapio-digital/
├── index.html                    ← Abra isto no navegador
├── README.md                     ← Documentação técnica
├── QUICK_START.md                ← Guia de 5 minutos
├── GUIA_INSTALACAO.md            ← Instalação detalhada
├── TESTES.md                     ← Testar funcionalidades
├── ARQUITETURA.md                ← Diagramas e fluxos
├── INDICE.md                     ← Este arquivo
│
├── 📁 css/
│   └── style.css                 ← Estilos e responsividade
│
├── 📁 js/
│   ├── app.js                    ← Inicialização
│   ├── produtos.js               ← Gerenciar produtos
│   └── carrinho.js               ← Gerenciar carrinho
│
├── 📁 data/
│   └── produtos.json             ← Dados de produtos
│
└── 📁 assets/
    └── 📁 icones/
        ├── logo.png              ← Logo do restaurante
        └── carrinho.png          ← Ícone do carrinho
```

## 📄 Descrição dos Arquivos

### 🌐 Arquivos HTML
| Arquivo | Tamanho | Descrição |
|---------|---------|-----------|
| `index.html` | 4.1 KB | Página principal com toda a estrutura |

### 🎨 Arquivos CSS
| Arquivo | Tamanho | Descrição |
|---------|---------|-----------|
| `css/style.css` | 13.9 KB | Estilos, cores, responsividade |

### ⚙️ Arquivos JavaScript
| Arquivo | Tamanho | Funções Principais |
|---------|---------|-------------------|
| `js/app.js` | 2.3 KB | `configurarEventListeners()` |
| `js/produtos.js` | 4.7 KB | `carregarProdutos()`, `renderizarProdutos()`, `filtrarPorCategoria()`, `pesquisarProdutos()`, `aplicarFiltros()` |
| `js/carrinho.js` | 7.7 KB | `adicionarAoCarrinho()`, `atualizarCarrinho()`, `calcularTotal()`, `finalizarPedido()` |

### 💾 Arquivos de Dados
| Arquivo | Tamanho | Descrição |
|---------|---------|-----------|
| `data/produtos.json` | 3.7 KB | 16 produtos de exemplo em 5 categorias |

### 🖼️ Ativos
| Arquivo | Tipo | Descrição |
|---------|------|-----------|
| `assets/icones/logo.png` | SVG | Logo do restaurante |
| `assets/icones/carrinho.png` | SVG | Ícone do carrinho |

### 📖 Documentação
| Arquivo | Público | Conteúdo |
|---------|---------|----------|
| `README.md` | ✅ | Visão geral, funcionalidades, tecnologias |
| `QUICK_START.md` | ✅ | Começar em 5 minutos |
| `GUIA_INSTALACAO.md` | ✅ | Setup passo a passo |
| `TESTES.md` | ✅ | Checklist de testes |
| `ARQUITETURA.md` | ✅ | Diagramas e arquitetura |
| `INDICE.md` | ✅ | Este arquivo |

## 🎯 Por Onde Começar?

### Usuários Iniciantes
1. **QUICK_START.md** - 5 minutos para começar
2. Abra a aplicação no navegador
3. Teste as funcionalidades

### Desenvolvedores
1. **README.md** - Entender o projeto
2. **ARQUITETURA.md** - Ver como funciona
3. Explore o código em `js/`
4. **TESTES.md** - Validar tudo

### Admins/Customização
1. **GUIA_INSTALACAO.md** - Seção "Customizar para seu restaurante"
2. Altere `index.html` (nome, logo)
3. Atualize `data/produtos.json` (produtos)
4. Customize `css/style.css` (cores)

## 🔄 Fluxo de Leitura Recomendado

```
Usuário Novo?
    ↓
Ler: QUICK_START.md (5 min)
    ↓
Executar: python -m http.server 8000
    ↓
Testar: Adicionar produto, abrir carrinho
    ↓
Customizar: Nome, cores, produtos
    ↓
Ler: README.md para detalhes técnicos
    ↓
Publicar: Online (Vercel/Netlify)
```

## 📊 Estatísticas dos Arquivos

| Categoria | Total | Detalhes |
|-----------|-------|----------|
| **HTML** | 1 arquivo | 4.1 KB |
| **CSS** | 1 arquivo | 13.9 KB |
| **JavaScript** | 3 arquivos | 14.7 KB |
| **Dados (JSON)** | 1 arquivo | 3.7 KB |
| **Documentação** | 6 arquivos | ~30 KB |
| **Ativos** | 2 arquivos | 0.5 KB |
| **TOTAL** | **14 arquivos** | **~55 KB** |

## 🔑 Funções JavaScript Principais

### produtos.js
```javascript
carregarProdutos()           // Carrega JSON
renderizarProdutos()         // Exibe cards
filtrarPorCategoria()        // Filtra por tipo
pesquisarProdutos()          // Busca
aplicarFiltros()             // Combina filtros
```

### carrinho.js
```javascript
adicionarAoCarrinho()        // Adiciona produto
removerDoCarrinho()          // Remove produto
atualizarQuantidade()        // Muda quantidade
calcularSubtotal()           // Soma valores
calcularTotal()              // Subtotal + taxa
atualizarCarrinho()          // Atualiza UI
finalizarPedido()            // Conclui pedido
abrirCarrinho()              // Abre modal
fecharCarrinho()             // Fecha modal
```

### app.js
```javascript
configurarEventListeners()   // Configura eventos
```

## 🎨 Estrutura CSS

```css
:root {}                     /* Variáveis de cores */
*                           /* Reset global */
body                        /* Estilo base */
.cabecalho                  /* Topo da página */
.categorias                 /* Filtros */
.grid-produtos              /* Grid de cards */
.card-produto               /* Card de produto */
.carrinho-modal             /* Modal do carrinho */
.item-carrinho              /* Item no carrinho */
@media                      /* Responsividade */
```

## 🌐 Elementos HTML Principais

| ID/Classe | Tipo | Função |
|-----------|------|--------|
| `#inputPesquisa` | Input | Busca de produtos |
| `#botaoCarro` | Button | Abre carrinho |
| `#containerProdutos` | Div | Grid de produtos |
| `#carrinho` | Aside | Modal do carrinho |
| `.botao-categoria` | Button | Filtros |
| `.card-produto` | Div | Card individual |
| `.item-carrinho` | Div | Item no carrinho |

## 🚀 Variáveis Globais

```javascript
produtosGlobal[]             // Array de produtos
carrinhoItens[]              // Array do carrinho
TAXA_ENTREGA                 // Valor fixa (R$ 5)
```

## 🔐 Eventos Configurados

| Elemento | Evento | Função |
|----------|--------|--------|
| `#inputPesquisa` | input | `aplicarFiltros()` |
| `.botao-categoria` | click | `aplicarFiltros()` |
| `.botao-adicionar` | click | `adicionarAoCarrinho()` |
| `#botaoCarro` | click | `abrirCarrinho()` |
| `#fecharCarrinho` | click | `fecharCarrinho()` |
| `.botao-quantidade` | click | `atualizarQuantidade()` |
| `.botao-remover-item` | click | `removerDoCarrinho()` |
| `#finalizarPedido` | click | `finalizarPedido()` |

## 📱 Breakpoints Responsivos

```css
Desktop:   769px+           /* Layout completo */
Tablet:    481px - 768px    /* Layout intermediário */
Mobile:    320px - 480px    /* Layout comprimido */
```

## 🎯 Checklist de Arquivos

Verifique se todos estão presentes:

- [x] index.html
- [x] css/style.css
- [x] js/app.js
- [x] js/produtos.js
- [x] js/carrinho.js
- [x] data/produtos.json
- [x] assets/icones/logo.png
- [x] assets/icones/carrinho.png
- [x] README.md
- [x] QUICK_START.md
- [x] GUIA_INSTALACAO.md
- [x] TESTES.md
- [x] ARQUITETURA.md
- [x] INDICE.md (este arquivo)

## 🔗 Relações Entre Arquivos

```
index.html
  ├── css/style.css          (estilos)
  ├── js/produtos.js         (carrega JSON)
  ├── js/carrinho.js         (gerencia carrinho)
  └── js/app.js              (inicializa)

data/produtos.json           (carregado por produtos.js)

assets/icones/
  ├── logo.png               (exibido em index.html)
  └── carrinho.png           (exibido em index.html)
```

## 💡 Próximas Adições Recomendadas

```
assets/imagens/              (suas imagens)
├── produto1.jpg
├── produto2.jpg
└── ...

js/utils.js                  (funções auxiliares)
js/storage.js                (LocalStorage)
api/                         (backend futura)
```

## 📞 Arquivos para Diferentes Públicos

**Clientes:**
- ➜ index.html (usar)
- ➜ README.md (ler)

**Proprietários:**
- ➜ QUICK_START.md (começar)
- ➜ GUIA_INSTALACAO.md (customizar)

**Desenvolvedores:**
- ➜ ARQUITETURA.md (entender)
- ➜ js/* (código)
- ➜ README.md (specs)

**Testadores:**
- ➜ TESTES.md (validar)
- ➜ index.html (testar)

---

**Arquivo atualizado em**: 2024
**Versão do Projeto**: 1.0
**Status**: ✅ Completo e funcional
