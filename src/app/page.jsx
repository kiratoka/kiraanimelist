
// Ini adalah cara pertama untuk memanggil suatu komponen
// import AnimeList from './components/AnimeList'

// Ini adalah cara kedua

import AnimeList from "@/components/AnimeList"
import Header from '@/components/AnimeList/Header'
import { getAnimeResponse, getNestedAnimeResponse } from '../libs/api-libs'
import HeaderHome from '@/components/Home/HeaderHome'
import Header2 from "@/components/AnimeList/Header2"
import Footer from "@/components/Footer/Footer"


// Jika Komponen File bernama Index.js maka tidak perlu tulis nama file komponennya

// Cara Pertama

// export default async function Page() {
//   const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`)
//   const anime = await response.json()
// console.log(anime)

//   return (
//     <div>
//       <h1>Anime Paling Populer</h1>
//       <AnimeList />
//     </div>
//   )
// }


//  Cara Kedua Menggunakan Arrow Function




const Page = async () => {


  const animePopuler = await getAnimeResponse("top/anime", "limit=10")
  let recommendAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
  recommendAnime = {

    data: recommendAnime.sort(() => Math.random() - 0.5).slice(0, 10)
  }
  console.log(recommendAnime)


  // Lakukan perintah ini jika kamu mau meng Limit data

  // const responseAnimePopuler = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`)


  // const animePopuler = await responseAnimePopuler.json()


  return (
    <>

      <HeaderHome />
      <section>

        <Header title="Paling Populer" linkHref="/populer" linkTitle="Lihat semua" />
        <AnimeList api={animePopuler} />
      </section>
      <section>

        <Header2 title="Rekomendasi Anime" />
        <AnimeList api={recommendAnime} />
      </section>
      <Footer />
    </>




  )
}

export default Page