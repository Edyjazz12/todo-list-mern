const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
    trim: true
  },
  completada: {
    type: Boolean,
    default: false
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Task', taskSchema);
