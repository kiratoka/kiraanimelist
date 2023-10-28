
import AnimeList from "@/components/AnimeList"
import { getAnimeResponse } from "@/app/libs/api-libs"
import HeaderKeyword from "@/components/AnimeList/HeaderKeyword"

const Page = async ({ params }) => {
    // Dibawah ini sama artinya dengan const keyword = params.keyword
    const { keyword } = params
    // GUNAKAN SYNTAX YANG DIBAWAH AGAR SETIAP PENCARIAN YANG MENGANDUNG SPASI TIDAK ADA "%" 
    const decodedKeyword = decodeURI(keyword)


    // const responseSearchAnime = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`)

    const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`)


    return (
        <>
            <section>

                <HeaderKeyword title={`Hasil pencarian untuk ${decodedKeyword}`} />
                <AnimeList api={searchAnime} />
            </section>

        </>

    )
}

export default Page