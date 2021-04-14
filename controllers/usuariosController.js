const { Usuario } = require('../models');

const usuariosController = {
  // Listar usuarios
  index: async (req, res) => {
    let usuarios = await Usuario.findAll();
    return res.json(usuarios);
  },
  
  // Adicionar usuário
  create: async (req, res) => {
    const { nome, email, senha } = req.body;
    const newUsuario = await Usuario.create ({
      nome: nome,
      email: email,
      senha: senha
    });

    return res.json(newUsuario);
  },

  // Atualizar algum dado do usuário
  update: async (req, res) => {
    // const usuario = req.params;
    const { id } = req.params;
    const newUsuario = req.body;
    
    await Usuario.update(newUsuario, {
      where: {
        id: id
      }
    });

    return res.json(newUsuario);
  },

  // Deletar usuário pelo id
  delete: async (req, res) => {
    const { id } = req.params;
    
    const usuarioDeletado = await Usuario.destroy({
        where: {
            id: id
        }
    });

    return res.json(usuarioDeletado);
  }
};

module.exports = usuariosController;