import React from "react";
const Shell = React.lazy(() => import('mesto/App'));


function App() {
    return (
        <React.Suspense fallback={<div>Загрузка ... </div>}>
            <Shell />
        </React.Suspense>
    );
}

/*
function App({ email }) {
    // const currentUser = React.useContext(CurrentUserContext);
    // const history = useHistory();

    // function handleSignOut() {
    //     onSignOut();
    // }

    return (
        <div>
            {/!*<Route exact path="/">*!/}
            {/!*    <div className="header__wrapper">*!/}
            {/!*        <p className="header__user">{ email }</p>*!/}
            {/!*        <button className="header__logout" onClick={handleSignOut}>Выйти</button>*!/}
            {/!*    </div>*!/}
            {/!*</Route>*!/}
            {/!*<Route path="/signup">*!/}
            {/!*    <Link className="header__auth-link" to="signin">Войти</Link>*!/}
            {/!*</Route>*!/}
            {/!*<Route path="/signin">*!/}
            {/!*    <Link className="header__auth-link" to="signup">Регистрация</Link>*!/}
            {/!*</Route>*!/}
        </div>
    );
}
*/

export default App;
