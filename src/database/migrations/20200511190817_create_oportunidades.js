
exports.up = function(knex) {
  return knex.schema.createTable('oportunidades', function(table){
    table.increments();

    table.string('titulo').notNullable();
    table.string('descrição').notNullable();
    table.date('data_limite');
    table.string('site');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('oportunidades');
};
