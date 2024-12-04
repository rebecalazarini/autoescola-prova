const express = require('express');
const router = express.Router();
const professorController = require('../controllers/professorController.js');

// Rotas para Pedidos
router.post('/', professorController.createprofessor);      
router.get('/', professorController.readprofessor);        
router.put('/:id', professorController.updateprofessor);    
router.delete('/:id', professorController.deleteprofessor); 

module.exports = router;