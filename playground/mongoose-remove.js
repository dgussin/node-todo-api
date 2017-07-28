const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });


// returns document
//Todo.findOneAndRemove()
Todo.findOneAndRemove({ _id: '597b36e17261f6898ee95da0'}).then((todo) => {
  console.log(todo);
});

// returns document
//Todo.findByIdAndRemove()
// Todo.findByIdAndRemove('597b36e17261f6898ee95da0').then((todo) => {
//   console.log(todo);
// });
