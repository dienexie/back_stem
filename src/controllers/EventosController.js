const connection = require('../database/connection');

module.exports = {
    async index (request, response) {
      const eventos = await connection('eventos').select('*');
      
      const [count] = await connection('eventos').count();

      response.header('X-Total-Count', count['count(*)']);

      return response.json(eventos);
    },

    async create (request, response) {
      const { titulo, descrição, data, time, local } = request.body;

      const [id] = await connection('eventos').insert({
        titulo,
        descrição,
        data,
        time,
        local,
      })
    
      return response.json({ id });
    },

    async delete (request, response){
      const { id } = request.params;

      await connection('eventos').where('id', id).delete();

      return response.status(204).send();
    }
};