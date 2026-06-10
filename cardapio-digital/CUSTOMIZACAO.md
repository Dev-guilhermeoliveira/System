# 🎨 CUSTOMIZAÇÃO - Template de Alterações

Use este arquivo para registrar as customizações que você vai fazer.

## 📝 Informações do Seu Restaurante

```
Nome: ___________________________________
Endereço: ________________________________
Telefone: ________________________________
Email: __________________________________
WhatsApp: _______________________________
Website: ________________________________
```

## 🎯 Checklist de Customização

### Passo 1: Informações Básicas
- [ ] Nome do restaurante alterado em `index.html`
- [ ] Logo substituída em `assets/icones/logo.png`
- [ ] Endereço/telefone atualizados (se usar em futura feature)

### Passo 2: Produtos
- [ ] Todos os 16 produtos de exemplo removidos do `data/produtos.json`
- [ ] Seus produtos adicionados (mínimo 10 recomendado)
- [ ] Imagens em `assets/imagens/` ou URLs externas
- [ ] Preços validados
- [ ] Categorias organizadas

### Passo 3: Design
- [ ] Cores principais customizadas em `css/style.css`
- [ ] Fonte alterada (se desejado)
- [ ] Logo e ícones substituídos
- [ ] Taxa de entrega atualizada em `js/carrinho.js`

### Passo 4: Funcionalidades (Opcional)
- [ ] WhatsApp integration (adicionar em `app.js`)
- [ ] Email notifications (backend futuro)
- [ ] LocalStorage para persistência (adicionar em `carrinho.js`)

### Passo 5: Testes
- [ ] Testar no desktop
- [ ] Testar no tablet (768px)
- [ ] Testar no mobile (480px)
- [ ] Testar filtros
- [ ] Testar pesquisa
- [ ] Testar carrinho
- [ ] Verificar console (F12) para erros

### Passo 6: Deploy
- [ ] Escolher plataforma (Vercel/Netlify/GitHub)
- [ ] Publicar projeto
- [ ] Compartilhar link
- [ ] Comunicar aos clientes

## 📋 Exemplo de Produto Customizado

Antes (padrão):
```json
{
  "id": 1,
  "nome": "X-Burger",
  "descricao": "Hambúrguer artesanal com queijo e bacon",
  "preco": 24.90,
  "categoria": "Lanches",
  "imagem": "https://via.placeholder.com/300x200?text=X-Burger"
}
```

Depois (customizado):
```json
{
  "id": 1,
  "nome": "X-Especial do Chef",
  "descricao": "Hambúrguer artesanal com queijo derretido, bacon crocante e molho especial",
  "preco": 29.90,
  "categoria": "Lanches",
  "imagem": "assets/imagens/x-especial.jpg"
}
```

## 🎨 Cores Personalizadas

Copie sua cor em hexadecimal e cole em `css/style.css`:

```css
:root {
    --cor-primaria: #E63946;      ← Altere aqui (cor principal)
    --cor-branca: #FFFFFF;        ← Normalmente não muda
    --cor-cinza-claro: #F5F5F5;   ← Fundo secundário
    --cor-cinza-escuro: #666666;  ← Texto secundário
    --cor-preto: #333333;         ← Texto principal
}
```

**Ferramentas para escolher cores:**
- Google Color Picker
- https://colorpicker.com/
- https://www.colorhexa.com/

## 📸 Adicionando Imagens de Produtos

### Opção 1: Imagens Locais
```
1. Coloque imagens em: assets/imagens/
2. Nomeie como: produto1.jpg, produto2.jpg
3. Em produtos.json use: "imagem": "assets/imagens/produto1.jpg"
```

### Opção 2: URLs Externas
```
1. Hospede em: Imgur, Cloudinary, AWS S3, etc
2. Em produtos.json use: "imagem": "https://exemplo.com/produto1.jpg"
3. Vantagem: não ocupa espaço do servidor
```

### Opção 3: Placeholder Online
```
Enquanto não tiver imagens, use:
"imagem": "https://via.placeholder.com/300x200?text=Seu+Produto"
```

