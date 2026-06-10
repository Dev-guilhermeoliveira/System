# 🧪 Guia de Teste - Cardápio Digital

## ✅ Checklist de Funcionalidades

Siga este guia para testar todas as funcionalidades da aplicação.

### 1. Carregamento de Produtos
- [ ] Abra a página e verifique se os produtos aparecem
- [ ] Deve haver 16 produtos de exemplo em 5 categorias
- [ ] Cada card deve mostrar imagem, nome, descrição e preço

### 2. Filtro por Categoria
- [ ] Clique em "🍔 Lanches" - deve exibir apenas lanches
- [ ] Clique em "🍕 Pizzas" - deve exibir apenas pizzas
- [ ] Clique em "🍟 Porções" - deve exibir apenas porções
- [ ] Clique em "🥤 Bebidas" - deve exibir apenas bebidas
- [ ] Clique em "🍰 Sobremesas" - deve exibir apenas sobremesas
- [ ] Clique em "Todos" - deve exibir todos os produtos

### 3. Pesquisa de Produtos
- [ ] Digite "pizza" no campo de pesquisa
- [ ] Devem aparecer apenas produtos com "pizza" no nome ou descrição
- [ ] Digite "frango" - devem aparecer produtos relacionados
- [ ] Limpe a pesquisa - devem voltar todos os produtos
- [ ] Teste combinação: selecione "Bebidas" + pesquise "água"

### 4. Adicionar ao Carrinho
- [ ] Clique em "Adicionar ao Carrinho" em um produto
- [ ] O contador no botão do carrinho deve aumentar
- [ ] Adicione outro produto - o contador deve aumentar novamente
- [ ] Adicione o mesmo produto novamente - deve aumentar a quantidade

### 5. Abrir/Fechar Carrinho
- [ ] Clique no botão do carrinho (canto superior direito)
- [ ] O modal do carrinho deve deslizar da direita
- [ ] Um overlay escuro deve aparecer
- [ ] Clique no botão X para fechar
- [ ] Clique no overlay escuro para fechar
- [ ] O carrinho deve fechar corretamente

### 6. Gerenciar Itens do Carrinho
- [ ] Adicione 3 produtos diferentes ao carrinho
- [ ] Abra o carrinho
- [ ] Clique no botão "+" para aumentar a quantidade
- [ ] Clique no botão "-" para diminuir a quantidade
- [ ] Clique no botão "✕" para remover um item
- [ ] O item deve ser removido da lista

### 7. Cálculos Financeiros
- [ ] Adicione produtos e verifique o **Subtotal**
- [ ] A **Taxa de Entrega** deve ser sempre R$ 5,00
- [ ] O **Total** deve ser Subtotal + Taxa de Entrega
- [ ] Remova todos os itens - os valores devem zerar

### 8. Finalizar Pedido
- [ ] Adicione alguns produtos ao carrinho
- [ ] Clique em "Finalizar Pedido"
- [ ] Deve aparecer um resumo do pedido com valores
- [ ] O carrinho deve limpar automaticamente
- [ ] O modal deve fechar

### 9. Responsividade (Celular)
- [ ] Abra as ferramentas de desenvolvedor (F12)
- [ ] Selecione um dispositivo móvel (ex: iPhone 12)
- [ ] Verifique se:
  - [ ] O layout se adapta bem
  - [ ] O logo aparece mas o nome do restaurante fica oculto
  - [ ] A barra de pesquisa desaparece
  - [ ] Os produtos aparecem em 2-3 colunas
  - [ ] O carrinho abre em tela cheia

### 10. Responsividade (Tablet)
- [ ] Selecione um tablet (ex: iPad)
- [ ] Verifique:
  - [ ] Layout intermediário
  - [ ] Cards com tamanho apropriado
  - [ ] Funcionalidades normais

### 11. Design e Animações
- [ ] Passe o mouse sobre um card - deve subir e ganhar sombra
- [ ] Passe o mouse sobre botões - devem mudar cor
- [ ] O modal do carrinho deve deslizar suavemente
- [ ] Os cliques nos botões devem ter feedback visual

### 12. Dados Persistentes
- [ ] Carregue a página
- [ ] Adicione alguns produtos ao carrinho
- [ ] Recarregue a página (F5)
- [ ] *Esperado:* O carrinho é limpo (dados em memória)
- [ ] *Futuro:* Implementar LocalStorage para persistência

## 🔧 Testes de Problema (Edge Cases)

### Carrinho Vazio
- [ ] Abra o carrinho sem adicionar produtos
- [ ] Deve exibir "Seu carrinho está vazio"
- [ ] Os resumos financeiros devem estar ocultos
- [ ] O botão "Finalizar Pedido" deve estar desabilitado

### Quantidade Zero
- [ ] Adicione um produto
- [ ] Clique várias vezes no botão "-"
- [ ] Quando chegar a 0, o produto deve ser removido automaticamente

### Pesquisa Sem Resultados
- [ ] Pesquise por "xyz123" (termo que não existe)
- [ ] Deve exibir "Nenhum produto encontrado"
- [ ] Limpe a pesquisa - produtos devem reaparecer

### Filtro + Pesquisa
- [ ] Selecione "Lanches"
- [ ] Pesquise por "pizza"
- [ ] Nenhum produto deve aparecer (lanches não têm pizza)
- [ ] Verifique que o filtro e pesquisa funcionam juntos

## 🚀 Como Executar os Testes

### Opção 1: Servidor Python
```bash
cd C:\Users\rdlgu_cgi3qnp\OneDrive\Desktop\System\cardapio-digital
python -m http.server 8000
# Abra http://localhost:8000 no navegador
```

### Opção 2: Servidor Node.js
```bash
npm install -g http-server
cd C:\Users\rdlgu_cgi3qnp\OneDrive\Desktop\System\cardapio-digital
http-server -p 8000
# Abra http://localhost:8000 no navegador
```

### Opção 3: Abrir arquivo diretamente
```bash
# Windows
start index.html

# Ou apenas abrir a pasta no navegador
```

## 📋 Notas Importantes

1. **Imagens**: Estão usando placeholders via `placeholder.com`. Substitua os URLs em `data/produtos.json` pelas suas imagens reais.

2. **Dados**: O carrinho é armazenado em memória. Se recarregar a página, o carrinho é limpo.

3. **Servidor Local**: É necessário usar um servidor local para que a Fetch API funcione corretamente ao carregar `produtos.json`.

4. **Console do Navegador**: Abra F12 para ver logs de debug e mensagens do console.

## ✨ Funcionando?

Se todos os testes passarem, parabéns! 🎉 Sua aplicação está pronta para:
- Customização com seus produtos e restaurante
- Estilização adicional
- Integração com banco de dados
- Conversão para PWA

---

**Próximos Passos:**
1. Adicione suas imagens de produtos em `assets/imagens/`
2. Atualize o arquivo `data/produtos.json` com seus produtos reais
3. Customize as cores e logo em `css/style.css` e `assets/icones/`
4. Integre com um backend para persistência de dados
