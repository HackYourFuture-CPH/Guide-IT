exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, user: 'Beth' },
        { id: 2, user: 'Qamar' },
        { id: 3, user: 'Aijaz' },
      ]);
    });
};
