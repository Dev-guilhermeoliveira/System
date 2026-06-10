@echo off
REM ============================================
REM SCRIPT DE INSTALACAO - WINDOWS
REM ============================================

echo.
echo 🍔 Cardapio Digital - Backend Setup
echo.

REM Verificar Node.js
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js nao esta instalado
    echo Baixe em: https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js encontrado
echo.

REM Instalar dependencias
echo 📦 Instalando dependencias...
call npm install

echo.
echo ✅ Instalacao concluida!
echo.
echo 📝 Proximos passos:
echo.
echo 1. Configure o MySQL:
echo    - Abra MySQL
echo    - Execute o script: database/init.sql
echo.
echo 2. Inicie o servidor:
echo    npm run dev
echo.
echo 3. Teste a API:
echo    http://localhost:3000
echo.

pause
