const Task = require('../models/taskModel');
const taskService = require('../services/taskService');
const resolvers ={
Query: {
task:()=>{
return taskService.getAllTask();
}
},
Mutation: {
    createTask: (_,{title})=>{
        return taskService.createTask(title);
    },
    updateTask: (_,{id,completed})=>{
        return taskService.updateTask(id,completed);
   },
    deleteTask:(_,{id})=>{
         return taskService.deleteTask(_id);
   }
}
};

module.exports = resolvers;
