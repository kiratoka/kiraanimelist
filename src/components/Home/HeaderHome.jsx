const HeaderHome = () => {
    return (
        <section class="kebelakang md:top-0 text-white">
            <div className='backgroundTransparan w-full'>
                <div
                    class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center"
                >
                    <div class="mx-auto max-w-3xl pt-10 text-center">
                        <h1
                            class="bg-gradient-to-r from-green-300 via-sky-400 to-cyan-400 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                        >
                            Selamat Datang

                            <span class="sm:block"> di KiraAnimeList </span>
                        </h1>

                        <p class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                            Tempat untuk mengetahui informasi tentang anime dan yang lainnya
                        </p>


                    </div>
                </div>
            </div>

        </section>
    );
}

export default HeaderHome;