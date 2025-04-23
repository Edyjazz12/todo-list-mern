const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const conectarDB = require('./config/db');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
conectarDB();

const taskRoutes = require('./routes/taskRoutes');
app.use('/api/tareas', taskRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente ✅');
});

// Arranca el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});
