module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    'Post', {
      texto: DataTypes.STRING,
      usuarios_id: DataTypes.INTEGER,
      n_likes: DataTypes.INTEGER,
      img: DataTypes.STRING
    }, {
      tableName: "posts",
      timestamps: false
    }
  );

  // Post.associate = (models) => {
  //   // Relação N:1 (vários posts de 1 usuário)
  //   Post.belongsTo(models.Usuario, {as: "usuario", foreignKey: "usuarios_id"});
  // };

  // Post.associate = (models) => {
  //   // Relação de 1:N (usuário tem vários posts)
  //   Post.hasMany(models.Comentario, {as: "comentarios", foreignKey: "posts_id"})
  // }

  return Post;
}