@echo off
REM Script para iniciar o servidor HTTP do cardápio digital
REM Clique 2x para executar

echo.
echo ════════════════════════════════════════════════════════════════
echo    CARDÁPIO DIGITAL - SERVIDOR HTTP
echo ════════════════════════════════════════════════════════════════
echo.

REM Mudar para o diretório do projeto
cd /d "%~dp0"

echo 📂 Pasta atual: %cd%
echo.
echo 🚀 Iniciando servidor na porta 8000...
echo.
echo 📱 Abra seu navegador e acesse:
echo    http://localhost:8000
echo.
echo    ou
echo.
echo    http://127.0.0.1:8000
echo.
echo ════════════════════════════════════════════════════════════════
echo.
echo ⏳ Servidor rodando... Deixe esta janela aberta!
echo.
echo Para parar: feche esta janela ou pressione Ctrl+C
echo.
echo ════════════════════════════════════════════════════════════════
echo.

python -m http.server 8000

pause
