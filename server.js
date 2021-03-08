/**
 * Arquivo: server.js
 * Descrição: arquivo responsável pela configuração e execução da aplicação
 * Data: 05/03/2021
 * Autor: Leticia Machado
 */

 const app = require('./src/app');
 const port = process.env.PORT || 3000;

 app.listen(port, () => {
     console.log("Success! Port: ", port);
 })