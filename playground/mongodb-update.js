// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5be6dfe0da263e56173b6689')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5be6f742da263e56173b6b04')
  }, {
    $set: {
      name: 'Miguel',
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  db.close();
});
