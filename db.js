// // db.js
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/student_records', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// module.exports = mongoose.connection;


const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/student_records', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = db;
