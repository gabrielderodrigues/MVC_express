module.exports = (sequelize, DataTypes) => {
  const Comentario = sequelize.define(
    'Comentario', {
      texto: DataTypes.STRING,
      usuarios_id: DataTypes.INTEGER,
      posts_id: DataTypes.INTEGER
    }, {
      tableName: "comentarios",
      timestamps: false
    }
  );
  
  // Comentario.associate = (models) => {
  //   // Relação N:1 (vários posts de 1 usuário)
  //   Comentario.belongsTo(models.Post, {as: "post", foreignKey: "posts_id"})
  // };

  return Comentario;
}