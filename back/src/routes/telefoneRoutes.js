const express = require('express');
const router = express.Router();
const telefoneController = require('../controllers/telefoneController.js');

// Rotas para Pedidos
router.post('/', telefoneController.createtelefone);      
router.get('/', telefoneController.readtelefone);        
router.put('/:id',telefoneController.updatetelefone);    
router.delete('/:id', telefoneController.deletetelefone); 

module.exports = router;