"use client"
import React, { useState } from 'react';
import AnimeCard from './AnimeCard';
import Link from 'next/link';


const AnimeListKira = ({ animeList }) => {
    const [selectedAnime, setSelectedAnime] = useState(animeList[0]);

    const handleAnimeClick = (anime) => {
        setSelectedAnime(anime);
    };

    return (
        <div>
            <h1 className='text-2xl font-bold text-color-primary mx-6 my-3'>Anime Favorite Kiratoka</h1>
            <div className="anime-list grid grid-cols-2 min-h-[65vh] mx-6 ">
                <div>
                    <Link href={selectedAnime.link}>
                    <img src={selectedAnime.landscapeImage} alt={selectedAnime.name} className='h-[55vh] rounded hover:opacity-60' />
                    <h2  className="mt-7 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent text-left pb-1">{selectedAnime.name}</h2>
                    </Link>
                  
                </div>
                <div className="anime-cards grid grid-cols-4 gap-x-2 gap-y-5 ml-4 h-[60vh] px-10">
                    {animeList.map((anime) => (
                        <AnimeCard key={anime.id} anime={anime} onClick={handleAnimeClick} />
                    ))}
                </div>
            </div>
            <div className='mt-2 h-[26vh] mx-6'>
                <p className='text-sm'>{selectedAnime.synopsis}</p>
            </div>
        </div>
    );

};

export default AnimeListKira;