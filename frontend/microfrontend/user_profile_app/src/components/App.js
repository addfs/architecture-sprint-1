import React from "react";
import { Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { CurrentUserContext } from "library_app";
import * as auth from "../utils/auth";
import Register from "./Register";
import Login from "./Login";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";



function App({ onSignOut, email }) {
    const currentUser = React.useContext(CurrentUserContext);
    const history = useHistory();

    function handleSignOut() {
        onSignOut();
    }

    return (
        <div>
        </div>
    );
}

export default App;
