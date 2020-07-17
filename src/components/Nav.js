import React from 'react';
import { useHistory } from 'react-router';
import logo from '../images/logo.png';

const Nav = () => {
  const history = useHistory();

  const goHome = () => {
    history.push('/');
  };

  return (
    <nav>
      <img src={logo} alt="mealpal logo" />
      <button onClick={() => goHome()} type="button">Categories</button>
    </nav>
  );
};

export default Nav;
