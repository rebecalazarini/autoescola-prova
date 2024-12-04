const express = require('express');
const cors = require('cors');


const professorRoutes = require('./src/routes/professorRoutes');
const clientesRoutes = require('./src/routes/clientesRoutes');
const telefoneRoutes = require('./src/routes/telefoneRoutes');
const veiculosRoutes = require('./src/routes/veiculosRoutes');

const app = express();

app.use(cors());
app.use(express.json());


app.use('/professor', professorRoutes);
app.use('/clientes', clientesRoutes);
app.use('/telefone', telefoneRoutes);
app.use('/veiculos', veiculosRoutes);


app.listen(120, () => {
    console.log('Rodando');
});
