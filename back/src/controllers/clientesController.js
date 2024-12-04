const clientesModel = require('../models/clientesModel.js');

const createclientes = (req, res) => {
    clientesModel.create(req.body, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: ' sucesso', result });
    });
};

const readclientes = (req, res) => {
    clientesModel.getAll((err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(result);
    });
};

const updateclientes = (req, res) => {
    clientesModel.update(req.params.id, req.body, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'sucesso', result });
    });
};

const deleteclientes = (req, res) => {
    clientesModel.deleteclientes(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'sucesso', result });
    });
};

module.exports = { createclientes, readclientes, updateclientes, deleteclientes };