
import AnimeList from "@/components/AnimeList"
import Link from 'next/link'
import Header from '@/components/AnimeList/Header'

const Page = async ({ params }) => {
    // Dibawah ini sama artinya dengan const keyword = params.keyword
    const { keyword } = params
    // GUNAKAN SYNTAX YANG DIBAWAH AGAR SETIAP PENCARIAN YANG MENGANDUNG SPASI TIDAK ADA "%" 
    const decodedKeyword = decodeURI(keyword)


    const responseSearchAnime = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`)
    const responseAnimeFull = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime/{id}`)
    const responseAnimePopuler = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`)

    const daftarAnime = await responseAnimeFull.json()
    const animePopuler = await responseAnimePopuler.json()
    const searchAnime = await responseSearchAnime.json()


    return (
        <>
            <section>

                <Header title={`Hasil pencarian untuk ${decodedKeyword}`}/>
                <AnimeList api={searchAnime} />
            </section>

        </>

    )
}

export default Page