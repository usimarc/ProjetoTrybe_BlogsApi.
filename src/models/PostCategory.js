module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
    categoryId: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
  },
  {
    timestamps: false,
    tableName: 'posts_categories',
    underscored: true,
  });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category,
      { 
        through: PostCategory,
        foreignKey: 'postId',
        otherKey: 'categoryId',
        as: 'category' 
      });

      models.Category.belongsToMany(models.BlogPost,
        { 
          through: PostCategory,
          foreignKey: 'categoryId',
          otherKey: 'postId',
          as: 'blog_posts' 
        });
  };

  return PostCategory;
};