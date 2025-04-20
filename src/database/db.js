const mysql = require('mysql')

const conexion = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_reservas'
});

conexion.connect((err) => {
    if (err) {
        console.log('Error connecting to the database:', err)
        return
    }
    console.log('Connected to the database')
});

module.exports = conexion;