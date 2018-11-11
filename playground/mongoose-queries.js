const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/modules/todo');
const {User} = require('./../server/modules/user');

var id = '5be773ec82cc596c1573f9b3';

User.findById(id).then((user) => {
  if (!user) {
    return console.log('User does not exist.');
  }
  console.log('User by ID: ', JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));

// if (!ObjectId.isValid(id)) {
//   console.log('ID not valid');
// }
//
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', JSON.stringify(todos, undefined, 2));
// });
//
// Todo.findOne({
// _id: id
// }).then((todo) => {
// console.log('Todo', JSON.stringify(todo, undefined, 2));
// });
//
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
// console.log('Todo By Id', JSON.stringify(todo, undefined, 2));
// }).catch((e) => console.log(e));
