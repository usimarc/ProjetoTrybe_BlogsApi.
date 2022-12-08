const { Category } = require('../models');

// const getCategory = async (name) => {  
//   const hasCategory = await Category.findOne({ where: { name } });

//   return hasCategory;
// };

const todasCategorias = async () => {
  const category = await Category.findAll();

  return category;
};

module.exports = {
  todasCategorias,
};