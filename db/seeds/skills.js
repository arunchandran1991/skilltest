
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('skills').del()
    .then(function () {
      // Inserts seed entries
      return knex('skills').insert([
        {id: 1, name: 'Javascript', status:'1'},
        {id: 2, name: 'Java', status:'0'},
        {id: 3, name: 'Mysql', status:'1'},
      ]);
    });
};
