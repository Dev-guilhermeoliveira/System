# 📖 Guia de Instalação e Configuração

## 🎯 Requisitos do Sistema

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (Python 3.x, Node.js, ou similar)
- Editor de texto (VS Code recomendado)

## 📦 Arquivos Inclusos

O projeto já vem completo com todos os arquivos necessários:

```
cardapio-digital/
├── index.html                 ← Página principal
├── README.md                  ← Documentação completa
├── GUIA_INSTALACAO.md         ← Este arquivo
├── TESTES.md                  ← Checklist de testes
│
├── css/
│   └── style.css             ← Estilos CSS (13.9 KB)
│
├── js/
│   ├── app.js                ← Inicialização (2.3 KB)
│   ├── produtos.js           ← Gerenciamento de produtos (4.7 KB)
│   └── carrinho.js           ← Gerenciamento do carrinho (7.7 KB)
│
├── data/
│   └── produtos.json         ← 16 produtos de exemplo (3.7 KB)
│
└── assets/
    └── icones/
        ├── logo.png
        └── carrinho.png
```

**Total**: 9 arquivos, ~45 KB (sem contar imagens de produtos)

## 🚀 Passo 1: Executar a Aplicação

### Opção A: Com Python (Recomendado)

```bash
# Abra o terminal/prompt na pasta do projeto
cd C:\Users\rdlgu_cgi3qnp\OneDrive\Desktop\System\cardapio-digital

# Inicie o servidor
python -m http.server 8000

# Abra no navegador
# http://localhost:8000
```

### Opção B: Com Node.js

```bash
# Instale http-server (primeira vez apenas)
npm install -g http-server

# Vá para a pasta do projeto
cd C:\Users\rdlgu_cgi3qnp\OneDrive\Desktop\System\cardapio-digital

# Inicie o servidor
http-server -p 8000

# Abra no navegador
# http://localhost:8000
```

### Opção C: Direto no Navegador

Clique duas vezes em `index.html` ou arraste para seu navegador.

⚠️ **Nota**: Esta opção pode ter limitações com Fetch API. Use as opções A ou B para melhor compatibilidade.

## ⚙️ Passo 2: Customizar para seu Restaurante

### 2.1 Alterar Nome e Logo

**Arquivo: `index.html`**

Procure por:
```html
<h1 class="nome-restaurante">Seu Restaurante</h1>
<img src="assets/icones/logo.png" alt="Logo" class="logo">
```

E altere para o nome e caminho da sua logo.

### 2.2 Adicionar Seus Produtos

**Arquivo: `data/produtos.json`**

Estrutura de cada produto:
```json
{
  "id": 1,
  "nome": "Nome do Produto",
  "descricao": "Descrição curta do produto",
  "preco": 29.90,
  "categoria": "Lanches",
  "imagem": "https://seu-dominio.com/imagem.jpg"
}
```

**Categorias disponíveis:**
- Lanches
- Pizzas
- Porções
- Bebidas
- Sobremesas

**Exemplo completo:**
```json
[
  {
    "id": 1,
    "nome": "X-Tudo",
    "descricao": "Hambúrguer artesanal com tudo",
    "preco": 28.90,
    "categoria": "Lanches",
    "imagem": "assets/imagens/x-tudo.jpg"
  },
  {
    "id": 2,
    "nome": "Pizza Margherita",
    "descricao": "Tomate, mozzarela, manjericão",
    "preco": 39.90,
    "categoria": "Pizzas",
    "imagem": "https://exemplo.com/pizza-margherita.jpg"
  }
]
```

### 2.3 Adicionar Imagens

1. Coloque suas imagens em `assets/imagens/`
2. Atualize os caminhos em `data/produtos.json`
3. Use URLs absolutas ou relativas:
   - Relativa: `"assets/imagens/nome.jpg"`
   - Absoluta: `"https://seu-dominio.com/imagens/nome.jpg"`

### 2.4 Personalizar Cores

**Arquivo: `css/style.css`**

No início do arquivo, encontre:
```css
:root {
    --cor-primaria: #E63946;      /* Vermelho principal */
    --cor-branca: #FFFFFF;         /* Branco */
    --cor-cinza-claro: #F5F5F5;    /* Fundo cinzento */
    --cor-cinza-escuro: #666666;   /* Texto secundário */
    --cor-preto: #333333;          /* Texto principal */
}
```

