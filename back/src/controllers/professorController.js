const professorModel = require('../models/professorModel.js');

const createprofessor = (req, res) => {
    professorModel.create(req.body, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: ' sucesso', result });
    });
};

const readprofessor = (req, res) => {
    professorModel.getAll((err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(result);
    });
};

const updateprofessor = (req, res) => {
    professorModel.update(req.params.id, req.body, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'sucesso', result });
    });
};

const deleteprofessor = (req, res) => {
    professorModel.deleteprofessor(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'sucesso', result });
    });
};

module.exports = { createprofessor, readprofessor, updateprofessor, deleteprofessor };