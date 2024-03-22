
// const mongoose = require('mongoose');
// const db = require('../db');
// const Student = require('../models/studentModel');

// async function readStudents() {
//   try {
//     await db;
//     const result = await Student.find();
//     console.log('Students:', result);
//   } catch (error) {
//     console.error('Error reading students:', error);
//   }
// }

// module.exports = readStudents;


// crud-operations/read.js

const mongoose = require('mongoose');
const Student = require('../models/studentModel');

async function readStudents() {
  try {
    await mongoose.connection;
    const result = await Student.find();
    console.log('Read operation result:', result); 
    return result;
  } catch (error) {
    console.error('Error reading students:', error);
    throw error;
  }
}

module.exports = readStudents;
