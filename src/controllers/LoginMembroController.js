const connection = require('../database/connection');

module.exports = {
  async create(request, response) {
    const { id } = request.body;
     
    const membro = await connection('membros').where('id', id).select('name').first();

    if(!membro) {
      return response.status(400).json({ error: 'Nenhum membro encontrado com este ID' });
    }
 
    return response.json(membro)
  }
}