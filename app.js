

const createStudents = require('./crud-operation/create');
const readStudents = require('./crud-operation/read');
const updateStudents = require('./crud-operation/update');
const deleteStudents = require('./crud-operation/delete');

// //creat operation

// // createStudents('Dipali', 21);
// // createStudents('Saryu', 21);
// // createStudents('vaibhav', 18);
// // createStudents('jit', 23);
// // createStudents('Prasad', 21);

// readStudents();

// // updateStudents({ name: 'jit' }, { age: 22 });

// // updateStudents({ age:30 }, { $set: { age: 21 } });

//  deleteStudents('jit',23) //delete one record

// // deleteStudents();// delete all records

const express = require('express');
const app = express();
const PORT = 3000; 
// Middleware to parse JSON in request bodies
app.use(express.json());

// Create Student
app.post('/create', async (req, res) => {
  const { name, age } = req.body;
  try {
    await createStudents(name, age);
    res.send('Student created successfully');
  } catch (error) {
    console.error('Error in /create route:', error.message);
    res.status(400).json({ error: error.message }); 
  }
});

// Read Students
app.get('/read', async (req, res) => {
    try {
      const students = await readStudents();
      console.log('Students:', students);
      res.json(students);
    } catch (error) {
      console.error('Error in /read route:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
// Update Student(PUT)
app.put('/update', async (req, res) => {
  const { filter, update } = req.body;
  await updateStudents(filter, update);
  res.send('Student updated successfully');
});

// Update Student (PATCH)
app.patch('/update', async (req, res) => {
    try {
      const { filter, update } = req.body;
      await updateStudents(filter, update);
      res.send('Student updated successfully');
    } catch (error) {
      console.error('Error in PATCH /update route:', error);
      res.status(500).send('Internal Server Error');
    }
  });

// Delete Student
app.delete('/delete', async (req, res) => {
  const { name, age } = req.body;
  await deleteStudents(name, age);
  res.send('Student deleted successfully');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
