-- ============================================
-- SCRIPT DE INICIALIZAÇÃO - CARDÁPIO DIGITAL
-- ============================================

-- Criar banco de dados
CREATE DATABASE IF NOT EXISTS cardapio_digital;
USE cardapio_digital;

-- ============================================
-- Tabela de Categorias (opcional, para referência)
-- ============================================

CREATE TABLE IF NOT EXISTS categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL UNIQUE,
    descricao TEXT,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Inserir categorias padrão
INSERT INTO categorias (nome, descricao) VALUES
('Lanches', 'Lanches e sanduíches'),
('Pizzas', 'Pizzas variadas'),
('Porções', 'Porções e acompanhamentos'),
('Bebidas', 'Bebidas frias e quentes'),
('Sobremesas', 'Doces e sobremesas')
ON DUPLICATE KEY UPDATE id=id;

-- ============================================
-- Tabela de Produtos
-- ============================================

CREATE TABLE IF NOT EXISTS produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    categoria_id INT NOT NULL,
    nome VARCHAR(255) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10, 2) NOT NULL CHECK (preco >= 0),
    imagem VARCHAR(500),
    ativo BOOLEAN DEFAULT 1,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    atualizado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (categoria_id) REFERENCES categorias(id) ON DELETE CASCADE,
    INDEX idx_categoria (categoria_id),
    INDEX idx_nome (nome),
    INDEX idx_ativo (ativo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- Inserir Produtos de Exemplo
-- ============================================

INSERT INTO produtos (categoria_id, nome, descricao, preco, imagem, ativo) VALUES
-- Lanches (categoria_id = 1)
(1, 'X-Burger', 'Hambúrguer artesanal com queijo e bacon', 24.90, 'https://via.placeholder.com/300x200?text=X-Burger', 1),
(1, 'Sanduíche Natural', 'Pão integral com frango grelhado e legumes', 18.50, 'https://via.placeholder.com/300x200?text=Sanduiche', 1),
(1, 'X-Tudo', 'Hambúrguer com tudo de cima', 32.90, 'https://via.placeholder.com/300x200?text=X-Tudo', 1),

-- Pizzas (categoria_id = 2)
(2, 'Pizza Margherita', 'Tomate, mozzarela e manjericão fresco', 35.90, 'https://via.placeholder.com/300x200?text=Pizza+Margherita', 1),
(2, 'Pizza Pepperoni', 'Mozzarela, pepperoni e azeitonas', 39.90, 'https://via.placeholder.com/300x200?text=Pizza+Pepperoni', 1),
(2, 'Pizza Calabresa', 'Calabresa, cebola e mozzarela', 38.90, 'https://via.placeholder.com/300x200?text=Pizza+Calabresa', 1),

-- Porções (categoria_id = 3)
(3, 'Batata Frita Crocante', 'Batata frita com tempero especial', 12.90, 'https://via.placeholder.com/300x200?text=Batata+Frita', 1),
(3, 'Asas de Frango', '6 asas de frango grelhadas com molho barbecue', 22.90, 'https://via.placeholder.com/300x200?text=Asas+Frango', 1),
(3, 'Bolinhas de Queijo', 'Bolinhas de queijo derretido crocantes', 16.90, 'https://via.placeholder.com/300x200?text=Bolinhas+Queijo', 1),

-- Bebidas (categoria_id = 4)
(4, 'Refrigerante Laranja', 'Refrigerante gelado 350ml', 5.90, 'https://via.placeholder.com/300x200?text=Refri+Laranja', 1),
(4, 'Refrigerante Cola', 'Refrigerante gelado 350ml', 5.90, 'https://via.placeholder.com/300x200?text=Refri+Cola', 1),
(4, 'Suco Natural de Laranja', 'Suco natural 300ml feito na hora', 8.90, 'https://via.placeholder.com/300x200?text=Suco+Laranja', 1),
(4, 'Água Mineral', 'Água mineral gelada 500ml', 3.50, 'https://via.placeholder.com/300x200?text=Agua+Mineral', 1),

-- Sobremesas (categoria_id = 5)
(5, 'Sorvete Chocolate', 'Sorvete de chocolate com calda de chocolate', 13.90, 'https://via.placeholder.com/300x200?text=Sorvete+Chocolate', 1),
(5, 'Brownie com Sorvete', 'Brownie quente com bola de sorvete baunilha', 16.90, 'https://via.placeholder.com/300x200?text=Brownie', 1),
(5, 'Torta de Chocolate', 'Fatia de torta de chocolate belga', 14.90, 'https://via.placeholder.com/300x200?text=Torta+Chocolate', 1),
(5, 'Pudim de Leite Condensado', 'Pudim tradicional com calda de caramelo', 10.90, 'https://via.placeholder.com/300x200?text=Pudim', 1);

-- ============================================
-- Verificar Dados
-- ============================================

-- Ver todas as categorias
-- SELECT * FROM categorias;

-- Ver todos os produtos
-- SELECT * FROM produtos;

-- Ver produtos por categoria
-- SELECT p.id, p.nome, p.descricao, p.preco, c.nome as categoria
-- FROM produtos p
-- JOIN categorias c ON p.categoria_id = c.id
-- ORDER BY c.nome, p.nome;

-- ============================================
-- Fim do Script
-- ============================================
