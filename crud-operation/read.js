
const mongoose = require('mongoose');
const db = require('../db');
const Student = require('../models/studentModel');

async function readStudents() {
  try {
    await db;
    const result = await Student.find();
    console.log('Students:', result);
  } catch (error) {
    console.error('Error reading students:', error);
  }
}

module.exports = readStudents;
