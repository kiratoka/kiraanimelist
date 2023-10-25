import { notFound } from "next/navigation"

const NotFound = () => {
    return (
        <div class="grid h-screen px-4  place-content-center bg-gray-900">
            <div class="text-center">
                <h1 class="font-black  text-9xl text-gray-700">404</h1>

                <p
                    class="text-2xl font-bold tracking-tight  text-white sm:text-4xl"
                >
                    😀
                </p>

                <p class="mt-4  text-gray-400">
                    HALAMANNYA GA ADA
                </p>

                <a
                    href="/"
                    class="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-cyan-500 rounded hover:bg-cyan-600 focus:outline-none focus:ring"
                >
                    Kembali Ke Halaman Utama
                </a>
            </div>
        </div>
    )
}

export default NotFound