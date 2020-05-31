const Knex = require('knex');

/**
 * @param {Knex} knex
 */
exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await knex.schema.table('todo', (table) => {
    table.dropForeign('user_id');
  })
  await knex('todo').del()
  await knex('user').del()
  await knex('user').insert([
    {name: 'Ahmad'},
    {name: 'James'},
    {name: 'John'}
  ])
  await knex('todo').insert([
    {name: 'Take out the garbage', done: false},
    {name: 'Take out the dog', done: false},
    {name: 'Take out the misses', done: false},
  ]);

  // await knex.schema.table('todo', (table) => {
  //   table.foreign('user_id').references('id').inTable('user');
  // })

};
