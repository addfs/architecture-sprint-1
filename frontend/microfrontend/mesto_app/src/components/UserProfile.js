import React from 'react';

const UserProfileService = React.lazy(
    () => import('profile/App')
);

const UserProfile = () => {
    return (
        <React.Suspense fallback={<div>Загрузка...</div>}>
            <UserProfileService/>
        </React.Suspense>);
}

export default UserProfile;