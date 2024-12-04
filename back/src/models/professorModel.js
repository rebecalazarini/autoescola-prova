const db = require('../database/database.js');

const create = (data, callback) => {
    const { nome, cpf, email, endereco, data_nascimento, data_cadastro  } = data;
    const query = 'INSERT INTO professor (nome, cpf, email, endereco, data_nascimento, data_cadastro ) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(query, [nome, cpf, email, endereco, data_nascimento, data_cadastro ], callback);
};

const getAll = (callback) => {
    const query = 'SELECT * FROM professor';
    db.query(query, callback);
};

const update = (id, data, callback) => {
    const { nome, cpf, email, endereco, data_nascimento, data_cadastro } = data;
    const query = 'UPDATE professor SET nome = ?, cpf = ?,email = ?,endereco = ?, data_nascimento = ?, data_cadastro = ? WHERE professor_id = ?';
    db.query(query, [nome, cpf, email, endereco, data_nascimento, data_cadastro, id], callback);
};

const deleteprofessor = (id, callback) => {
    const query = 'DELETE FROM professor WHERE professor_id  = ?';
    db.query(query, [id], callback);
};

module.exports = { create, getAll, update, deleteprofessor };