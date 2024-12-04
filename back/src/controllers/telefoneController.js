const telefoneModel = require('../models/telefoneModel.js');

const createtelefone = (req, res) => {
    telefoneModel.create(req.body, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'sucesso', result });
    });
};

const readtelefone = (req, res) => {
    telefoneModel.getAll((err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(result);
    });
};

const updatetelefone = (req, res) => {
    telefoneModel.update(req.params.id, req.body, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'sucesso', result });
    });
};

const deletetelefone = (req, res) => {
    telefoneModel.deletetelefone(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'sucesso', result });
    });
};

module.exports = { createtelefone, readtelefone, updatetelefone, deletetelefone };