const { BlogPost, Category } = require('../models');

const createPost = async (post) => {
  await BlogPost.create(post);
};

const getPost = async (title) => {  
  const hasBlogPost = await BlogPost.findOne({ where: { title } });

  return hasBlogPost;
};

const findCategoryId = async (categoryIds) => {
  const hasPost = await Promise.all(categoryIds
    .map(async (categoryId) => Category.findByPk(categoryId)));

  const testCategory = hasPost.some((categoryId) => !categoryId);

  return testCategory;
};

module.exports = {
  createPost,
  getPost,
  findCategoryId,
};