
exports.up = function (knex, Promise) {
    return knex.schema
        .createTableIfNotExists('skills', table => {
            table.increments();
            table.string('name', 255);
            table.boolean('status').defaultTo(0); //Approved is 1
        });
        
};

exports.down = function (knex, Promise) {
    return knex.schema
        .dropTableIfExists('skills')
};