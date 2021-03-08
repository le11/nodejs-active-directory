/**
 * Arquivo: src/controllers/auth.controller
 * Descrição: arquivo responsável pela lógica de autenticação e usuários da API
 * Data: 05/03/2021
 * Autor: Leticia Machado
 */
 const ad = require("../config/activeDirectory");
 
 //Método para autenticar usuários
 exports.user_authenticate = async (req, res) => {
   const { user, pass, domain } = req.body;
   try {
     await ad.authenticate( domain + "\\" + user, pass,
      function (err, auth) {
        if (auth) {
          return res.status(200).json({
                message: "Authenticated!"
              });
          }
        else {
          return res.status(401).send({
              message: "Authentication failed!",
              error: err
          });
       }
      });
    }catch (err) {
    return res.status(500).send({ message: "ERROR " + err });
   }
 };