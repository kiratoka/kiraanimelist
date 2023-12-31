import Image from "next/image"
import Link from "next/link"

const AnimeList = ({ api }) => {


    return (

        // ANIME POPULER

        <div className="grid gridAnimasi xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 xl:gap-3 md:gap-4 sm:gap-2 gap-1 md:px-4 px-1 md:gap-y-12 xl:gap-y-12">
            {api.data?.map((anime, index) => {

                return (

                    <Link href={`/anime/${anime.mal_id}`} className="mx-1 md:mx-2 cursor-pointer hover:text-cyan-500 transition-all" key={index}>
                        <div className="">
                            <div className="flex justify-center">
                                <div className="bg-black imgAnimeList">
                                    <img className=" foto max-h-64 cardPicture object-cover hover:opacity-60 transisi" src={anime.images.jpg.large_image_url} alt="" />
                                </div>


                            </div>
                            <h3 className="font-bold md:text-xl text-md p-4 hover:text-cyan-500">{anime.title}</h3>
                        </div>
                    </Link>
                )

            })}


        </div>

        // ANIME POPULER END




    )
}

export default AnimeList