const knex = require('../config/knex-connection');
const Knex = require('knex')

/**
 * 
 * @param {Knex} knex 
 */
const selectTodos = async (user_id) => {
    let data = await knex('todo').where({user_id, done: false}).orderBy('id', 'desc');
    data = JSON.parse(JSON.stringify(data));
    return data;
}

const insertTodo = async (todo, id) => {
    let data = await knex('todo').insert({
        name: todo.name,
        description: todo.description,
        user_id: id
    })
    data = JSON.parse(JSON.stringify(data));
    return data;
}

const updateTodoDone = async (id) => {
    let data = await knex('todo')
        .update({done: true})
        .where({id});
    data = JSON.parse(JSON.stringify(data));
    return data; 
}

const deleteTodo = async (id) => {
    let data = await knex('todo')
    .del()
    .where({id});
    data = JSON.parse(JSON.stringify(data));
    return data;  
}

module.exports = {
    selectTodos,
    insertTodo,
    updateTodoDone,
    deleteTodo
}