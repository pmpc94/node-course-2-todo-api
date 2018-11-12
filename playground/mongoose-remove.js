const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/modules/todo');
const {User} = require('./../server/modules/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findOneAndRemove({_id: '5be96775da263e56173ba9e2'}).then((todo) => {
  console.log(todo);
});

Todo.findByIdAndRemove('5be96775da263e56173ba9e2').then((todo) => {
  console.log(todo);
});
