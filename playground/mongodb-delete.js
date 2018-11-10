// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');

  db.collection('Users').deleteMany({name: 'Pedro'}).then((result) => {
    console.log(result);
  });

  db.collection('Users').deleteOne({name: 'Jen'}).then((result) => {
    console.log(result);
  });

  db.collection('Users').findOneAndDelete({_id: new ObjectID('5be6be4fa9ee6a08ec2898e8')}).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });

  db.close();
});
