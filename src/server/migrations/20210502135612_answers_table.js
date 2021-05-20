exports.up = function (knex) {
  return knex.schema.createTable('answers', (table) => {
    table.increments();
    table.string('answer').notNullable();
    table.integer('ux_points').notNullable();
    table.integer('fullstack_points').notNullable();
    table.integer('dataanalyst_points').notNullable();
    table
      .integer('fk_question_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('questions');
    table.datetime('created_date').defaultTo(knex.fn.now()).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('answers');
};
