const mongoose = require('mongoose');
const taskSchema =new mongoose.Schema({
title: {type : String, require :true},
completed: {type : Boolean, default : false}
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
