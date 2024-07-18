import React from 'react';
import {Link, Route} from 'react-router-dom';

export default function HeaderAuth({email}) {
    function handleSignOut() {
        localStorage.removeItem("jwt");
        const customEvent = new CustomEvent(
            'userLogged', {detail: {email: '', isLoggedIn: false}}
        );
        window.dispatchEvent(customEvent)
    }

    return (
        <div className="header__auth">
            <Route exact path="/">
                <div className="header__wrapper">
                    <p className="header__user">{email}</p>
                    <button className="header__logout" onClick={handleSignOut}>Выйти</button>
                </div>
            </Route>
            <Route path="/signup">
                <Link className="header__auth-link" to="signin">Войти</Link>
            </Route>

            <Route path="/signin">
                <Link className="header__auth-link" to="signup">Регистрация</Link>
            </Route>
        </div>

    );
}