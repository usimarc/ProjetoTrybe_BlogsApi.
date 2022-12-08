const categoryService = require('../services/category.services');

const todasCategorias = async (_req, res) => {
  const categories = await categoryService.todasCategorias();
  return res.status(200).json(categories);
};

const criarCategoria = async (req, res) => {
  const category = req.body;
  const hasCategory = await categoryService.buscarCategoria(category.name);
  if (hasCategory) return res.status(409).json({ message: 'Category already registered' });
  await categoryService.criarCategoria(category);
  const newCategory = await categoryService.buscarCategoria(category.name);
  return res.status(201).json({ id: newCategory.id, ...category });
};

module.exports = {
  todasCategorias,
  criarCategoria,
};