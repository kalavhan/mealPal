import React from 'react';
import logo from '../images/logo.png';
import { useHistory } from 'react-router';

const Nav = () => {
  const history = useHistory();

  const goHome = () => {
    history.push('/');
  }

  return (
    <nav>
      <img src={logo} alt="mealpal logo"/>
      <button onClick={() => goHome()}>Categories</button>
    </nav>
  )
}

export default Nav;