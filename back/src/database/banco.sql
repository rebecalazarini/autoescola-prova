DROP DATABASE IF EXISTS vitoriakar;
CREATE DATABASE IF NOT EXISTS vitoriakar;
USE vitoriakar;

CREATE TABLE clientes(
    cliente_id int(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome varchar(255) NOT NULL,
    cpf varchar(11) NOT NULL UNIQUE,
    email varchar(255) NOT NULL UNIQUE,
    endereco varchar(255) NOT NULL,
    data_nascimento date NOT NULL,
    data_cadastro date NOT NULL   
);

CREATE TABLE professor(
    professor_id int(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome varchar(255) NOT NULL,
    cpf varchar(11) NOT NULL UNIQUE,
    email varchar(255) NOT NULL UNIQUE,
    endereco varchar(255) NOT NULL,
    data_nascimento date NOT NULL,
    data_cadastro date NOT NULL   
);

CREATE TABLE telefone (
    telefone_id int(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    cliente_id int(10),
    professor_id int(10),
    numero varchar(20) NOT NULL,
    tipo enum('residencial', 'comercial', 'celular') NOT NULL,
    FOREIGN KEY (cliente_id) REFERENCES clientes(cliente_id),
    FOREIGN KEY (professor_id) REFERENCES professor(professor_id)
);

CREATE TABLE veiculos (
    veiculos_id int(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    marca_veiculo VARCHAR(252) NOT NULL,
    modelo_veiculo VARCHAR(252) NOT NULL,
    ano_veiculo date NOT NULL,
    fabricacao_veiculo date NOT NULL,
    cliente_id int(10) NOT NULL,
    FOREIGN KEY (cliente_id) REFERENCES clientes(cliente_id)
);

INSERT INTO clientes (nome, cpf, email, endereco, data_nascimento, data_cadastro) 
VALUES 
('João Silva', '12345678901', 'joao.silva@email.com', 'Rua A, 123, Bairro X', '1985-07-15', '2024-12-04'),
('Maria Oliveira', '98765432109', 'maria.oliveira@email.com', 'Rua B, 456, Bairro Y', '1990-11-22', '2024-12-04');


INSERT INTO professor (nome, cpf, email, endereco, data_nascimento, data_cadastro) 
VALUES 
('Carlos Souza', '12312312312', 'carlos.souza@email.com', 'Av. Central, 789, Bairro Z', '1980-03-10', '2024-12-04'),
('Ana Costa', '32132132132', 'ana.costa@email.com', 'Rua D, 101, Bairro W', '1983-06-25', '2024-12-04');



INSERT INTO telefone (cliente_id, professor_id, numero, tipo) 
VALUES 
(1, 1, '123456789', 'celular'),
(2, 2, '987654321', 'comercial');

INSERT INTO veiculos (marca_veiculo, modelo_veiculo, ano_veiculo, fabricacao_veiculo, cliente_id) 
VALUES 
('Volkswagen', 'Fusca', '1975-01-01', '1975-05-01', 1),
('Chevrolet', 'Corsa', '2005-06-15', '2005-07-01', 2);
















