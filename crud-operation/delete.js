
const mongoose = require('mongoose');
const db = require('../db');
const Student = require('../models/studentModel');

async function deleteStudent(filter) {
  try {
    await db;
    const result = await Student.deleteOne(filter);
    console.log('Student deleted:', result);
  } catch (error) {
    console.error('Error deleting student:', error);
  }
}

module.exports = deleteStudent;
