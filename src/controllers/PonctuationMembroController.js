const connection = require('../database/connection');

module.exports = {
  async index(request, response){
      const membro_id = request.headers.authorization;

      const ponctuation = await connection('membros').where('id', membro_id).select('*');

      console.log(ponctuation)

      return response.json(ponctuation[0].ponctuation);
  }
}