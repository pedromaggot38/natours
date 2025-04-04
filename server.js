const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

const db = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

mongoose.connect(db, {}).then(() => {
  console.log('Db conecction successful!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
