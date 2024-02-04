const ItemModel = require("../models/ItemModel");

ItemModel.create('0', {
    title: 'Task 1',
    description: 'Description of Task 1',
    dueDate: '2023-12-20',
    status: 'pending'
  })

ItemModel.create('2', {
  title: 'Task 4',
  description: 'Description of Task 4',
  dueDate: '2023-12-21',
  status: 'overdue'
});


ItemModel.create('3', {
  title: 'Task 3',
  description: 'Description of Task 3',
  dueDate: '2023-12-21',
  status: 'completed'
});


