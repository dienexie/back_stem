const connection = require('../database/connection');

module.exports = {
    async index (request, response) {
      const membros = await connection('membros').select('*');

      return response.json(membros);
    },


    async create(request, response) {
      const { id, name, senha, ponctuation } = request.body;

      await connection('membros').insert({
       id,
       name,
       senha,
       ponctuation, 
    })

      return response.json();
    }
};