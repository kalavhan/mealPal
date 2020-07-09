import React from 'react';

const CategoryDetails = ( {clickButton}) => (
  <>
    <h2>Details</h2>
    <button type="button" onClick={clickButton}>
      Toggle
    </button>
  </>
);

export default CategoryDetails;