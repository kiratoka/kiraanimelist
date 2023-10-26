"use client"

import DescTrailer from "@/components/AnimeDecs/DescTrailer"
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
    console.log(animeFull.data.images.jpg.large_image_url)

    return (

        <div>
            <DescTrailer
                foto={foto}
                trailer={trailer}
                sinopsis={sinopsis}
                judul={judul}
            />
        </div>

    );
}

export default Page;