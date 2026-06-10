# 🚀 GUIA COMPLETO - API REST CARDÁPIO DIGITAL

## 📋 Resumo Executivo

Você tem agora uma **API REST profissional** para gerenciar produtos de cardápio digital:

- ✅ **Backend completo** com Node.js + Express
- ✅ **Banco de dados** MySQL configurado
- ✅ **5 Endpoints REST** funcionais (CRUD)
- ✅ **Código organizado** em camadas (MVC)
- ✅ **Pronto para produção**

---

## 🎯 Passo 1: Preparar Banco de Dados (5 min)

### 1.1 Abrir MySQL

**Windows:**
```bash
mysql -u root -p
```

**Mac:**
```bash
mysql -u root -p
```

**Ou use MySQL Workbench**

### 1.2 Executar Script SQL

```sql
-- Copie TODO o conteúdo de: backend/database/init.sql
-- E cole no terminal MySQL
```

**Resultado esperado:**
```
✅ Database 'cardapio_digital' criado
✅ Tabela 'categorias' criada
✅ Tabela 'produtos' criada
✅ 18 produtos de exemplo inseridos
```

Verificar:
```sql
USE cardapio_digital;
SELECT * FROM produtos;
```

---

## 💻 Passo 2: Instalar Dependências (2 min)

### 2.1 Abrir Terminal/PowerShell

### 2.2 Ir para pasta backend

```bash
cd C:\Users\rdlgu_cgi3qnp\OneDrive\Desktop\System\cardapio-digital\backend
```

### 2.3 Instalar packages

```bash
npm install
```

Ou, se preferir passo a passo:

```bash
npm init -y
npm install express mysql2 cors
npm install --save-dev nodemon
```

**Arquivo package.json será criado automaticamente**

---

## 🚀 Passo 3: Iniciar Servidor (1 min)

### 3.1 Modo Desenvolvimento (com auto-reload)

```bash
npm run dev
```

**Você verá:**
```
✅ Conexão com MySQL estabelecida com sucesso!
🍔 SERVIDOR CARDÁPIO DIGITAL - RODANDO!
🚀 Servidor rodando em http://localhost:3000
📚 Endpoints disponíveis:
   GET  http://localhost:3000/produtos
   GET  http://localhost:3000/produtos/:id
   POST http://localhost:3000/produtos
   PUT  http://localhost:3000/produtos/:id
   DELETE http://localhost:3000/produtos/:id
💡 Pressione Ctrl+C para parar o servidor
```

### 3.2 Modo Produção

```bash
npm start
```

---

## 🧪 Passo 4: Testar API (5 min)

### 4.1 Teste 1: No Navegador

Abra:
```
http://localhost:3000
```

Você verá:
```json
{
  "mensagem": "API Cardápio Digital",
  "versao": "1.0.0",
  "endpoints": {...}
}
```

### 4.2 Teste 2: Listar Produtos

Navegador:
```
http://localhost:3000/produtos
```

Resposta:
```json
{
  "sucesso": true,
  "mensagem": "18 produtos encontrados",
  "dados": [
    {
      "id": 1,
      "categoria_id": 1,
      "nome": "X-Burger",
      "descricao": "Hambúrguer artesanal com queijo e bacon",
      "preco": 24.90,
      "imagem": "..."
    }
  ],
  "total": 18
}
```

### 4.3 Teste 3: Com Postman

