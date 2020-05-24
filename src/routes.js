const express = require('express');

const MembrosController = require('./controllers/MembrosController');
const DirectorsController = require('./controllers/DirectorsController');
const AtividadesController = require('./controllers/AtividadesController');
const OportunidadesController = require('./controllers/OportunidadesController');
const EventosController = require('./controllers/EventosController');

const PonctuationMembroController = require('./controllers/PonctuationMembroController');
const PonctuationDirectorController = require('./controllers/PonctuationDirectorController');

const LoginMembroController = require('./controllers/LoginMembroController');
const LoginDirectorController = require('./controllers/LoginDirectorController');

const routes = express.Router();

routes.post('/sessions/membro', LoginMembroController.create);
routes.post('/sessions/director', LoginDirectorController.create);

routes.get('/directors', DirectorsController.index);
routes.post('/directors', DirectorsController.create);

routes.get('/membros', MembrosController.index);
routes.post('/membros', MembrosController.create);

routes.get('/atividades', AtividadesController.index);
routes.post('/atividades', AtividadesController.create);
routes.delete('/atividades/:id', AtividadesController.delete);

routes.get('/oportunidades', OportunidadesController.index);
routes.post('/oportunidades', OportunidadesController.create);
routes.delete('/oportunidades/:id', OportunidadesController.delete);

routes.get('/eventos', EventosController.index);
routes.post('/eventos', EventosController.create);
routes.delete('/eventos/:id', EventosController.delete);

routes.get('/ponctuationMembro', PonctuationMembroController.index);
routes.get('/ponctuationDirector', PonctuationDirectorController.index);

module.exports = routes 