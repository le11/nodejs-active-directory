/**
 * Arquivo: src/config/activeDirectory
 * Descrição: arquivo responsável pela configuração de acesso ao Active Directory
 * Data: 05/03/2021
 * Autor: Leticia Machado
 */

 const ActiveDirectory = require('activedirectory');
 const dotenv = require('dotenv');
 
 dotenv.config();
 
 
 const config = {
     url: process.env.AD_URL, // IP e porta do servidor AD Ex: ldap://XXX.XXX.XXX.XXX:XXX
     baseDN: process.env.DOMAIN_CONTROLLER, //nome do domínio, exemplo: teste.local
     username: process.env.AD_USERNAME, // usuário do AD para configuração de acesso
     password: process.env.AD_PASSWORD, // senha do usuário
 }
 
 const ad = new ActiveDirectory(config);
 
 module.exports = ad;