const { Post } = require('../models');

const postsController = {
  index: async (request, response) => {
    const posts = await Post.findAll({
        include: ['usuario', 'comentarios', 'curtiu']
    
    });

    return response.render('index', { listaPosts: posts });
  },

  show: async (req, res) => {
    const { usuarios_id } = req.params;
    const post = await Post.findAll({
      where: {
        usuarios_id
      }
    })

    return res.json(post);
  },

  create: async (req, res) => {
    const { texto, usuarios_id, n_likes, img } = req.body;
    const newPost = await Post.create ({
      texto,
      usuarios_id,
      n_likes,
      img
    });

    return res.json(newPost);
  },

  update: async (req, res) => {
    const { id } = req.params;
    const newPost = req.body;

    await Post.update(newPost, {
      where: {
        id: id
      }
    });

    return res.json(newPost);
  },

  delete: async (req, res) => {
    const { id } = req.params;

    const postDeletado = await Post.destroy({
      where: {
        id: id
      }
    });

    return res.json(postDeletado);
  }
};

module.exports = postsController;
