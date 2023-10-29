"use client"

import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import { getAnimeResponse } from "../../libs/api-libs";
import { useEffect, useState } from "react";

const Page = () => {


    const [page, setPage] = useState(1)
    const [animePopuler, setAnimePopuler] = useState([])

    const fetchData = async () => {
        // const responseAnimePopuler = await fetch(
        //     `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`)
        // const data = await responseAnimePopuler.json()

        const animePopuler = await getAnimeResponse("top/anime", `page=${page}`)

        setAnimePopuler(animePopuler)

    }

    useEffect(() => {
        fetchData()
    }, [page])

    return (
        <>
            <HeaderMenu title={`Anime Paling Populer Page ${page}`} />
            <AnimeList api={animePopuler} />
            <Pagination
                page={page}
                lastPage={animePopuler.pagination?.last_visible_page}
                setPage={setPage}
            />
        </>
    );
}

export default Page;