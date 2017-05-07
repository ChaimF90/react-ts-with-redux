exports.up = function (knex, Promise) {
    return knex.schema.createTable('people', table => {
        table.increments('id').primary();
        table.string('firstName');
        table.string('lastName');
        table.integer('age');
        table.integer('carId');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('people');
};