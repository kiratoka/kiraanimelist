"use client"


import CharaAnime from "@/components/AnimeDecs/CharaAnime"
import DescTrailer from "@/components/AnimeDecs/DescTrailer"
import Episode from "@/components/AnimeDecs/Episode"
import Footer from "@/components/Footer/Footer"
import { useState } from "react"
import { useEffect } from "react"

const Page = async ({ params }) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    const [isOpen, setIsOpen] = useState(true)
    const handleVideoPlayer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const animeId = params.id

    const responseAnimeFull = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime/${animeId}`)
    const responseDataChara = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime/${animeId}/characters`)



    const animeFull = await responseAnimeFull.json()
    const foto = animeFull.data.images.jpg.large_image_url
    const trailer = animeFull.data.trailer.embed_url
    const sinopsis = animeFull.data.synopsis
    const judul = animeFull.data.title

    const episode = animeFull.data.episodes
    const score = animeFull.data.score
    const rank = animeFull.data.rank
    const genre = animeFull.data.genres
    const rating = animeFull.data.rating
    const status = animeFull.data.status

    const api = await responseDataChara.json()


    const genreNames = genre.map((genre) => genre.name);
    const namaGenre = genreNames.join(" , ");

    // api.data.map((item) => {
    //     // item adalah objek yang ada di dalam array data
    //     console.log(item.character.name); // menampilkan nama karakter
    //     console.log(item.character.images.jpg.image_url); // menampilkan gambar jpg karakter
    //     item.voice_actors.map((actor) => {
    //         // actor adalah objek yang ada di dalam array voice_actors
    //         if (actor.language === "Japanese") {
    //             // jika bahasa adalah Jepang
    //             console.log(actor.person.name); // menampilkan nama pengisi suara
    //             console.log(actor.person.images.jpg.image_url); // menampilkan gambar jpg pengisi suara
    //         }
    //     });
    // });
    return (

        <div>
            <DescTrailer
                foto={foto}
                trailer={trailer}
                sinopsis={sinopsis}
                judul={judul}
            />
            <div className=" bg-black">
                <Episode
                    episode={episode}
                    score={score}
                    rank={rank}
                    genre={namaGenre}
                    rating={rating}
                    status={status}

                />
            </div>

            <div >

                <CharaAnime api={api} />
            </div>
            <Footer />
        </div>

    );
}

export default Page;