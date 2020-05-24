const connection = require('../database/connection');

module.exports = {
    async index (request, response) {
      const directors = await connection('directors').select('*');
  
      return response.json(directors);
    },

    async create (request, response) {
      const { id, name,  senha, ponctuation} = request.body;

      await connection('directors').insert({
        id,
        name,
        senha,
        ponctuation,
      })
    
      return response.json();
    }
};