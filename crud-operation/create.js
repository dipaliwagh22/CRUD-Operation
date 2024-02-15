const mongoose = require('mongoose');
const db = require('../db');
const Student = require('../models/studentModel');

async function createStudent(name, age) {
  try {
    await db;
    const result = await Student.create({ name, age });
    console.log('Student created:', result);
  } catch (error) {
    console.error('Error creating student:', error);
  }
}

module.exports = createStudent;