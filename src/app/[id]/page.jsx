

const Page = async ({ params }) => {

    const animeId = params.id

    const responseAnimeFull = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime/${animeId}`)
    const animeFull = await responseAnimeFull.json()

    console.log(animeFull.data.images.jpg.large_image_url)

    return (

        <div>
            <section class="
             text-white bg-black/75 sm:bg-transparent sm:from-black/100 sm:via-black/100 sm:to-black/40  sm:bg-gradient-to-r md:grid grid-cols-2">
                <img className="gambarLatar" src={animeFull.data.images.jpg.large_image_url} alt="" />
                <div
                    class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
                >
                    <div class="mx-auto max-w-3xl">
                    
                        <h1
                            class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl text-left max-w-xl mx-auto  pb-1"
                        >
                            {animeFull.data.title}
                        </h1>



                        <p class="mx-auto mt-4 max-w-xl sm:text-lg/relaxed text-justify">
                            {animeFull.data.synopsis}
                        </p>


                    </div>
                </div>
                <div class="aspect-w-16 aspect-h-9 flex justify-center items-center">
                    <iframe className="flex w-11/12 h-96 mx-auto md:pr-2 max-md:pb-32" src={animeFull.data.trailer.embed_url} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>
        </div>

    );
}

export default Page;