const mongoose  = require("mongoose");

var mongoDBURL = 'mongodb+srv://vibhu:vibhu@cluster0.ym8uy6s.mongodb.net/mern-ecommerce';

mongoose.connect(mongoDBURL,{useUnifiedTopology:true , useNewUrlParser:true})

var dbconnect = mongoose.connection

dbconnect.on('error' ,()=>{
    console.log("mongo failed");
} )

dbconnect.on('connected' ,()=>{
    console.log("mongo successful");
} )

module.exports = mongoose