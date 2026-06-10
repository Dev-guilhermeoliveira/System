# ⚡ COMO ACESSAR O CARDÁPIO DIGITAL

## 🚀 OPÇÃO 1: Arquivo Automático (MAIS FÁCIL)

1. **Clique 2x** no arquivo: `INICIAR_SERVIDOR.bat`
2. Uma janela preta (Command Prompt) vai abrir
3. Abra seu navegador
4. Cole: `http://localhost:8000`
5. Pressione ENTER

✅ **Pronto!** O cardápio vai aparecer

---

## 🖥️ OPÇÃO 2: Command Prompt Manual

1. **Abra o Command Prompt** (Press `Win + R`, digite `cmd`, Enter)

2. **Copie e cole este comando:**
```
python -m http.server 8000
```

3. Pressione ENTER

4. Você deve ver:
```
Serving HTTP on 0.0.0.0 port 8000...
```

5. Abra navegador: `http://localhost:8000`

---

## ⚙️ OPÇÃO 3: PowerShell

1. **Clique direito** na pasta do projeto
2. Selecione: "Open PowerShell here"
3. Digite:
```powershell
python -m http.server 8000
```
4. Abra: `http://localhost:8000`

---

## ❌ SE NÃO FUNCIONAR:

### Problema: "Conexão recusada"
**Solução 1**: Verifique se digitou certo
- ✅ `http://localhost:8000` (correto)
- ❌ `https://localhost:8000` (errado - note o https)
- ❌ `localhost:8000` (falta http://)

**Solução 2**: Tente usar IP em vez de localhost
- Digite: `http://127.0.0.1:8000`

**Solução 3**: Tente outra porta
```
python -m http.server 8080
# Depois acesse: http://localhost:8080
```

### Problema: "Porta 8000 já em uso"
**Solução**: Use outra porta
```
python -m http.server 3000
# Depois acesse: http://localhost:3000
```

### Problema: "Python não encontrado"
**Solução**: 
1. Abra Command Prompt (cmd)
2. Digite: `python --version`
3. Se não aparecer a versão:
   - Reinstale Python: https://www.python.org/downloads/
   - Marque: "Add Python to PATH"
   - Reinicie o computador

### Problema: Erro de permissão
**Solução**:
1. Feche o Command Prompt
2. Clique direito e escolha: "Run as administrator"
3. Tente novamente

---

## 🎯 O QUE VOCÊ DEVE VER

Quando acessar `http://localhost:8000`, você verá:

```
┌─────────────────────────────────────────────┐
│  [Logo]  Seu Restaurante    [Pesquisa] 🛒  │
├─────────────────────────────────────────────┤
│ [Todos] [🍔] [🍕] [🍟] [🥤] [🍰]            │
├─────────────────────────────────────────────┤
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │ X-Burger │  │ Pizza    │  │ Batata   │  │
│  │  R$ 24.90│  │ R$ 35.90 │  │ R$ 12.90 │  │
│  │ [Adicionar] │ [Adicionar] │ [Adicionar] │
│  └──────────┘  └──────────┘  └──────────┘  │
│  ... mais produtos ...                      │
└─────────────────────────────────────────────┘
```

---

## 💡 DICAS

✅ **Deixe o Command Prompt aberto** enquanto usar o cardápio
✅ **Recarregue a página** (F5) se algo não aparecer
✅ **Abra F12** para ver erros no console
✅ **Teste no seu telefone**: Use `http://[seu-IP]:8000`

---

## 🎉 FUNCIONANDO?

Se conseguiu acessar, parabéns! 🎊

Agora você pode:
- ✅ Testar as funcionalidades
- ✅ Customizar nome e cores
- ✅ Adicionar seus produtos
- ✅ Publicar online

Leia o arquivo `QUICK_START.md` para as próximas etapas!

---

## 🆘 AINDA COM PROBLEMAS?

Tente este comando no PowerShell (mais simples):

```powershell
python -m http.server
```

Ele vai usar a porta 8000 automaticamente.

Ou use este endereço no navegador:

- `http://localhost:8000`
- `http://127.0.0.1:8000`
- `http://[seu-ip]:8000` (para telefone)

Se continuar com problema, verifique:
1. Python está instalado? Digite: `python --version`
2. Pasta correta? `cd cardapio-digital`
3. Arquivo index.html existe? Clique na pasta e procure

---

**Qualquer dúvida, volte a chamar! 🚀**
