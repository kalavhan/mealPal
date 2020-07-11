import React from 'react';
import { useHistory } from 'react-router';

const CategoriesCard = ({ category, clickFunction }) => {
  const history = useHistory();
  const changeView = categoryName => (
    history.push(`/category-meals/${categoryName}`)
  );

  return (
    <div className="categoriesCard" style={{ backgroundImage: `URL(${category.strCategoryThumb})`}} onClick={() => changeView(category.strCategory)}>
      <h1>{category.strCategory}</h1>
    </div>
  )
};

export default CategoriesCard;