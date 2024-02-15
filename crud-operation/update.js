
const mongoose = require('mongoose');
const db = require('../db');
const Student = require('../models/studentModel');

async function updateStudent(filter, update) {
  try {
    await db;
    const result = await Student.updateMany(filter, update);
    console.log('Student updated:', result);
  } catch (error) {
    console.error('Error updating student:', error);
  }
}

module.exports = updateStudent;
