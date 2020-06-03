const router = require('express').Router()
const knex = require('../config/knex-connection');
const todoController = require('../controllers/todo-controller');

// we can probably remove the isAuthorized here and put it in the main app.js

// select all todos from user
router.get('/getTodos', todoController.getTodos);

// insert a todo for user
router.post('/add', todoController.addTodo);

// mark todo as done
router.post('/done', todoController.markTodoAsDone);

// delete the todo completely
router.post('/delete', todoController.removeTodo)


module.exports = router;
