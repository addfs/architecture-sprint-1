import React from 'react';

import {CurrentUserContext} from "mesto/CurrentUserContext";
import EditAvatarPopup from "./EditAvatarPopup";
import EditProfilePopup from "./EditProfilePopup";
import profileApi from "../utils/profileApi";

import '../index.css';

export default function Profile({onAddPlace}) {
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
        React.useState(false);

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
        React.useState(false);

    const onEditAvatar = () => {
        setIsEditAvatarPopupOpen(true);
    }
    const onEditProfile = () => {
        setIsEditProfilePopupOpen(true);
    }
    const currentUser = React.useContext(CurrentUserContext);
    const imageStyle = {backgroundImage: `url(${currentUser.avatar})`};

    function handleUpdateAvatar(avatarUpdate) {
        profileApi
            .setUserAvatar(avatarUpdate)
            .then((newUserData) => {
                const customEvent = new CustomEvent(
                    'userChanged', {detail: newUserData }
                );
                window.dispatchEvent(customEvent)
                setIsEditAvatarPopupOpen(false)
            })
            .catch((err) => console.log(err));
    }

    function handleEditProfile(userUpdate) {
        profileApi
            .setUserInfo(userUpdate)
            .then((newUserData) => {
                const customEvent = new CustomEvent(
                    'userChanged', {detail: newUserData }
                );
                window.dispatchEvent(customEvent)
                setIsEditProfilePopupOpen(false)
            })
            .catch((err) => console.log(err));
    }

    return (
        <section className="profile page__section">
            <div className="profile__image" onClick={onEditAvatar} style={imageStyle}></div>
            <div className="profile__info">
                <h1 className="profile__title">{currentUser.name}</h1>
                <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
                <p className="profile__description">{currentUser.about}</p>
            </div>
            <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
            <EditAvatarPopup
                isOpen={isEditAvatarPopupOpen}
                onUpdateAvatar={handleUpdateAvatar}
                onClose={() => setIsEditAvatarPopupOpen(false)}
            />
            <EditProfilePopup
                isOpen={isEditProfilePopupOpen}
                onUpdateUser={handleEditProfile}
                onClose={() => setIsEditProfilePopupOpen(false)}
            />
        </section>
    );
}