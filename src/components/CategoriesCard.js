import React from 'react';
import PropType from 'prop-types';

const CategoriesCard = ({ categories, filterMeals }) => (
  <div className="categoriesList">
    {categories.map(category => (
      <div className="categoriesCard" role="button" key={category.idCategory} onClick={() => filterMeals(category.strCategory)} onKeyUp={() => {}} tabIndex={0}>
        <h1 data-testid={`${category.strCategory}`}>{category.strCategory}</h1>
        <div className="categoriesCardImg">
          <img src={category.strCategoryThumb} alt={`How to make ${category.strCategory} based meals`} />
        </div>
      </div>
    ))}
  </div>
);

CategoriesCard.propTypes = {
  categories: PropType.arrayOf(PropType.object).isRequired,
  filterMeals: PropType.func.isRequired,
};

export default CategoriesCard;
