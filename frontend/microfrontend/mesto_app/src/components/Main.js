import React from 'react';
import Card from './Card';

const Profile = React.lazy(() => import('profile/Profile').catch(() => {
    return {default: () => <>Component is not available!</>};
}));

function Main({ cards, onAddPlace, onCardClick, onCardLike, onCardDelete }) {
  return (
    <main className="content">
        <React.Suspense fallback={'Загрузка ...'}>
            <Profile onAddPlace={onAddPlace}  />
        </React.Suspense>
      <section className="places page__section">
        <ul className="places__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
