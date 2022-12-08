const { BlogPost, Category, PostCategory } = require('../models');

const criarPost = async (post) => {
  await BlogPost.create(post);
};

const pegarPost = async (title) => {  
  const hasBlogPost = await BlogPost.findOne({ where: { title } });

  return hasBlogPost;
};

const findCategoryId = async (categoryIds) => {
  const hasPost = await Promise.all(categoryIds
    .map(async (categoryId) => Category.findByPk(categoryId)));
  const testCategory = hasPost.some((categoryId) => !categoryId);
  return testCategory;
};

const criarPostCategory = async (categoryIds) => {
  await Promise.all(categoryIds
    .map(async (categoryId) => PostCategory.create(categoryId)));
};

module.exports = {
  pegarPost,
  criarPost,
  findCategoryId,
  criarPostCategory,

};