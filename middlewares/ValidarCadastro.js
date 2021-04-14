const nodemon = require('nodemon');
const { Usuario } = require('../models')

module.exports = async (request, response, next) => {
  let { nome, email, senha } = request.body; //recebo o email q o usuario digitou

  let user = await Usuario.findAll({
    where: {
      email,
      senha
    }
  }); //verifica se existe usuario c o email
    
  if (user.length) { 
    response.status(400).json({erro:"Email já cadastrado."})
    return;
  } else {
    if (!email) {
      return response.status(400).json({ erro:"Por favor, insira novamente o seu Email"});
    } else if (senha.length < 6 || senha.length > 12) {
      return response.status(400).json({ erro: "Senha inválida"});
    } else if (nome.length < 0) {
      return response.status(400).json({ error: "Nome inválido."});
    } else {
      next();
    }
  }

};