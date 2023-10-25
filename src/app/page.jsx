import Image from 'next/image'

// Ini adalah cara pertama untuk memanggil suatu komponen
// import AnimeList from './components/AnimeList'

// Ini adalah cara kedua

import AnimeList from "@/components/AnimeList"
import Link from 'next/link'
import Header from '@/components/AnimeList/Header'
import { getAnimeResponse } from './libs/api-libs'


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


  const animePopuler = await getAnimeResponse("top/anime" , "limit=10")

  // Lakukan perintah ini jika kamu mau meng Limit data

  // const responseAnimePopuler = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`)

  
  // const animePopuler = await responseAnimePopuler.json()


  return (
    <>
    <section>

     <Header title="Paling Populer" linkHref="/populer" linkTitle="Lihat semua"  />
      <AnimeList api={animePopuler} />
    </section>

    </>




  )
}

export default Page