const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log("Unable to connect to MongoDB database");
    }

    console.log("Connected to MongoDB database!");

    // db.collection('Todos').insertOne({
    //     text: "something to do",
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         console.log("Unable to insert collection", err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name: "Neon",
        age: 23,
        location: "Jessore"
    }, (err, result) => {
        if(err){
            return console.log("Unable to inert to users");
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.close();
});
