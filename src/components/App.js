import React, { useState } from 'react';
import Categories from './Categories';
import CategoryDetails from './CategoryDetails';

const App = () => {
  const [toggle, setToggle] = useState(true);
  const toggleChecked = () => setToggle(toggle => !toggle);
  return (
    <>
        {toggle && <Categories /> }
        {!toggle && <CategoryDetails /> }
        <button type="button" onClick={toggleChecked}>
            Toggle
        </button>
    </>
  );
};

export default App;
