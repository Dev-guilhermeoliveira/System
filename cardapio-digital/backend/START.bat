@echo off
echo 🍔 Cardapio Digital - Backend
echo.
echo ✅ API REST criada com sucesso!
echo.
echo 📂 Estrutura:
echo    backend/
echo    ├── server.js (porta 3000)
echo    ├── database/conexao.js (MySQL)
echo    ├── models/produtoModel.js
echo    ├── controllers/produtosController.js
echo    ├── routes/produtosRoutes.js
echo    └── package.json
echo.
echo 🚀 Para começar:
echo.
echo    1. MySQL:
echo       $ mysql -u root -p
echo       > source backend/database/init.sql
echo.
echo    2. Instalar:
echo       $ cd backend
echo       $ npm install
echo.
echo    3. Executar:
echo       $ npm run dev
echo.
echo 📡 Endpoints:
echo    GET    /produtos
echo    GET    /produtos/:id
echo    POST   /produtos
echo    PUT    /produtos/:id
echo    DELETE /produtos/:id
echo.
echo 📚 Documentação:
echo    - GUIA_COMPLETO.md
echo    - README_BACKEND.md
echo    - QUICK_START_BACKEND.md
echo.
pause
