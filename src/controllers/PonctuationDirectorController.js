const connection = require('../database/connection');

module.exports = {
  async index(request, response){
      const director_id = request.headers.authorization;

      const ponctuation = await connection('directors').where('id', director_id).select('*');

      return response.json(ponctuation[0].ponctuation);
  }
}