const express = require("express");
const router = express.Router();
const TodoService = require("../services/TodoService")


router.get("/get-todos", auth.required, async (req,res)=>{
    const todoService = new TodoService();
    const result = await todoService.getTodo();
    res.send(result);
})

router.post("/set-todo", auth.required, async (req,res)=>{
    const todoService = new TodoService();
    const result = await todoService.setTodo(req.body);
    res.send(result)
})

router.delete("/todo/:id",auth.required, async (req,res)=>{
    const todoService = new TodoService();
    const result = await todoService.removeTodo(req.params.id);
    res.send(result)
})


module.exports = router;

// under routes folder