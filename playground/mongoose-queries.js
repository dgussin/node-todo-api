const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// var id = '5978da034f7df2e41aad8e5b11';
// if(!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('Id not found')
//   }
//   console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

// User.findById
//  user not found
//  print user
// handle users

var id = '59777c8aa893abc049799938'

User.findById(id).then((user) => {
  if(!user) {
    return console.log('user not found');
  }
  console.log('User by Id', user);
}).catch((e) => console.log(e));
