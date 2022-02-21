const { mongoose } = require('../config/db')

const movieModel = mongoose.model(
  'movies',
  new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    year: { type: String, default: undefined }, // Lanzamiento: aaaa-mm-dd
    rating: { type: Number, default: 0, min: 0, max: 5 },
    banner: { type: String, required: true }, // Imagen horizontal
    poster: { type: String, required: true }, // Imagen vertical
    editor: { type: String, required: true }, // ID del usuario que crea la película
    createdAt: { type: Date, default: Date.now } // Automático
  })
)

module.exports = movieModel
