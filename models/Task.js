const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema({
    user:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"user"  
    },
description:{
    type: String,
    required: [true, 'Please enter the description...'],
    lowercase: true,
},
completed:{
    type:Boolean,
    required:[true,"Please state whetther it is completed or not"],
    lowercase: true,
},
deadline:{
    type:Date,
    required:[true,"Please enter date"],
}
});




const Task = mongoose.model('task', taskSchema);

module.exports = Task;