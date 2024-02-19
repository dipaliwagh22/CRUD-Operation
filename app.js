

const createStudents = require('./crud-operation/create');
const readStudents = require('./crud-operation/read');
const updateStudents = require('./crud-operation/update');
const deleteStudents = require('./crud-operation/delete');

//creat operation

// createStudents('Dipali', 21);
// createStudents('Saryu', 21);
// createStudents('vaibhav', 18);
// createStudents('jit', 23);
// createStudents('Prasad', 21);


readStudents();

// updateStudents({ name: 'jit' }, { age: 22 });

// updateStudents({ age:30 }, { $set: { age: 21 } });

 deleteStudents('jit',23) //delete one record

// deleteStudents();// delete all records
