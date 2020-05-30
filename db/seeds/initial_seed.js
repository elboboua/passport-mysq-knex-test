
exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await knex('todo').del()
  await knex('user').del()
  await knex('user').insert([
    {name: 'Ahmad'},
    {name: 'James'},
    {name: 'John'}
  ])
  await knex('todo').insert([
    {name: 'Take out the garbage', done: false, user_id: 1},
    {name: 'Take out the dog', done: false, user_id: 2},
    {name: 'Take out the misses', done: false, user_id: 3},
  ]);

};
