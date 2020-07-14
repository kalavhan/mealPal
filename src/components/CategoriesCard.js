import React from 'react';
import PropType from 'prop-types';
import { useHistory } from 'react-router';

const CategoriesCard = ({ category }) => {
  const history = useHistory();
  const changeView = categoryName => (
    history.push(`/category-meals/${categoryName}`)
  );

  return (
    <div className="categoriesCard" role="button" onClick={() => changeView(category.strCategory)} onKeyUp={() => {}} tabIndex={0}>
      <h1>{category.strCategory}</h1>
      <div className="categoriesCardImg">
        <img src={category.strCategoryThumb} alt={`How to make ${category.strCategory} based meals`} />
      </div>
    </div>
  );
};

CategoriesCard.propTypes = {
  category: PropType.objectOf(PropType.object).isRequired,
};

export default CategoriesCard;
