import React from 'react';
import {Link, Route, Switch, useHistory} from 'react-router-dom';
import * as auth from "../utils/auth.js";

export default function HeaderAuth({email, onSignOut}) {
    function handleSignOut(){
        // onSignOut();

        localStorage.removeItem("jwt");
        console.log('remove jwt2 ')
        const customEvent = new CustomEvent(
            'userLogged', {detail: { email: '', isLoggedIn: false } }
        );
        window.dispatchEvent(customEvent)

    }
    // // при монтировании App описан эффект, проверяющий наличие токена и его валидности
    // React.useEffect(() => {
    //     const token = localStorage.getItem("jwt");
    //     console.log(token);
    //     if (token) {
    //         console.log('pre check jwt')
    //         auth
    //             .checkToken(token)
    //             .then((res) => {
    //                 const customEvent = new CustomEvent(
    //                     'userLogged', {detail: { email: res.data.email, isLoggedIn: true } }
    //                 );
    //                 setLoggedIn(true)
    //                 window.dispatchEvent(customEvent)
    //                 console.log('check jwt')
    //             })
    //             .catch((err) => {
    //                 console.log('remove jwt');
    //                 localStorage.removeItem("jwt");
    //                 console.log(err);
    //             });
    //     }
    // }, [history]);
    //
    // function onSignOut() {
    //     // localStorage.removeItem("jwt");
    //     console.log('remove jwt2 ')
    //     const customEvent = new CustomEvent(
    //         'userLogged', {detail: { email: '', isLoggedIn: false } }
    //     );
    //     window.dispatchEvent(customEvent)
    // }

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