const categoryService = require('../services/category.services');

const todasCategorias = async (_req, res) => {
  const categories = await categoryService.todasCategorias();
  return res.status(200).json(categories);
};

module.exports = {
  todasCategorias,
};