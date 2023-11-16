const HeaderHome = () => {
    return (
        <section className="kebelakang md:top-0 text-white">
            <div className='backgroundTransparan w-full'>
                <div
                    className="mx-auto max-w-screen-xl px-4 max-md:py-0 max-md:h-[500px] py-40 flex max-md:pt-20 max-sm:pt-32"
                >
                    <div className="mx-auto max-w-3xl max-md:pt-0 pt-10 text-center">
                        <h1
                            className="bg-gradient-to-r from-green-300 via-sky-400 to-cyan-400 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                        >
                            Selamat Datang

                            <span className="sm:block"> di KiraAnimeList </span>
                        </h1>

                        <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                            Tempat untuk mengetahui informasi tentang anime dan yang lainnya
                        </p>


                    </div>
                </div>
            </div>

        </section>
    );
}

export default HeaderHome;