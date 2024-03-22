const mongoose = require('mongoose');
const db = require('../db');
const Student = require('../models/studentModel');
const Joi =require('joi');

async function createStudent(name, age) {
  try {
    await db;
    const createStudentSchema = Joi.object({
      name: Joi.string().required(),
      age: Joi.number().required(),
    });
    
    const validation = createStudentSchema.validate({ name, age });
    if (validation.error) {
      console.error('Validation error during student creation:', validation.error.details);
      throw new Error(validation.error.details[0].message);
    }
    const result = await Student.create({ name, age });
    console.log('Student created:', result);
  } catch (error) {
    console.error('Error creating student:', error);
  }
}

module.exports = createStudent;