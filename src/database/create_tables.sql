use manutenção;
CREATE TABLE `clientes` (
  `id_cliente` int NOT NULL AUTO_INCREMENT,
  `tipo_cliente` varchar(2) NOT NULL,
  `nome` varchar(120) NOT NULL,
  `nome_fantasia` varchar(120) DEFAULT NULL,
  `documento` varchar(20) NOT NULL,
  `telefone` varchar(30) DEFAULT NULL,
  `email` varchar(120) DEFAULT NULL,
  PRIMARY KEY (`id_cliente`),
  UNIQUE KEY `documento` (`documento`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `equipamentos` (
  `id_equipamento` int NOT NULL AUTO_INCREMENT,
  `cliente_id` int NOT NULL,
  `categoria` varchar(60) DEFAULT NULL,
  `marca` varchar(60) DEFAULT NULL,
  `modelo` varchar(60) DEFAULT NULL,
  `numero_serie` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`id_equipamento`),
  KEY `fk_equip_cliente` (`cliente_id`),
  CONSTRAINT `fk_equip_cliente` FOREIGN KEY (`cliente_id`) REFERENCES `clientes` (`id_cliente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `historico_os` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ordem_id` int NOT NULL,
  `status` varchar(30) NOT NULL,
  `data_registro` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_hist_ordem` (`ordem_id`),
  CONSTRAINT `fk_hist_ordem` FOREIGN KEY (`ordem_id`) REFERENCES `ordens_servico` (`id_ordem`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `ordem_pecas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ordem_id` int NOT NULL,
  `peca_id` int NOT NULL,
  `quantidade` int NOT NULL,
  `valor_unitario` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_op_ordem` (`ordem_id`),
  KEY `fk_op_peca` (`peca_id`),
  CONSTRAINT `fk_op_ordem` FOREIGN KEY (`ordem_id`) REFERENCES `ordens_servico` (`id_ordem`),
  CONSTRAINT `fk_op_peca` FOREIGN KEY (`peca_id`) REFERENCES `pecas` (`id_peca`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `ordens_servico` (
  `id_ordem` int NOT NULL AUTO_INCREMENT,
  `equipamento_id` int NOT NULL,
  `tecnico_id` int DEFAULT NULL,
  `defeito_relatado` text,
  `diagnostico` text,
  `solucao` text,
  `status` varchar(30) NOT NULL,
  `data_entrada` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `data_entrega` datetime DEFAULT NULL,
  `data_saida` datetime DEFAULT NULL,
  PRIMARY KEY (`id_ordem`),
  KEY `fk_os_equip` (`equipamento_id`),
  KEY `fk_os_tecnico` (`tecnico_id`),
  CONSTRAINT `fk_os_equip` FOREIGN KEY (`equipamento_id`) REFERENCES `equipamentos` (`id_equipamento`),
  CONSTRAINT `fk_os_tecnico` FOREIGN KEY (`tecnico_id`) REFERENCES `tecnicos` (`id_tecnico`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `pecas` (
  `id_peca` int NOT NULL AUTO_INCREMENT,
  `descricao` varchar(120) NOT NULL,
  PRIMARY KEY (`id_peca`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `servicos` (
  `id_servico` int NOT NULL AUTO_INCREMENT,
  `ordem_id` int NOT NULL,
  `descricao` text NOT NULL,
  `data_execucao` datetime DEFAULT CURRENT_TIMESTAMP,
  `tempo_horas` decimal(5,2) DEFAULT NULL,
  PRIMARY KEY (`id_servico`),
  KEY `fk_servico_ordem` (`ordem_id`),
  CONSTRAINT `fk_servico_ordem` FOREIGN KEY (`ordem_id`) REFERENCES `ordens_servico` (`id_ordem`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `tecnicos` (
  `id_tecnico` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(120) NOT NULL,
  PRIMARY KEY (`id_tecnico`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `usuarios` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(120) NOT NULL,
  `email` varchar(120) NOT NULL,
  `senha_hash` varchar(255) NOT NULL,
  `perfil` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;