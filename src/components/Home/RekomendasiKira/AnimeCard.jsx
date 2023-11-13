import React from 'react';

const AnimeCard = ({ anime, onClick }) => {
  return (
    <div className="anime-card flex justify-center h-[23.5vh] px-2" onClick={() => onClick(anime)}>
        <img src={anime.portraitImage} alt={anime.name} className='flex justify-center cursor-pointer rounded object-cover hover:opacity-60 ' />
    </div>
  );
};

export default AnimeCard;