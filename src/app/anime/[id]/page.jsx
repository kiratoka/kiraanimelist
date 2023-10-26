"use client"

import DescTrailer from "@/components/AnimeDecs/DescTrailer"
import Episode from "@/components/AnimeDecs/Episode"
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
    
    const genreNames = genre.map((genre) => genre.name);
    const namaGenre = genreNames.join(" , ");

    console.log(genreNames)

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
                episode = {episode}
                score = {score}
                rank = {rank}
                genre = {namaGenre}
                rating = {rating}
                status = {status}

                 />
            </div>


        </div>

    );
}

export default Page;