Altere os valores HEX para as cores desejadas. Ferramentas úteis:
- https://www.colorhexa.com/
- https://colorpicker.com/

### 2.5 Alterar Taxa de Entrega

**Arquivo: `js/carrinho.js`**

Procure por:
```javascript
const TAXA_ENTREGA = 5.00;
```

E altere para o valor desejado.

## 🌐 Passo 3: Publicar Online

### Opção A: Hospedagem Estática (Recomendado)

Plataformas gratuitas:
- **Vercel** (https://vercel.com)
- **Netlify** (https://netlify.com)
- **GitHub Pages** (https://pages.github.com)
- **Firebase Hosting** (https://firebase.google.com/hosting)

### Opção B: Servidor Web Próprio

Se tiver um servidor:
1. Faça upload via FTP
2. Configure seu domínio
3. Adicione certificado SSL (HTTPS)

### Opção C: Serviço de Hospedagem

- **Hostinger**
- **Bluehost**
- **SiteGround**

## 🔌 Passo 4: Próximas Integrações

### LocalStorage (Persistir Carrinho)

Edite `js/carrinho.js` para adicionar:
```javascript
// No final de atualizarCarrinho()
localStorage.setItem('carrinho', JSON.stringify(carrinhoItens));

// No início de app.js
window.addEventListener('DOMContentLoaded', () => {
    const carrinhoSalvo = localStorage.getItem('carrinho');
    if (carrinhoSalvo) {
        carrinhoItens = JSON.parse(carrinhoSalvo);
    }
});
```

### Integração com Backend

Altere a chamada em `produtos.js`:
```javascript
async function carregarProdutos() {
    const resposta = await fetch('https://seu-api.com/produtos');
    // Resto do código...
}
```

### Sistema de Pagamento

Adicione bibliotecas como:
- Stripe
- PayPal
- MercadoPago

### WhatsApp

Integre bot de WhatsApp para receber pedidos:
```javascript
const numeroWhatsApp = '5511999999999';
const mensagem = encodeURIComponent('Novo pedido: ' + resumoPedido);
window.open(`https://wa.me/${numeroWhatsApp}?text=${mensagem}`);
```

## 🧪 Validação

Antes de publicar, teste:

✅ Todos os produtos carregam corretamente
✅ Filtros funcionam
✅ Pesquisa funciona
✅ Carrinho adiciona/remove itens
✅ Cálculos estão corretos
✅ Responsivo em celular
✅ Imagens carregam
✅ Nenhum erro no console (F12)

Veja `TESTES.md` para checklist completo.

## 🐛 Troubleshooting

### "Erro ao carregar produtos"
- Verifique se `data/produtos.json` existe
- Certifique-se de estar usando um servidor local
- Abra F12 e veja a aba "Network" para mais detalhes

### Imagens não carregam
- Verifique se o caminho está correto
- Use caminho absoluto se em servidor diferente
- Certifique-se que a imagem existe

### Carrinho não funciona
- Abra F12 (Console) e procure por erros
- Verifique se `js/carrinho.js` está carregando
- Limpe o cache do navegador (Ctrl+Shift+Delete)

### Design quebrado
- Certifique-se que `css/style.css` foi carregado
- Verifique compatibilidade do navegador
- Limpe cache (Ctrl+F5)

## 📚 Recursos Úteis

- **MDN Web Docs**: https://developer.mozilla.org
- **CSS Tricks**: https://css-tricks.com
- **JavaScript.info**: https://javascript.info
- **Can I Use**: https://caniuse.com

## 💬 Suporte

Para dúvidas:
1. Verifique o arquivo `README.md`
2. Abra F12 para ver logs e erros
3. Consulte a documentação das tecnologias usadas

## ✨ Próximos Passos Recomendados

1. ✅ Execute e teste a aplicação
2. ✅ Customize com seus dados
3. ✅ Adicione suas imagens de produtos
4. ✅ Publique online
5. ✅ Integre com sistemas de pagamento
6. ✅ Configure notificações (WhatsApp/Email)
7. ✅ Implemente banco de dados
8. ✅ Converta para PWA

---

**Parabéns! Seu cardápio digital está pronto para ser personalizado!** 🎉
