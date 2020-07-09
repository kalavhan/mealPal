import React from 'react';

const CategoriesCard = ({ category }) => {
  return (
    <div style={{ backgroundImage: `URL(${category.strCategoryThumb})` }}>
      <h1>{category.strCategory}</h1>
    </div>
  )
};

export default CategoriesCard;