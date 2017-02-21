var mongoose = require('mongoose');

module.exports = mongoose.model('Aerolinea', {
	//_id: {type: mongoose.Schema.Types.ObjectId, required: false},
	  _id: Number,
    aerolinea: String,
    ciudad_origen: String,
    ciudad_destino: String,
    fecha1: {type: Date, default: Date.Now},
    fecha2: {type: Date, default: Date.Now},
});
