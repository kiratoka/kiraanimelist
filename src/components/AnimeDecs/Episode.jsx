import React from "react";
import { FaStar, FaTrophy, FaPlay, FaTag, FaThumbsUp, FaCheck } from "react-icons/fa";

export default function Episode({ episode, rating, rank, status, genre, score }) {
    // Data untuk 6 kotak
    const data = [
        { icon: <FaStar />, title: "Score", value: score },
        { icon: <FaTrophy />, title: "Rank", value: rank },
        { icon: <FaPlay />, title: "Episode", value: episode },
        { icon: <FaTag />, title: "Genre", value: genre },
        { icon: <FaThumbsUp />, title: "Rating", value: rating },
        { icon: <FaCheck />, title: "Status", value: status },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {/* Looping data untuk membuat kotak */}
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center bg-gray-800 rounded-lg p-4 shadow-lg imgAnimeList"
                    >
                        {/* Icon untuk kotak */}
                        <div className="text-cyan-400 text-4xl mb-2">{item.icon}</div>
                        {/* Judul untuk kotak */}
                        <div className="text-white text-lg font-bold mb-1">{item.title}</div>
                        {/* Nilai untuk kotak */}
                        <div className="text-white text-center text-xl">{item.value}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
