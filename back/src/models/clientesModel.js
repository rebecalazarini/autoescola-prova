const db = require('../database/database.js');

const create = (data, callback) => {
    const { nome, cpf, email, endereco, data_nascimento, data_cadastro  } = data;
    const query = 'INSERT INTO clientes (nome, cpf, email, endereco, data_nascimento, data_cadastro ) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(query, [nome, cpf, email, endereco, data_nascimento, data_cadastro ], callback);
};

const getAll = (callback) => {
    const query = 'SELECT * FROM clientes';
    db.query(query, callback);
};

const update = (id, data, callback) => {
    const { nome, cpf, email, endereco, data_nascimento, data_cadastro } = data;
    const query = 'UPDATE clientes SET nome = ?, cpf = ?,email = ?,endereco = ?, data_nascimento = ?, data_cadastro = ? WHERE cliente_id = ?';
    db.query(query, [nome, cpf, email, endereco, data_nascimento, data_cadastro, id], callback);
};

const deleteclientes = (id, callback) => {
    const query = 'DELETE FROM clientes WHERE cliente_id  = ?';
    db.query(query, [id], callback);
};

module.exports = { create, getAll, update, deleteclientes };