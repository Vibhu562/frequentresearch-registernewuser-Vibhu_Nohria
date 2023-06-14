const mongoose = require("mongoose");

const userSchema = mongoose.Schema({

  firstname: {
    type: String,
    require
  },
  lastname:{type: String,
    require},
  email: {
    type: String,
    require
  },
  countryChoice: {
    type: String,
    require
  },
  stateChoice: {
    type: String,
    require
  },
  selectedOption: {
    type: String,
    require
  },
  city:{
    type: String,
    require
  },
  dob:{
    type: String,
    require
  }
  ,
  age:{ 
    type: String,
    require}

})

const User = mongoose.model('newusers', userSchema)
module.exports=User