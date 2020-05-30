const Knex = require('knex');

/**
 * @param {Knex} knex
 */
exports.up = async (knex)  => {
    await knex.schema.createTableIfNotExists('user', (table) => {
        table.increments().notNullable;
        table.string('name');
        table.string('email');
        table.string('google_id');
    });

    await knex.schema.createTableIfNotExists('todo', (table) => {
        // name, description, done, user_id
        table.string('name');
        table.string('description');
        table.boolean('done').defaultTo(false);
        table.integer('user_id').unsigned().references('id').inTable('user');
    });
};


/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  await knex.schema.dropTable('user');
  await knex.schema.dropTable('todo');

};
