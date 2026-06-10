#!/bin/bash

# ============================================
# SCRIPT DE INSTALAÇÃO E INICIALIZAÇÃO
# ============================================

echo "🍔 Cardápio Digital - Backend Setup"
echo ""

# Verificar se Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não está instalado"
    echo "Baixe em: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js $(node --version) encontrado"
echo ""

# Ir para pasta backend
cd "$(dirname "$0")"

# Instalar dependências
echo "📦 Instalando dependências..."
npm install

echo ""
echo "✅ Instalação concluída!"
echo ""
echo "📝 Próximos passos:"
echo ""
echo "1. Configure o MySQL:"
echo "   - Abra MySQL"
echo "   - Execute o script: database/init.sql"
echo ""
echo "2. Inicie o servidor:"
echo "   npm run dev"
echo ""
echo "3. Teste a API:"
echo "   curl http://localhost:3000"
echo ""
