const mongoose = require('mongoose')

const classSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true,'title should be 4-80 charecters'],
    unique:true,
    lowercase:true,
    minlength:[4,'enter atlest 4 charecters'],
    maxlength:[80,' maximum would be 80 charcters']
  },
  discription: {
    type: String,
    unique:true,
    lowercase:true,
    minlength:[15,'enter atlest 15 charecters'],
    maxlength:[600,' maximum would be 600 charcters']
  },
  maxNumStud:{
    type:Number,
    unique:true,
    maxlength:[50,'maximum 50 seats available']

  },

  startingDate: {
    type: Date,
    required: true,
    default: Date.now
  },
  endingDate: {
    type: Date,
    required: true,
    default: Date.now
  }
})

const Userclasses=mongoose.model('Userclasses', classSchema)
module.exports = Userclasses;