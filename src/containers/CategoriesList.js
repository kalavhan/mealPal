import React from 'react';
import CategoriesCard from '../components/CategoriesCard';

const CategoriesBox = ({ categories, clickButton }) => {
  console.log(categories);
  return (
    <div>
      {categories.map(category => <CategoriesCard category={category} />)}
    </div>
  )
}

export default CategoriesBox;
