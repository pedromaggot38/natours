const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'A tour must have a name'],
    unique: [true, 'Name already in use.'],
  },
  rating: {
    type: Number,
    default: 1.0,
  },
  price: {
    type: Number,
    require: [true, 'A tour must have a price.'],
  },
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports(Tour);
