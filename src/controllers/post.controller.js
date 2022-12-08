const postService = require('../services/post.services');
const jwtConfig = require('../middlewares/jwtconfig');
require('dotenv').config();

const secret = process.env.JWT_SECRET || 'senha';

const criarPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { authorization } = req.headers;
  const hasPost = await postService.pegarPost(title);
  if (hasPost) return res.status(409).json({ message: 'Post already registered' });
  const hasCategoryIds = await postService.findCategoryId(categoryIds);
  if (hasCategoryIds) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }
  const payload = jwtConfig.verificaToken(authorization, secret);
  await postService.criarPost({
    title, content, userId: payload.id, updated: new Date(), published: new Date(),
  });
  const newPost = await postService.pegarPost(title);
  const postCategories = categoryIds.map((category) => (
    { postId: newPost.id, categoryId: category }
  ));
  await postService.criarPostCategory(postCategories);
  return res.status(201).json(newPost);
};

module.exports = {
  criarPost,
};