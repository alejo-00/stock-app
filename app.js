const path = require('path');
const express = require('express');
const app = express();
const db = require('./db');

app.use(express.json());
app.use(express.static('public')); 

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  db.query('SELECT * FROM usuarios WHERE email = ?', [email], (err, results) => {
    if (err) return res.status(500).send(err);

    if (results.length > 0) {
      // Verificar la contraseña acá (idealmente hasheada)
      res.send('Login correcto');
    } else {
      res.send('Usuario no encontrado');
    }
  });
});

app.listen(3000, () => console.log('Servidor corriendo en puerto 3000'));
