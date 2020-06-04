const knex = require('../config/knex-connection');
const Todos = require('../models/Todos');

const getTodos = async (req, res) => {
    let data = await Todos.selectTodos(req.user.id);
    res.send(data)
}

const addTodo = async (req, res) => {
    let todo = req.body
    if (todo.name) {
        let data = await Todos.insertTodo(todo, req.user.id);
        if (data) {
            res.redirect('/')
        }
    } else {
        res.sendStatus(422);
    }
}

const markTodoAsDone = async (req, res) => {
    let id = req.body.id;
    if (id) {
        let data = await Todos.updateTodoDone(id);
        if (data) {
            res.sendStatus(200);
        }
    } else {
        res.sendStatus(404);
    }
}

const removeTodo = async (req, res) => {
    let id = req.body.id;
    if (id) {
        let data = await Todos.deleteTodo(id);
        if (data) {
            res.sendStatus(200);
        }
    } else {
        res.sendStatus(404);
    }    
}

module.exports = {
    getTodos,
    addTodo,
    markTodoAsDone,
    removeTodo
}