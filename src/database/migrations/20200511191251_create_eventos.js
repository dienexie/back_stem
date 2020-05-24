
exports.up = function(knex) {
  return knex.schema.createTable('eventos', function(table){
    table.increments();
    
    table.string('titulo').notNullable();
    table.string('descrição').notNullable();
    table.date('data').notNullable();
    table.time('time', {precision: 4}).notNullable();
    table.string('local').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('eventos');
};
