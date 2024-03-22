
const mongoose = require('mongoose');
const db = require('../db');
const Student = require('../models/studentModel');
const Joi = require('joi'); 

async function updateStudent(filter, update) {
  try {
    await db;

     const updateStudentSchema = Joi.object({
      filter: Joi.object().required(),
      update: Joi.object().required(),
    });
    
    const validation = updateStudentSchema.validate({ filter, update });
    if (validation.error) {
      throw new Error(validation.error.details[0].message);
    }

    const result = await Student.updateMany(filter, update);
    console.log('Student updated:', result);
  } catch (error) {
    console.error('Error updating student:', error);
  }
}

module.exports = updateStudent;
