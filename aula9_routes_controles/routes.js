const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const contatoControlller = require('./controllers/contatoControlller')


//Rotas da home
route.get('/',homeController.paginaInicial);
route.post('/', homeController.trataPost);


//Rotas de contato
route.get('/contato', contatoControlller.paginaInicial);

module.exports = route;