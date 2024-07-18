import React from "react";
import {Route, Switch, useHistory} from "react-router-dom";
import * as auth from "../utils/auth";
import Register from "./Register";
import Login from "./Login";
import InfoTooltip from "./InfoTooltip";

function Auth() {
    const history = useHistory();
    const [tooltipStatus, setTooltipStatus] = React.useState("");

    const [isInfoToolTipOpen, setIsInfoToolTipOpen] = React.useState(false);

    React.useEffect(() => {
        const token = localStorage.getItem("jwt");
        if (token) {
            auth
                .checkToken(token)
                .then((res) => {
                    const customEvent = new CustomEvent(
                        'userLogged', {detail: {email: res.data.email, isLoggedIn: true}}
                    );
                    window.dispatchEvent(customEvent)

                    history.push("/");
                })
                .catch((err) => {
                    localStorage.removeItem("jwt");
                    console.log(err);
                });
        }
    }, [history]);


    function onRegister({email, password}) {
        auth
            .register(email, password)
            .then((res) => {
                setTooltipStatus("success");
                setIsInfoToolTipOpen(true);
                history.push("/signin");
            })
            .catch((err) => {
                setTooltipStatus("fail");
                setIsInfoToolTipOpen(true);
            });
    }

    function onLogin({email, password}) {
        auth
            .login(email, password)
            .then((res) => {
                const customEvent = new CustomEvent(
                    'userLogged', {detail: {email: email, isLoggedIn: true}}
                );
                window.dispatchEvent(customEvent)
                history.push("/");
            })
            .catch((err) => {
                console.error("Error on logging in {}", err);
                setTooltipStatus("fail");
                setIsInfoToolTipOpen(true);
            });
    }

    function closeAllPopups() {
        setIsInfoToolTipOpen(false);
    }

    return (
        <div>
            <Switch>
                <Route path="/signup">
                    <Register onRegister={onRegister}/>
                </Route>
                <Route path="/signin">
                    <Login onLogin={onLogin}/>
                </Route>
            </Switch>
            <InfoTooltip
                isOpen={isInfoToolTipOpen}
                onClose={closeAllPopups}
                status={tooltipStatus}
            />
        </div>
    )
}

export default Auth;