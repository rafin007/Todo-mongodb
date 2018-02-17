const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log("Unable to connect to MongoDB database");
    }

    console.log("Connected to MongoDB database!");

    db.collection('Users').findOneAndDelete({
        name: "Asif"
    }).then((result) => {
        console.log(result);
    }, (err) => {
        console.log(err);
    });
});
