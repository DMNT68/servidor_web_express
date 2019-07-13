const express = require('express');

let app = express();

app.get('/ejemplo', (req, res) => {
    res.status(200).json({
        ok: true,
        mensaje: 'petición y respuesta de ejemplo de un api rest'
    });
});

module.exports = app;