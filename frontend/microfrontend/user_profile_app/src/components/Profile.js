import React from 'react';
import { Route, Link } from 'react-router-dom';

export default function UserProfile() {
    return (
        <div className="header__auth">
            <Route exact path="/">
                <div className="header__wrapper">
                    <p className="header__user">email</p>
                    <button className="header__logout" >Выйти</button>
                </div>
            </Route>
            <Route path="/signup">
                <Link className="header__auth-link" to="signin">Войти</Link>
            </Route>

            <Route path="/signin">
                <Link className="header__auth-link" to="signup">Регистрация</Link>
            </Route>
        </div>
    )
    ;
}