const connection = require('../database/connection');

module.exports = {
  async create(request, response) {
    const { id } = request.body;
     
    const director = await connection('directors').where('id', id).select('name').first();

    if(!director) {
      return response.status(400).json({ error: 'Nenhum diretora encontrada com este ID' });
    }

    return response.json(director);
  }
}