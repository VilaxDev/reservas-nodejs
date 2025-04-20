const conexion = require('../database/db');


exports.create = (req, res) => {
    const { firstname, lastname, email, phone, description } = req.body;

    const reservaData = { firstname, lastname, email, phone, description };

    conexion.query('INSERT INTO reservas SET ?', reservaData, (err, result) => {
        if (err) {
            console.error('Error al crear reserva:', err);
            return res.status(500).json({
                success: false,
                message: 'Error al crear la reserva',
            });
        }

        res.status(201).json({
            success: true,
            message: 'Reserva creada exitosamente',
            data: { id: result.insertId, ...reservaData },
        });
    });
};


exports.getAll = (req, res) => {
    conexion.query('SELECT * FROM reservas', (err, results) => {
        if (err) {
            console.error('Error al obtener las reservas:', err);
            return res.status(400).json({
                success: false,
                message: 'Error al obtener las reservas',
            });
        }

        res.status(200).json({
            success: true,
            data: results,
        });
    });
};

