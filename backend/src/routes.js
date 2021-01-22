const { Router } = require('express');

const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.get('/search', SearchController.index);


module.exports = routes;


// METODOS HTTP: GET(listar, buscar, etc...), POST(criar, salvar, cadastrar), PUT(editar), DELETE(deletar)

// Tipos de parâmetros:

// Query Params: request.query ( Filtros, ordenação, paginação. ...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body : resquest.body (Dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)