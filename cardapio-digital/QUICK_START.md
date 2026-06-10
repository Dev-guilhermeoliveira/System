# ⚡ Quick Start - Início Rápido

## 🎯 5 Minutos para Começar

### 1️⃣ Abrir a Aplicação
```bash
# Opção A: Com Python (mais comum)
python -m http.server 8000

# Opção B: Com Node.js
npx http-server -p 8000

# Opção C: Direto (arquivo local)
Clique 2x em index.html
```

**Resultado**: Abra http://localhost:8000 no navegador

### 2️⃣ Testar Funcionalidades
```
✓ Veja os 16 produtos carregarem
✓ Clique em "🍔 Lanches" para filtrar
✓ Digite "pizza" no campo de pesquisa
✓ Clique "Adicionar ao Carrinho"
✓ Clique no botão do carrinho (canto superior direito)
✓ Aumente/diminua quantidades
✓ Clique "Finalizar Pedido"
```

### 3️⃣ Customizar (Opcional)
```
📝 Editar nome do restaurante
   └─ Abra index.html
   └─ Procure por "Seu Restaurante"
   └─ Altere para seu nome

📝 Trocar cores principais
   └─ Abra css/style.css
   └─ Mude #E63946 (vermelho) para sua cor

📝 Adicionar seus produtos
   └─ Abra data/produtos.json
   └─ Adicione novos produtos com mesmo formato
```

## 📁 Arquivos Principais

| Arquivo | Propósito |
|---------|-----------|
| `index.html` | Estrutura HTML |
| `css/style.css` | Estilos e responsividade |
| `js/app.js` | Inicialização |
| `js/produtos.js` | Carregar e filtrar produtos |
| `js/carrinho.js` | Gerenciar carrinho |
| `data/produtos.json` | Base de dados de produtos |

## 🔧 Comandos Úteis

```bash
# Listar conteúdo da pasta
ls -la                    # Mac/Linux
dir                       # Windows

# Parar o servidor
Ctrl + C

# Abrir pasta no VS Code
code .

# Ver arquivo JSON (verificar sintaxe)
cat data/produtos.json    # Mac/Linux
type data\produtos.json   # Windows
```

## 🐛 Se Algo Não Funcionar

| Problema | Solução |
|----------|---------|
| Nada aparece | Use servidor local, não arquivo direto |
| Imagens com erro | Use servidor local (Fetch API) |
| Console com erros (F12) | Verifique caminho dos arquivos |
| Carrinho vazio ao recarregar | Normal! Usar LocalStorage futura |

## 💡 Próximos Passos (Ordem Sugerida)

1. **Hoje**: Adicionar seus produtos em `data/produtos.json`
2. **Hoje**: Customizar nome e cores
3. **Semana 1**: Adicionar imagens reais
4. **Semana 2**: Integrar com WhatsApp ou Email
5. **Semana 3**: Publicar online (Vercel/Netlify)
6. **Futuro**: Banco de dados e painel admin

## 📚 Documentação Completa

| Documento | Para Quem |
|-----------|-----------|
| `README.md` | Visão geral do projeto |
| `GUIA_INSTALACAO.md` | Instalação detalhada |
| `TESTES.md` | Testar funcionalidades |
| `ARQUITETURA.md` | Entender como funciona |

## 🎨 Customizar em 5 Minutos

### Trocar Nome
```html
<!-- index.html - linha 35 -->
<h1 class="nome-restaurante">MEU RESTAURANTE</h1>
```

### Trocar Cor Primária
```css
/* css/style.css - linha 6 */
:root {
    --cor-primaria: #FF0000; /* Vermelho */
    /* Mude para sua cor HEX */
}
```

### Trocar Logo
1. Coloque sua logo em `assets/icones/logo.png`
2. Pronto! Será exibida automaticamente

### Mudar Taxa de Entrega
```javascript
// js/carrinho.js - linha 10
const TAXA_ENTREGA = 10.00; // Altere para seu valor
```

## 🚀 Deploy (Publicar Online)

### Vercel (Recomendado)
```bash
# 1. Instale Vercel CLI
npm install -g vercel

# 2. Faça deploy
vercel

# 3. Pronto! URL será exibida
```

### Netlify
1. Vá para https://netlify.com
2. Clique "New site from Git"
3. Conecte seu repositório GitHub
4. Pronto!

### GitHub Pages
```bash
# Ideal para usar com git
git init
git add .
git commit -m "Cardápio Digital"
git push origin main
# Configure GitHub Pages nas Settings
```

## 📱 Testar no Celular

### Opção 1: Servidor Local
```bash
# Obtenha seu IP
ipconfig getifaddr en0    # Mac
ipconfig                  # Windows

# Acesse de outro dispositivo na mesma rede
http://seu-ip:8000
```

### Opção 2: Online
Publique online e acesse de qualquer lugar

### Opção 3: DevTools
- Abra F12
- Clique em "Toggle Device Toolbar" (Ctrl+Shift+M)
- Selecione um celular

## 💬 Dicas Pro

✅ Sempre use servidor local (não abra arquivo direto)
✅ Organize produtos por categoria
✅ Use imagens de tamanho consistente
✅ Teste em móvel antes de publicar
✅ Guarde backup dos dados
✅ Atualize produtos regularmente

## ⚠️ Limitações Atuais

- Carrinho é perdido ao recarregar (usar LocalStorage)
- Sem autenticação de usuários
- Sem histórico de pedidos
- Sem banco de dados
- Sem forma real de pagamento

👉 Veja `ARQUITETURA.md` para ver como expandir

## 🎓 Aprender Mais

- **HTML5**: https://developer.mozilla.org/en-US/docs/Web/HTML
- **CSS3**: https://developer.mozilla.org/en-US/docs/Web/CSS
- **JavaScript**: https://javascript.info
- **Fetch API**: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

---

**Tudo pronto! Comece a usar e customizar seu cardápio digital! 🎉**
