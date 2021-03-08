/**
 * Arquivo: src/routers/auth.routes
 * Descrição: arquivo responsável pelas rotas de autenticação e usuários da aplicação
 * Data: 06/03/2021
 * Autor: Leticia Machado
 */

 const router = require('express')();
 const authController = require('../controllers/auth.controller');
 
 // => Definindo as rotas de autenticação

 router.post('/login', authController.user_authenticate); //{POST} localhost:3000/api/login
 
 module.exports = router;