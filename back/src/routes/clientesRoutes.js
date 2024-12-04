const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController.js');


router.post('/clientes', clientesController.createclientes);      
router.get('/clientes', clientesController.readclientes);        
router.put('/clientes:id', clientesController.updateclientes);   
router.delete('/clientes:id', clientesController.deleteclientes); 

module.exports = router;