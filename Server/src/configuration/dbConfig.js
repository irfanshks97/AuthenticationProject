const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Authentication");

mongoose.connectionon("connected" ,() => {
    console.log("connected to mongodb");

});
mongoose.connection.on("error" ,(error) => {
    console.log(`Mogodb connection error " , ${error}`)
}) 

module.exports = mongoose;