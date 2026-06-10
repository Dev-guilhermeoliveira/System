# 🚀 LOCALHOST - GUIA PASSO A PASSO

## ⚠️ IMPORTANTE: Seu projeto tem DOIS servidores!

```
┌─────────────────────────────────────────────────────┐
│ VOCÊ TEM 2 COISAS SEPARADAS:                       │
├─────────────────────────────────────────────────────┤
│ 1️⃣ FRONTEND (HTML/CSS/JS)                          │
│    └─ Localização: raiz do projeto                │
│    └─ Porta: 8000 (Python) ou 3000 (outro)       │
│    └─ Acesso: http://localhost:8000               │
│                                                   │
│ 2️⃣ BACKEND API (Node.js/Express)                  │
│    └─ Localização: /backend                       │
│    └─ Porta: 3000                                 │
│    └─ Acesso: http://localhost:3000               │
│    └─ Precisa MySQL instalado                    │
└─────────────────────────────────────────────────────┘
```

---

## OPÇÃO 1: SÓ FRONTEND (Recomendado para começar)

### Passo 1: Abrir Terminal

**Windows:**
1. Clique em `INICIAR_SERVIDOR.bat` na pasta do projeto
   OU
2. Pressione `Win + R`, digite `cmd` e aperte Enter

**Mac/Linux:**
```bash
# Terminal já está aberto
```

### Passo 2: Navegar até a pasta

```bash
cd C:\Users\rdlgu_cgi3qnp\OneDrive\Desktop\System\cardapio-digital
```

Você verá:
```
C:\Users\rdlgu_cgi3qnp\OneDrive\Desktop\System\cardapio-digital>
```

### Passo 3: Iniciar o servidor Python

```bash
python -m http.server 8000
```

Você verá:
```
Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
```

### Passo 4: Abrir no navegador

Copie e cole no navegador:
```
http://localhost:8000
```

✅ **PRONTO!** Seu cardápio digital está rodando!

---

## OPÇÃO 2: FRONTEND + BACKEND (Completo)

Este processo é mais complexo. Precisa de:
- ✅ MySQL instalado e rodando
- ✅ Node.js instalado
- ✅ npm instalado

### 🟡 PRÉ-REQUISITOS

Verifique se você tem Node.js instalado:

```bash
node --version
npm --version
```

Se não tiver, baixe em: https://nodejs.org/

---

### PARTE A: Preparar o MySQL

#### Passo A.1: Verificar se MySQL está rodando

**Windows:**
1. Abra Services: `Win + R` → `services.msc` → Enter
2. Procure por "MySQL" na lista
3. Se estiver vermelho, clique com botão direito → Start

**Mac:**
```bash
brew services start mysql
```

**Linux:**
```bash
sudo service mysql start
```

#### Passo A.2: Criar o banco de dados

Abra uma nova janela do terminal e execute:

```bash
mysql -u root -p
```

Se pedir senha, digite: `masterkey`

Você verá:
```
mysql>
```

Cole e execute esta linha:

```sql
source backend/database/init.sql;
```

Se funcionou, verá:
```
Query OK, 18 rows affected
```

Saia do MySQL digitando:
```
exit
```

---

### PARTE B: Iniciar o Backend (Node.js)

#### Passo B.1: Instalar dependências

Abra NOVO terminal e execute:

```bash
cd C:\Users\rdlgu_cgi3qnp\OneDrive\Desktop\System\cardapio-digital\backend
npm install
```

Vai demorar 1-2 minutos. Você verá:
```
added XX packages
```

#### Passo B.2: Iniciar o servidor

No mesmo terminal, execute:

```bash
npm run dev
```

Se tudo funcionou, verá:
```
✅ Conexão com MySQL estabelecida com sucesso!
🚀 Servidor rodando em http://localhost:3000
```

#### Passo B.3: Testar a API

Abra outro terminal e execute:

```bash
curl http://localhost:3000/produtos
```

Se funcionar, verá um JSON com os produtos!

---

### PARTE C: Iniciar o Frontend

Abra NOVO terminal e execute:

```bash
cd C:\Users\rdlgu_cgi3qnp\OneDrive\Desktop\System\cardapio-digital
python -m http.server 8000
```

---

### PARTE D: Acessar tudo

Abra 3 abas do navegador:

1. **Frontend:** http://localhost:8000
2. **API:** http://localhost:3000/produtos
3. **Saúde da API:** http://localhost:3000/saude

---

## 🆘 PROBLEMAS COMUNS

### ❌ Erro: "Porta 8000 já em uso"

**Solução:**
Mateme o processo que está usando a porta:

```bash
# Windows
netstat -ano | find "8000"
taskkill /PID XXXX /F

# Mac/Linux
lsof -i :8000
kill -9 <PID>
```

Ou use outra porta:
```bash
python -m http.server 9000
```
Depois acesse: `http://localhost:9000`

---

### ❌ Erro: "Porta 3000 já em uso"

**Solução:**
```bash
# Windows
netstat -ano | find "3000"
taskkill /PID XXXX /F

# Mac/Linux
lsof -i :3000
kill -9 <PID>
```

---

### ❌ Erro: "Não consigo conectar ao MySQL"

**Solução:**

1. Verifique se MySQL está rodando:
   - Windows: Services (services.msc)
   - Mac: `brew services list | grep mysql`
   - Linux: `service mysql status`

2. Verifique credenciais em `backend/database/conexao.js`:
   ```
   user: 'root'
   password: 'masterkey'
   database: 'cardapio_digital'
   ```

3. Se não funcionou, execute novamente:
   ```bash
   mysql -u root -p
   source backend/database/init.sql;
   exit
   ```

---

### ❌ Erro: "Python não encontrado"

**Solução:**

Use Node.js para servir o frontend:

```bash
npm install -g http-server
http-server . --port 8000
```

---

### ❌ Frontend não carrega produtos

**Solução:**

Edite `frontend/js/produtos.js` linha 7:

Mude de:
```javascript
fetch('data/produtos.json')
```

Para:
```javascript
fetch('http://localhost:3000/produtos')
```

Salve e recarregue o navegador.

---

## ✅ CHECKLIST FINAL

- [ ] Terminal aberto
- [ ] Naveguei até a pasta correta
- [ ] Digitei o comando certo
- [ ] Vi a mensagem de sucesso
- [ ] Abri http://localhost:8000 ou http://localhost:3000
- [ ] Vejo o cardápio digital!

---

## 📞 TESTE RÁPIDO (Copia e Cola)

### 1️⃣ Só Frontend (30 segundos):

**Janela 1:**
```bash
cd C:\Users\rdlgu_cgi3qnp\OneDrive\Desktop\System\cardapio-digital
python -m http.server 8000
```

**Navegador:**
```
http://localhost:8000
```

### 2️⃣ Frontend + Backend (2 minutos):

**Janela 1 - MySQL:**
```bash
mysql -u root -p
source backend/database/init.sql;
exit
```

**Janela 2 - Backend:**
```bash
cd C:\Users\rdlgu_cgi3qnp\OneDrive\Desktop\System\cardapio-digital\backend
npm install
npm run dev
```

**Janela 3 - Frontend:**
```bash
cd C:\Users\rdlgu_cgi3qnp\OneDrive\Desktop\System\cardapio-digital
python -m http.server 8000
```

**Navegador:**
```
http://localhost:8000
http://localhost:3000/produtos
```

---

## 💡 DICA FINAL

Se está confuso, comece simples:

1. Clique em `INICIAR_SERVIDOR.bat`
2. Abra `http://localhost:8000`
3. Se funcionar, depois integra o backend

Sucesso! 🎉
