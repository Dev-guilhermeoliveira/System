#!/bin/bash
# Script para iniciar o servidor HTTP do cardápio digital no Mac
# Clique 2x para executar (após dar a permissão inicial)

clear
echo ""
echo "════════════════════════════════════════════════════════════════"
echo "    CARDÁPIO DIGITAL - SERVIDOR HTTP (MAC)"
echo "════════════════════════════════════════════════════════════════"
echo ""

# Mudar para o diretório do projeto (onde o script está)
cd "$(dirname "$0")"

echo "📂 Pasta atual: $(pwd)"
echo ""
echo "🚀 Iniciando servidor na porta 8000..."
echo ""
echo "📱 Abra seu navegador e acesse:"
echo "    http://localhost:8000"
echo ""
echo "    ou"
echo ""
echo "    http://127.0.0.1:8000"
echo ""
echo "════════════════════════════════════════════════════════════════"
echo ""
echo "⏳ Servidor rodando... Deixe esta janela aberta!"
echo ""
echo "Para parar: feche esta janela ou pressione Ctrl+C"
echo ""
echo "════════════════════════════════════════════════════════════════"
echo ""

# No Mac, o Python 3 é chamado de python3
python3 -m http.server 8000