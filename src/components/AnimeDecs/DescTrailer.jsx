import { useState } from "react"
import { useEffect } from "react"



const DescTrailer = ({ judul, sinopsis, foto, trailer }) => {

    
    const [isOpen, setIsOpen] = useState(true)
    const handleVideoPlayer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <section class="
        text-white bg-black/75 sm:bg-transparent sm:from-black/100 sm:via-black/100 sm:to-black/40  sm:bg-gradient-to-r md:grid grid-cols-2">
            <img className="gambarLatar" src={foto} alt="" />
            <div
                class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
            >
                <div class="mx-auto max-w-3xl">

                    <h1
                        class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl text-left max-w-xl mx-auto  pb-1"
                    >
                        {judul}
                    </h1>



                    <p class="mx-auto mt-4 max-w-xl sm:text-lg/relaxed text-justify">
                        {sinopsis}
                    </p>


                </div>
            </div>

            {
                isOpen && (
                    <div class="aspect-w-16 aspect-h-9 flex justify-center flex-col">
                        <div className="max-lg:pr-6 pr-10 flex flex-row-reverse">
                            <button onClick={handleVideoPlayer} type="button" class="text-white bg-cyan-700 hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-900">Tutup</button>
                        </div>
                        <iframe className="flex w-11/12 h-96 mx-auto md:pr-2 max-md:pb-32" src={trailer} frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture ;" allowfullscreen></iframe>
                    </div>

                )
            }

            {!isOpen && (
                <div class="aspect-w-16 aspect-h-9 flex justify-center flex-col">
                    <div className="max-lg:pr-6 pr-10 flex flex-row-reverse">
                        <button onClick={handleVideoPlayer} type="button" class="text-white bg-cyan-700 hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-900">Buka Trailer</button>
                    </div>
                    <div className="flex w-11/12 md:h-96 mx-auto md:pr-2 max-md:pb-32" ></div>

                </div>


            )}


        </section>
    );
}

export default DescTrailer;