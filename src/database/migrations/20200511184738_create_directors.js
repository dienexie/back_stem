
exports.up = function(knex) {
  return knex.schema.createTable('directors', function(table){
    table.string('id').primary;
    table.string('name').notNullable();
    table.string('senha').notNullable();
    table.integer('ponctuation').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('directors');
};
