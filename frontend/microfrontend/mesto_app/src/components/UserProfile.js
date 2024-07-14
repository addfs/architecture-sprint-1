import React from 'react';

const UserProfileService = React.lazy(() => import('user_profile_app/App'));

const UserProfile = () => {
    return (
        <React.Suspense fallback={<div>Загрузка...</div>}>
        </React.Suspense>);
}

export default UserProfile;