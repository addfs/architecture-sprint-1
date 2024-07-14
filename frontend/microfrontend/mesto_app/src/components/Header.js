import React from 'react';
import { Route, Link } from 'react-router-dom';
import logoPath from '../images/logo.svg';
import UserProfile from "./UserProfile";

// В корневом компоненте App описаны обработчики: onRegister, onLogin и onSignOut. Эти обработчики переданы в соответствующие компоненты: Register.js, Login.js, Header.js
function Header ({onSignOut, email }) {
  function handleSignOut(){
    onSignOut();
  }
  return (
    <header className="header page__section">
      <img src={logoPath} alt="Логотип проекта Mesto" className="logo header__logo" />
      <UserProfile email={email}  />
    </header>
  )
}

export default Header;
