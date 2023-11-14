import React from 'react';

const AnimeCard = ({ anime, onClick }) => {
  return (
    <div className="anime-card flex justify-center max-lg:w-[11vw] max-lg:h-[10vh] max-xl:w-[11vw] max-xl:h-[15vh] h-[23.5vh] md:px-2" onClick={() => onClick(anime)}>
      <img src={anime.portraitImage} alt={anime.name} className='flex justify-center cursor-pointer rounded hover:opacity-60 ' />
    </div>
  );
};

export default AnimeCard;