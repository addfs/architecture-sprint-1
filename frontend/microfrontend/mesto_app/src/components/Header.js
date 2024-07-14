import React from 'react';
import logoPath from '../images/logo.svg';

const HeaderAuth = React.lazy(() => import('auth/HeaderAuth').catch(() => {
    return {default: () => <>Component is not available!</>};
}));

// В корневом компоненте App описаны обработчики: onRegister, onLogin и onSignOut. Эти обработчики переданы в соответствующие компоненты: Register.js, Login.js, Header.js
function Header({email}) {
    return (
        <header className="header page__section">
            <img src={logoPath} alt="Логотип проекта Mesto" className="logo header__logo"/>

            <React.Suspense fallback={'Загрузка ...'}>
                <HeaderAuth email={email}  />
            </React.Suspense>
        </header>
    )
}

export default Header;
