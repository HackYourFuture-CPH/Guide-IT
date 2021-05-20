exports.up = function (knex) {
  return knex.schema.alterTable('questions', (table) => {
    table.string('image_url');
    table.bool('is_agreement_question');
  });
};

exports.down = function (knex) {
  return knex.schema.alterTable('questions', (table) => {
    table.dropColumn('image_url');
    table.dropColumn('is_agreement_question');
  });
};
