# 🍔 API REST - Cardápio Digital Backend

API REST completa para gerenciamento de produtos de cardápio digital, desenvolvida com **Node.js**, **Express** e **MySQL**.

## 🏗️ Estrutura do Projeto

```
backend/
├── server.js                    ← Servidor principal
├── package.json                 ← Dependências
│
├── database/
│   └── conexao.js              ← Conexão MySQL
│
├── routes/
│   └── produtosRoutes.js        ← Definição de rotas
│
├── controllers/
│   └── produtosController.js    ← Lógica das requisições
│
└── models/
    └── produtoModel.js          ← Operações de banco
```

## 🛠️ Tecnologias

- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **MySQL2** - Driver MySQL com promises
- **CORS** - Compartilhamento de recursos
- **Nodemon** - Auto-reload em desenvolvimento

## 📋 Pré-requisitos

1. **Node.js** instalado (v14+)
2. **MySQL** instalado e rodando
3. **Banco de dados** criado: `cardapio_digital`
4. **Tabela** produtos criada

### Criar Banco e Tabela

```sql
-- Criar banco de dados
CREATE DATABASE IF NOT EXISTS cardapio_digital;
USE cardapio_digital;

-- Criar tabela
CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    categoria_id INT NOT NULL,
    nome VARCHAR(255) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10, 2) NOT NULL,
    imagem VARCHAR(500),
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    atualizado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Inserir produtos de exemplo
INSERT INTO produtos (categoria_id, nome, descricao, preco, imagem) VALUES
(1, 'X-Burger', 'Hambúrguer artesanal com queijo e bacon', 24.90, 'https://via.placeholder.com/300x200?text=X-Burger'),
(1, 'Sanduíche Natural', 'Pão integral com frango grelhado', 18.50, 'https://via.placeholder.com/300x200?text=Sanduiche'),
(2, 'Pizza Margherita', 'Tomate, mozzarela e manjericão', 35.90, 'https://via.placeholder.com/300x200?text=Pizza'),
(3, 'Batata Frita', 'Batata frita com tempero especial', 12.90, 'https://via.placeholder.com/300x200?text=Batata'),
(4, 'Refrigerante', 'Refrigerante gelado 350ml', 5.90, 'https://via.placeholder.com/300x200?text=Refrigerante'),
(5, 'Sorvete', 'Sorvete com calda de chocolate', 13.90, 'https://via.placeholder.com/300x200?text=Sorvete');
```

## 🚀 Instalação e Setup

### 1. Ir para pasta do backend
```bash
cd backend
```

### 2. Instalar dependências
```bash
npm install
```

### 3. Verificar arquivo package.json
```bash
# Deve conter:
npm install express mysql2 cors nodemon
```

### 4. Iniciar servidor

**Em desenvolvimento (com auto-reload):**
```bash
npm run dev
```

**Em produção:**
```bash
npm start
```

### 5. Testar a conexão

Abra no navegador:
```
http://localhost:3000
```

Você deve ver:
```json
{
  "mensagem": "API Cardápio Digital",
  "versao": "1.0.0",
  "endpoints": { ... }
}
```

## 📡 Endpoints da API

### GET /produtos
**Obter todos os produtos**

```bash
curl http://localhost:3000/produtos
```

**Resposta (200 OK):**
```json
{
  "sucesso": true,
  "mensagem": "6 produtos encontrados",
  "dados": [
    {
      "id": 1,
      "categoria_id": 1,
      "nome": "X-Burger",
      "descricao": "Hambúrguer artesanal",
      "preco": 24.90,
      "imagem": "..."
    }
  ],
  "total": 6
}
```

---

### GET /produtos/:id
**Obter um produto específico**

```bash
curl http://localhost:3000/produtos/1
```

**Resposta (200 OK):**
```json
{
  "sucesso": true,
  "mensagem": "Produto encontrado",
  "dados": {
    "id": 1,
    "categoria_id": 1,
    "nome": "X-Burger",
    "descricao": "Hambúrguer artesanal",
    "preco": 24.90,
    "imagem": "..."
  }
}
```

**Resposta (404 Not Found):**
```json
{
  "sucesso": false,
  "mensagem": "Produto não encontrado.",
  "dados": null
}
```

---

### POST /produtos
**Criar um novo produto**

