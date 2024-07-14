import React from 'react';
import PopupWithForm from './PopupWithForm';
import profileApi from '../utils/profileApi';

function EditAvatarPopup({isOpen, onClose}) {
    const inputRef = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();

        handleUpdateAvatar({
            avatar: inputRef.current.value,
        });
    }

    function handleUpdateAvatar(avatarUpdate) {
        profileApi
            .setUserAvatar(avatarUpdate)
            .then((newUserData) => {
                const customEvent = new CustomEvent(
                    'userChanged', {detail: newUserData }
                );
                window.dispatchEvent(customEvent)
                // closeAllPopups();
            })
            .catch((err) => console.log(err));
    }

    return (
        <PopupWithForm
            isOpen={isOpen} onSubmit={handleSubmit} onClose={onClose} title="Обновить аватар" name="edit-avatar"
        >

            <label className="popup__label">
                <input type="url" name="avatar" id="owner-avatar"
                       className="popup__input popup__input_type_description" placeholder="Ссылка на изображение"
                       required ref={inputRef}/>
                <span className="popup__error" id="owner-avatar-error"></span>
            </label>
        </PopupWithForm>
    );
}

export default EditAvatarPopup;
