# ⚡ Quick Start - Backend API

## 🚀 Começar em 5 Minutos

### 1. Criar Banco de Dados MySQL

Abra seu MySQL e execute:

```sql
CREATE DATABASE cardapio_digital;
USE cardapio_digital;

CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    categoria_id INT NOT NULL,
    nome VARCHAR(255) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10, 2) NOT NULL,
    imagem VARCHAR(500)
);

INSERT INTO produtos (categoria_id, nome, descricao, preco) VALUES
(1, 'X-Burger', 'Hambúrguer artesanal', 24.90),
(1, 'Sanduíche', 'Pão integral com frango', 18.50),
(2, 'Pizza', 'Margherita fresca', 35.90);
```

### 2. Instalar Dependências

```bash
cd backend
npm install
```

### 3. Iniciar Servidor

```bash
npm run dev
```

Você deve ver:
```
✅ Conexão com MySQL estabelecida com sucesso!
🚀 Servidor rodando em http://localhost:3000
```

### 4. Testar API

**Terminal (usando curl):**
```bash
# Listar todos
curl http://localhost:3000/produtos

# Criar novo
curl -X POST http://localhost:3000/produtos \
  -H "Content-Type: application/json" \
  -d '{"categoria_id": 1, "nome": "Novo", "descricao": "Desc", "preco": 29.90}'

# Atualizar
curl -X PUT http://localhost:3000/produtos/1 \
  -H "Content-Type: application/json" \
  -d '{"categoria_id": 1, "nome": "Atualizado", "descricao": "Desc", "preco": 30.90}'

# Deletar
curl -X DELETE http://localhost:3000/produtos/1
```

**Navegador:**
```
http://localhost:3000/produtos
```

## 📦 Estrutura de Arquivos

```
backend/
├── server.js                 ← INICIAR AQUI
├── package.json              ← Dependências
├── database/conexao.js       ← MySQL connection
├── models/produtoModel.js    ← DB operations
├── controllers/              ← Request handling
└── routes/produtosRoutes.js  ← API endpoints
```

## 🔧 Comandos Úteis

```bash
# Desenvolvimento (auto-reload)
npm run dev

# Produção
npm start

# Instalar novo pacote
npm install package-name

# Ver processos rodando
netstat -ano | findstr :3000  # Windows
lsof -i :3000                 # Mac/Linux

# Parar servidor
Ctrl + C
```

## ✅ Checklist

- [ ] MySQL instalado e rodando
- [ ] Banco `cardapio_digital` criado
- [ ] Tabela `produtos` criada
- [ ] Node.js v14+ instalado
- [ ] Dependências instaladas (`npm install`)
- [ ] Servidor rodando (`npm run dev`)
- [ ] API respondendo (http://localhost:3000)

## 💡 Endpoints Rápidos

| Método | URL | Função |
|--------|-----|--------|
| GET | `http://localhost:3000/produtos` | Listar todos |
| GET | `http://localhost:3000/produtos/1` | Um produto |
| POST | `http://localhost:3000/produtos` | Criar |
| PUT | `http://localhost:3000/produtos/1` | Atualizar |
| DELETE | `http://localhost:3000/produtos/1` | Deletar |

## 🆘 Problemas Comuns

**Porta 3000 em uso:**
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID [PID] /F

# Mac/Linux
lsof -i :3000
kill -9 [PID]
```

**MySQL não conecta:**
- Verifique credenciais em `database/conexao.js`
- Certifique-se que MySQL está rodando
- Use porta 3306 (padrão)

**Erro "Unknown database":**
```sql
CREATE DATABASE cardapio_digital;
```

---

**Pronto para usar! 🎉**