```bash
curl -X POST http://localhost:3000/produtos \
  -H "Content-Type: application/json" \
  -d '{
    "categoria_id": 1,
    "nome": "Novo Produto",
    "descricao": "Descrição do produto",
    "preco": 29.90,
    "imagem": "https://exemplo.com/imagem.jpg"
  }'
```

**Resposta (201 Created):**
```json
{
  "sucesso": true,
  "mensagem": "Produto criado com sucesso",
  "dados": {
    "id": 7,
    "categoria_id": 1,
    "nome": "Novo Produto",
    "descricao": "Descrição do produto",
    "preco": 29.90,
    "imagem": "..."
  }
}
```

---

### PUT /produtos/:id
**Atualizar um produto**

```bash
curl -X PUT http://localhost:3000/produtos/1 \
  -H "Content-Type: application/json" \
  -d '{
    "categoria_id": 1,
    "nome": "X-Burger Premium",
    "descricao": "Hambúrguer artesanal premium",
    "preco": 29.90,
    "imagem": "..."
  }'
```

**Resposta (200 OK):**
```json
{
  "sucesso": true,
  "mensagem": "Produto atualizado com sucesso",
  "dados": {
    "id": 1,
    "categoria_id": 1,
    "nome": "X-Burger Premium",
    "descricao": "Hambúrguer artesanal premium",
    "preco": 29.90,
    "imagem": "..."
  }
}
```

---

### DELETE /produtos/:id
**Deletar um produto**

```bash
curl -X DELETE http://localhost:3000/produtos/1
```

**Resposta (200 OK):**
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

## 🔧 Estrutura de Resposta

Todas as respostas seguem o padrão:

```json
{
  "sucesso": true,      // boolean
  "mensagem": "...",    // string
  "dados": {},          // object | array | null
  "total": 0            // number (opcional)
}
```

## 🔐 Códigos de Status HTTP

| Código | Significado |
|--------|-------------|
| 200 | OK - Sucesso |
| 201 | Created - Criado |
| 400 | Bad Request - Requisição inválida |
| 404 | Not Found - Não encontrado |
| 500 | Server Error - Erro do servidor |

## 🧪 Testar com Postman

1. Abra **Postman**
2. Configure as requisições:

### GET todos os produtos
- Método: `GET`
- URL: `http://localhost:3000/produtos`

### GET um produto
- Método: `GET`
- URL: `http://localhost:3000/produtos/1`

### POST novo produto
- Método: `POST`
- URL: `http://localhost:3000/produtos`
- Body (JSON):
```json
{
  "categoria_id": 1,
  "nome": "Novo Produto",
  "descricao": "Descrição",
  "preco": 25.90,
  "imagem": "url-da-imagem"
}
```

### PUT atualizar
- Método: `PUT`
- URL: `http://localhost:3000/produtos/1`
- Body (JSON): mesmo formato do POST

### DELETE
- Método: `DELETE`
- URL: `http://localhost:3000/produtos/1`

## 📝 Arquivos Importantes

| Arquivo | Função |
|---------|--------|
| `server.js` | Inicializa Express e rotas |
| `database/conexao.js` | Cria pool de conexões MySQL |
| `models/produtoModel.js` | Operações de banco |
| `controllers/produtosController.js` | Lógica de negócio |
| `routes/produtosRoutes.js` | Definição de endpoints |

## 🐛 Troubleshooting

### Erro: "ECONNREFUSED - Conexão recusada"
MySQL não está rodando. Verifique:
```bash
# Windows
# Abra Services e procure por MySQL

# Linux
sudo systemctl start mysql

# Mac
brew services start mysql
```

### Erro: "Access denied for user 'root'@'localhost'"
Senha incorreta em `database/conexao.js`. Verifique credenciais.

### Erro: "Unknown database 'cardapio_digital'"
Crie o banco de dados (veja seção Pré-requisitos).

### Porta 3000 já em uso
Mude a porta em `server.js`:
```javascript
const PORT = 3001; // ou outra porta
```

## 📚 Documentação Completa

Ver arquivos:
- `README_BACKEND.md` - Esta documentação
- `../README.md` - Documentação geral
- Comentários no código (linhas começam com `//`)

## 🚀 Próximas Etapas

1. ✅ API REST funcionando
2. ⏳ Integrar com frontend
3. ⏳ Adicionar autenticação
4. ⏳ Implementar validações avançadas
5. ⏳ Adicionar testes automatizados

---

**API pronta para uso!** 🎉
