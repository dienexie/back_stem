const connection = require('../database/connection');

module.exports = {
    async index (request, response) {
      const atividades = await connection('atividades')
      .join('directors', 'directors.id','=', 'atividades.director_id').select(['atividades.*','directors.name']);
  
      const [count] = await connection('atividades').count();

      response.header('X-Total-Count', count['count(*)']);

      return response.json(atividades);
    },

    async create (request, response) {
      const { diretoria, titulo, descrição, ponctuation, number_people } = request.body;
      const director_id = request.headers.authorization;

      const [id] = await connection('atividades').insert({
        diretoria,
        titulo,
        descrição,
        ponctuation,
        number_people,
        director_id,
      })
    
      return response.json({ id });
    },

    async delete(request, response) {
      const{ id } = request.params;
      
      await connection('atividades').where('id', id).delete();

      return response.status(204).send();
    }
};