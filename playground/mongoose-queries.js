const {mongoose} = require('./../server/db/mongoose');
const {User} = require('./../server/models/user');

var id = "5a9e77350b9ee522d0f73e12";

User.findById(id).then((user) => {
    if(!user){
        return console.log("ID not found!");
    }
    console.log(user);
}).catch((e) => {
    console.log(e);
});
