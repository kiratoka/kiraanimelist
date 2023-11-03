"use client"
import React, { useState } from "react";


const CharaAnime = ({ api }) => {
    var japanese_voice_actors = api.data.filter((item) => {
        // item adalah objek yang ada di dalam array data
        return item.voice_actors.filter((actor) => {
            // actor adalah objek yang ada di dalam array voice_actors
            return actor.language === "Japanese"; // mengembalikan data pengisi suara yang bahasa Jepang
        });
    });
    // const namaPengisiSuara = [];
    // const fotoPengisiSuara = [];
    // const namaKarakterAnime = [];
    // const fotoKarakterAnime = [];



    // // Melakukan iterasi pada array data
    // api.data.slice(0, 12).map((item) => {
    //     // item adalah objek yang ada di dalam array data
    //     // Menambahkan nama karakter ke array namaKarakterAnime
    //     namaKarakterAnime.push(item.character.name);
    //     // Menampilkan nama karakter
    //     console.log(item.character.name);
    //     // Menambahkan gambar jpg karakter ke array fotoKarakterAnime
    //     fotoKarakterAnime.push(item.character.images.jpg.image_url);
    //     // Menampilkan gambar jpg karakter
    //     console.log(item.character.images.jpg.image_url);
    //     // Melakukan iterasi pada array voice_actors
    //     item.voice_actors.map((actor) => {
    //         // actor adalah objek yang ada di dalam array voice_actors
    //         if (actor.language === "Japanese") {
    //             // jika bahasa adalah Jepang
    //             // Menambahkan nama pengisi suara ke array namaPengisiSuara
    //             namaPengisiSuara.push(actor.person.name);
    //             // Menampilkan nama pengisi suara
    //             console.log(actor.person.name);
    //             // Menambahkan gambar jpg pengisi suara ke array fotoPengisiSuara
    //             fotoPengisiSuara.push(actor.person.images.jpg.image_url);
    //             // Menampilkan gambar jpg pengisi suara
    //             console.log(actor.person.images.jpg.image_url);
    //         }
    //     });
    // });


    const [limit, setLimit] = useState(6);
    const [showAll, setShowAll] = useState(false);
    const handleShowAll = () => { setLimit(showAll ? 6 : api.data.length); setShowAll(!showAll); };

    // Mengembalikan JSX
    return (

        

        <div class="bg-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 gap-4">
            {/* <!-- Melakukan iterasi pada array data dan menampilkan elemen JSX untuk setiap objek --> */}
            {api.data.slice(0, limit).map((item) => (
                <div key={item.character.mal_id} class="flex flex-row md:flex-row py-2 justify-center rounded-lg">
                    {/* <!-- Kotak pertama berisi foto dan nama karakter anime --> */}
                    <div class="gradientWarna p-4 w-full md:w-1/2 rounded-lg">
                        <img
                            src={item.character.images.jpg.image_url}
                            alt={item.character.name}
                            class="w-full h-auto max-md:h-52 scaleComponent rounded-lg"
                        />{" "}
                        {/* Menampilkan gambar jpg karakter */}
                        <h3 class="text-white text-xl font-bold mt-5 text-center flex justify-center items-center">
                            {item.character.name}
                        </h3>{" "}
                        {/* Menampilkan nama karakter */}
                    </div>
                    {/* <!-- Kotak kedua berisi foto dan nama pengisi suara Jepang --> */}
                    <div class="gradientWarna2 p-4 w-full md:w-1/2 rounded-lg">
                        {/* Melakukan iterasi pada array voice_actors dan menampilkan elemen JSX untuk setiap objek yang bahasa Jepang */}
                        {item.voice_actors
                            .filter((actor) => actor.language === "Japanese")
                            .slice(0, 1)
                            .map((actor) => (
                                <div key={actor.person.mal_id} class="mb-4">
                                    <img
                                        src={actor.person.images.jpg.image_url}
                                        class="w-full h-auto max-md:h-52 scaleComponent rounded-lg"
                                    />{" "}
                                    {/* Menampilkan gambar jpg pengisi suara */}
                                    <p class="text-white text-xl font-bold mt-5 text-center items-center flex justify-center">
                                        {actor.person.name}
                                    </p>{" "}
                                    {/* Menampilkan nama pengisi suara */}
                                </div>
                            ))}
                    </div>
                </div>
            ))}
            {/* <!-- Tombol untuk menampilkan atau menyembunyikan semua data --> */}
            <div class="flex p-2"> {/* Menambahkan kelas flex, justify-end, dan items-start */}
                <button
                    class="bg-blue-500 text-white p-2"
                    onClick={handleShowAll}
                >
                    {showAll ? "Sembunyikan" : "Tampilkan semua"}
                </button>
            </div>
        </div>
    );
};

export default CharaAnime;