[Postman](https://www.postman.com/) - Ferramenta visual para testar APIs

1. Abra Postman
2. Crie nova requisição
3. Configure:
   - Método: GET
   - URL: http://localhost:3000/produtos
4. Clique "Send"

### 4.4 Teste 4: Com CURL (Terminal)

```bash
# Listar todos os produtos
curl http://localhost:3000/produtos

# Obter produto ID 1
curl http://localhost:3000/produtos/1

# Criar novo produto
curl -X POST http://localhost:3000/produtos \
  -H "Content-Type: application/json" \
  -d '{
    "categoria_id": 1,
    "nome": "Novo Lanche",
    "descricao": "Descrição do novo lanche",
    "preco": 27.50
  }'

# Atualizar produto ID 1
curl -X PUT http://localhost:3000/produtos/1 \
  -H "Content-Type: application/json" \
  -d '{
    "categoria_id": 1,
    "nome": "X-Burger Premium",
    "descricao": "Versão premium",
    "preco": 32.90
  }'

# Deletar produto ID 1
curl -X DELETE http://localhost:3000/produtos/1
```

---

## 📡 Referência de Endpoints

### GET /produtos
**Listar todos os produtos**

```bash
curl http://localhost:3000/produtos
```

**Resposta 200:**
```json
{
  "sucesso": true,
  "mensagem": "18 produtos encontrados",
  "dados": [...],
  "total": 18
}
```

---

### GET /produtos/:id
**Obter um produto**

```bash
curl http://localhost:3000/produtos/1
```

**Resposta 200:**
```json
{
  "sucesso": true,
  "mensagem": "Produto encontrado",
  "dados": {
    "id": 1,
    "categoria_id": 1,
    "nome": "X-Burger",
    ...
  }
}
```

**Resposta 404:**
```json
{
  "sucesso": false,
  "mensagem": "Produto não encontrado.",
  "dados": null
}
```

---

### POST /produtos
**Criar novo produto**

```bash
curl -X POST http://localhost:3000/produtos \
  -H "Content-Type: application/json" \
  -d '{
    "categoria_id": 1,
    "nome": "Novo Produto",
    "descricao": "Descrição",
    "preco": 25.50,
    "imagem": "https://exemplo.com/imagem.jpg"
  }'
```

**Campos obrigatórios:**
- categoria_id (número)
- nome (texto)
- descricao (texto)
- preco (número com até 2 casas decimais)

**Resposta 201:**
```json
{
  "sucesso": true,
  "mensagem": "Produto criado com sucesso",
  "dados": {
    "id": 19,
    "categoria_id": 1,
    "nome": "Novo Produto",
    ...
  }
}
```

---

### PUT /produtos/:id
**Atualizar produto**

```bash
curl -X PUT http://localhost:3000/produtos/1 \
  -H "Content-Type: application/json" \
  -d '{
    "categoria_id": 1,
    "nome": "Nome Atualizado",
    "descricao": "Descrição atualizada",
    "preco": 29.90,
    "imagem": "https://exemplo.com/nova-imagem.jpg"
  }'
```

**Resposta 200:**
```json
{
  "sucesso": true,
  "mensagem": "Produto atualizado com sucesso",
  "dados": {...}
}
```

---

### DELETE /produtos/:id
**Deletar produto**

```bash
curl -X DELETE http://localhost:3000/produtos/1
```

**Resposta 200:**
```json
{
  "sucesso": true,
  "mensagem": "Produto deletado com sucesso",
  "dados": {
    "id": 1
  }
}
```

---

## 🏗️ Estrutura de Arquivos Explicada

```
backend/
├── server.js
│   └── Arquivo principal que inicia Express
│       • Configura middleware
│       • Carrega rotas
│       • Testa conexão MySQL
│       • Inicia servidor porta 3000
│
├── database/
│   ├── conexao.js
│   │   └── Cria pool de conexões MySQL
│   │       • Configurações do banco
│   │       • Testa conexão
│   │       • Exporta pool
│   │
│   └── init.sql
│       └── Script para criar tabelas
│           • Categorias
│           • Produtos (18 exemplos)
│
├── models/
│   └── produtoModel.js
│       └── Operações de banco de dados
│           • obterTodosProdutos()
│           • obterProdutoPorId()
│           • criarProduto()
│           • atualizarProduto()
│           • deletarProduto()
│
├── controllers/
│   └── produtosController.js
│       └── Lógica de requisições HTTP
│           • Validação de entrada
│           • Chamada de models
│           • Formatação de resposta
│           • Tratamento de erros
│
├── routes/
│   └── produtosRoutes.js
│       └── Define endpoints
│           GET /produtos
│           GET /produtos/:id
│           POST /produtos
│           PUT /produtos/:id
│           DELETE /produtos/:id
│
└── package.json
    └── Dependências do projeto
        express, mysql2, cors, nodemon
```

---

## 🔄 Fluxo de uma Requisição

```
Navegador/Client
    │
    ├─ GET /produtos
    │
    ▼
server.js (middleware)
    │
    ├─ Parse JSON
    ├─ CORS
    │
    ▼
routes/produtosRoutes.js
    │
    ├─ Identifica rota
    ├─ Chama controller
    │
    ▼
controllers/produtosController.js
    │
    ├─ Valida entrada
    ├─ Chama model
    │
    ▼
models/produtoModel.js
    │
    ├─ Execute SQL
    ├─ Conecta MySQL
    ├─ Busca dados
    │
    ▼
database/conexao.js
    │
    ├─ Pool de conexões
    ├─ Executa query
    │
    ▼
MySQL (banco)
    │
    ├─ SELECT * FROM produtos
    │
    ▼
Resposta volta
    │
    ├─ Model → Controller → Routes → Server → JSON
    │
    ▼
Cliente recebe
    │
    └─ JSON com dados
```

---

## 🐛 Solução de Problemas

### ❌ Erro: "Error: getaddrinfo ENOTFOUND localhost"

**Causa:** MySQL não está rodando

**Solução:**
```bash
# Windows - abra Services e inicie MySQL
# Mac
brew services start mysql

# Linux
sudo systemctl start mysql
```

### ❌ Erro: "Access denied for user 'root'@'localhost'"

**Causa:** Senha incorreta

**Solução:**
1. Abra: `backend/database/conexao.js`
2. Verifique: `password: 'masterkey'`
3. Altere se necessário

### ❌ Erro: "Unknown database 'cardapio_digital'"

**Causa:** Banco não foi criado

**Solução:**
1. Abra MySQL
2. Execute: `backend/database/init.sql`
3. Verifique: `SHOW DATABASES;`

### ❌ Erro: "Port 3000 is already in use"

**Causa:** Outra aplicação usando porta 3000

**Solução:**
1. Edite: `backend/server.js`
2. Mude: `const PORT = 3001;`
3. Restart servidor

### ❌ Erro: "npm: command not found"

**Causa:** Node.js não instalado

**Solução:**
1. Baixe: https://nodejs.org/
2. Instale
3. Reinicie terminal
4. Teste: `node --version`

---

## 📚 Arquivos de Documentação

| Arquivo | Conteúdo |
|---------|----------|
| `README_BACKEND.md` | Documentação completa |
| `QUICK_START_BACKEND.md` | Guia rápido (5 min) |
| `database/init.sql` | Script SQL |
| `.env.example` | Variáveis de ambiente |

---

## 🎓 Próximas Etapas

### 1. Integrar com Frontend
Conecte seu frontend HTML/JS (cardápio-digital/index.html) a esta API

### 2. Adicionar Autenticação
Implemente login/senha para admin

### 3. Validações Avançadas
- Verificar disponibilidade
- Controlar estoque
- Histórico de preços

### 4. Melhorias
- Paginação
- Filtros avançados
- Busca por texto
- Ordenação

### 5. Deploy
- Heroku
- AWS
- DigitalOcean
- Seu servidor

---

## 📞 Recursos Úteis

- **Documentação Express**: https://expressjs.com/
- **Documentação MySQL**: https://dev.mysql.com/doc/
- **Postman**: https://www.postman.com/
- **Node.js Docs**: https://nodejs.org/docs/

---

## ✅ Checklist Final

- [ ] MySQL instalado e rodando
- [ ] Banco `cardapio_digital` criado
- [ ] Script SQL executado
- [ ] Node.js instalado
- [ ] npm install executado
- [ ] npm run dev funcionando
- [ ] http://localhost:3000 respondendo
- [ ] Endpoints testados
- [ ] Todos os testes passando

---

## 🎉 Parabéns!

Sua **API REST profissional** está pronta!

Agora você pode:
✅ Gerenciar produtos
✅ Conectar frontend
✅ Expandir funcionalidades
✅ Publicar em produção

**Sucesso no desenvolvimento!** 🚀
