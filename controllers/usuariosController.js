const bcrypt = require('bcryptjs');
const { Usuario } = require('../models');

const usuariosController = {
  // Listar usuarios
  index: async (req, res) => {
    let usuarios = await Usuario.findAll();
    return res.render('usuarios', { listaUsuarios: usuarios });
  },

  // Redirecionar para register
  register: (req, res) => {
    return res.render('register');
  },

  // Redirecionar para login
  login: (req, res) => {
    return res.render('login');
  },

  auth: async (req, res) => {
    const { email, senha } = req.body;

    const usuario = await Usuario.findOne({
      where: { email },
    });

    if (usuario && bcrypt.compareSync(senha, usuario.senha)) {
      req.session.usuariologado = usuario; //criando atributo usuarioLogado na session
      return res.redirect('/'); // redirecionando para pagina inicial
    } else {
      return res.redirect('/usuarios/login');
    }
  },
  
  // Adicionar usuário
  create: async (req, res) => {
    const { nome, email, senha } = req.body;

    const senhaCrypt = bcrypt.hashSync(senha, 10);

    const newUsuario = await Usuario.create ({
      nome: nome,
      email: email,
      senha: senhaCrypt
    });

    return res.redirect('/usuarios/login');
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