### Recomendações
- Tamanho: 300x200px (proporção 3:2)
- Formato: JPG ou PNG
- Peso: <100KB por imagem
- Compactar com: tinypng.com

## 📱 Testar Responsividade

### Ferramenta Built-in
1. Abra no navegador
2. Pressione `F12` (Ferramentas de Dev)
3. Clique em "Toggle Device Toolbar" (Ctrl+Shift+M)
4. Selecione diferentes dispositivos

### Dispositivos para Testar
- [ ] iPhone 12 (390x844)
- [ ] iPad (768x1024)
- [ ] Galaxy S20 (360x800)
- [ ] Desktop 1920x1080
- [ ] Desktop 1366x768

## ✅ Checklist Pre-Launch

### Funcionalidade
- [ ] Produtos carregam corretamente
- [ ] Filtros funcionam
- [ ] Pesquisa funciona
- [ ] Carrinho adiciona/remove
- [ ] Cálculos estão corretos
- [ ] Sem erros no console (F12)

### Design
- [ ] Cores estão certas
- [ ] Logo aparece
- [ ] Imagens carregam
- [ ] Responsivo em mobile
- [ ] Botões funcionam ao clicar

### Dados
- [ ] Todos os 10+ produtos adicionados
- [ ] Preços corretos
- [ ] Categorias organizadas
- [ ] Descrições adequadas
- [ ] Imagens de boa qualidade

### Performance
- [ ] Página carrega em <3s
- [ ] Imagens otimizadas
- [ ] Sem console warnings
- [ ] Mobile rápido

## 🔗 Integrações Futuras

### WhatsApp (Recomendado)
```javascript
// Adicionar no finalizarPedido() em carrinho.js
const numeroWhatsApp = "5511999999999";
const mensagem = `Novo pedido: ${resumoPedido}`;
window.open(`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`);
```

### Email (Backend necessário)
```javascript
// Futuramente
fetch('/api/enviar-email', {
  method: 'POST',
  body: JSON.stringify({ pedido: carrinhoItens })
});
```

### LocalStorage (Para salvar carrinho)
```javascript
// Adicionar no atualizarCarrinho() em carrinho.js
localStorage.setItem('carrinho', JSON.stringify(carrinhoItens));

// Adicionar no DOMContentLoaded de app.js
const carrinhoSalvo = localStorage.getItem('carrinho');
if (carrinhoSalvo) carrinhoItens = JSON.parse(carrinhoSalvo);
```

## 📊 Métricas Para Rastrear

Use Google Analytics (futuro):
```
- Produtos mais clicados
- Taxa de conversão (visualizações → carrinho)
- Tempo médio na página
- Dispositivos mais usados
- Taxa de rejeição
```

## 🚀 Plano de Publicação

### Semana 1
- [ ] Customizar nome, logo, cores
- [ ] Adicionar 15+ produtos
- [ ] Testar localmente
- [ ] Fazer primeira publicação

### Semana 2
- [ ] Coletar feedback
- [ ] Corrigir problemas
- [ ] Melhorar descrições
- [ ] Otimizar imagens

### Semana 3+
- [ ] Integrar com WhatsApp
- [ ] Adicionar mais produtos
- [ ] Analytics
- [ ] Marketing

## 📞 Suporte Durante Customização

Se tiver problemas:
1. Verifique `QUICK_START.md`
2. Verifique `GUIA_INSTALACAO.md`
3. Abra F12 para ver erros
4. Procure por sintaxe JSON em https://jsonlint.com/

## 💾 Backup

Antes de fazer mudanças grandes:
```bash
# Copiar pasta inteira
cp -r cardapio-digital cardapio-digital-backup

# Ou zippar
zip -r cardapio-backup.zip cardapio-digital/
```

## 🎉 Pronto!

Quando terminar a customização:
1. Teste tudo novamente
2. Faça deploy
3. Compartilhe com amigos
4. Comece a receber pedidos!

---

**Última atualização**: Hoje
**Próxima revisão**: Após primeira semana de uso
