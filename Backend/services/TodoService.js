const mongoose = require("mongoose");
const { obj } = require("../models/Todo");
const TodoSchema = require("../models/Todo");
const Todo = mongoose.model("Todo", Todo);
class TodoService {
    async setTodo(todo){
        if(todo["_id"] !== undefined) {
          return await User.updateOne({ "_id":todo["_id"] }, { $set: todo })
        }
        else{
            const todoObj = new Todo(todo);
            const result = await todoObj.save();
            return result;
        }
    }
    async getTodo(){
        return await Todo.find({isDone: false});
    }
    async removeTodo(_id){
        return await Todo.updateOne({"_id":_id}, {$set:{ isDone: true }})
    }
}

module.exports = TodoService;