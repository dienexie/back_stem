const connection = require('../database/connection');

module.exports = {
    async index (request, response) {
      const oportunidades = await connection('oportunidades').select('*');
  
      const [count] = await connection('oportunidades').count();

      response.header('X-Total-Count', count['count(*)']);

      return response.json(oportunidades);
    },

    async create (request, response) {
      const { titulo, descrição, data_limite, site } = request.body;

      const [id] = await connection('oportunidades').insert({
        titulo,
        descrição,
        data_limite,
        site,
      })
    
      return response.json({ id });
    },

    async delete (request, response){
      const { id } = request.params;

      await connection('oportunidades').where('id', id).delete();

      return response.status(204).send();
    }
};