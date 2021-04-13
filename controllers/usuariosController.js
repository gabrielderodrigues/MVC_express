const { signedCookie } = require('cookie-parser');
const { Usuario } = require('../models');

const usuariosController = {
  index: async (req, res) => {
    let usuarios = await Usuario.findAll();
    return res.json(usuarios);
  },
  create: async (req, res) => {
    const {nome: _nome, email: _email, senha: _senha } = req.body;
    const newUsuario = await Usuario.create ({
      nome: _nome,
      email: _email,
      senha: _senha
    });

    return res.json(newUsuario);
  },
  delete: async (req, res) => {
    const {id: _id} = req.params;
    
    const usuario = await Usuario.destroy({
        where: {
            id: _id
        }
    });

    return res.json(usuario);
  },
  update: async (req, res) => {
    // const { id: _id } = req.params;
    const usuario = req.params;
    const newUsuario = req.body;
    
    await Usuario.update(newUsuario, {
      where: {
        id: usuario.id
      }
    })

    return res.json(usuario);
  }
}


module.exports = usuariosController;