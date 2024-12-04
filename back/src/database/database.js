const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'vitoriakar'
});

connection.connect((err) => {
    if (err) {
        console.error('Erro', err.stack);
        return;
    }
    console.log('Conectado');
});

module.exports = connection;