const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log("Unable to connect to MongoDB database");
    }

    console.log("Connected to MongoDB database!");

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5a7712e99941b8eec348caa6")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(JSON.stringify(result, undefined, 2));
    // }, (err) => {
    //     console.log("Error updating!", err);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5a77248d9941b8eec348caa8")
    }, {
        $inc: {
            age: -2
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    }, (err) => {
        console.log("Unable to update!", err);
    });
});
