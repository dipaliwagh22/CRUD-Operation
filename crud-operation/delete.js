
const mongoose = require('mongoose');
const db = require('../db');
const Student = require('../models/studentModel');

async function deleteStudent(name, age) {
  try {
    await db;
    const result = await Student.deleteOne({ name, age });
    console.log('Student deleted:', result);
  } catch (error) {
    console.error('Error deleting student:', error);
  }
}

module.exports = deleteStudent;

