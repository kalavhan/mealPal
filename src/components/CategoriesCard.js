import React from 'react';
import { useHistory } from 'react-router'
import { Redirect } from 'react-router-dom';

const CategoriesCard = ({ category, clickFunction }) => {
  const history = useHistory();
  const changeView = id => (
    history.push(`/category-meals/${id}`)
  );

  return (
    <div className="categoriesCard" style={{ backgroundImage: `URL(${category.strCategoryThumb})`}} onClick={() => changeView(category.strCategory)}>
      <h1>{category.strCategory}</h1>
    </div>
  )
};

export default CategoriesCard;