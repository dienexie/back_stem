
exports.up = function(knex) {
  return knex.schema.createTable('atividades', function(table){
    table.increments();

    table.string('diretoria').notNullable();
    table.string('titulo').notNullable();
    table.string('descrição').notNullable();
    table.integer('ponctuation').notNullable();
    table.integer('number_people').notNullable();

    table.string('director_id').notNullable();

    table.foreign('director_id').references('id').inTable('directors');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('atividades');
};
