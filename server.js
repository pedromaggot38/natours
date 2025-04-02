const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

const db = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

mongoose.connect(db, {}).then(() => {
  console.log('Db conecction successful!');
});

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

const testTour = new Tour({
  name: 'The Forest Hiker',
  rating: 4.7,
  price: 497,
});

testTour
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.log('Error: ', err);
  });

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
