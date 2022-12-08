const { Category } = require('../models');

const buscarCategoria = async (name) => {  
  const hasCategory = await Category.findOne({ where: { name } });

  return hasCategory;
};

const todasCategorias = async () => {
  const category = await Category.findAll();
  return category;
};

const criarCategoria = async (category) => {
  await Category.create(category);
};

module.exports = {
  todasCategorias,
  buscarCategoria,
  criarCategoria,
};