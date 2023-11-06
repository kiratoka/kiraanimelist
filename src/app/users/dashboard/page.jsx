import Footer from "@/components/Footer/Footer";
import { authUserSession } from "@/libs/authlibs";
import Image from "next/image";
import Link from "next/link";
const Page = async () => {
    const user = await authUserSession()
    const namaUser = user?.name
    const fotoUser = user?.image
    console.log(namaUser)
    return (

        <div>
            {
                user ?
                    <div>
                        <h1>Selamat datang di dashboard {namaUser}</h1>
                        <Image src={fotoUser} alt="..." width={400} height={400} />
                    </div>

                    :
                    <div>
                        <div class="grid h-screen px-4  place-content-center bg-gray-900">
                            <div class="text-center">
                                <h1 class="font-black  text-9xl text-gray-700">404</h1>

                                <p
                                    class="text-2xl font-bold tracking-tight  text-white sm:text-4xl"
                                >
                                    😅
                                </p>

                                <p class="mt-4  text-gray-400">
                                    Kamu belum Login Yaaa
                                </p>

                                <Link
                                    href="/"
                                    class="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-cyan-500 rounded hover:bg-cyan-600 focus:outline-none focus:ring"
                                >
                                    Kembali Ke Halaman Utama
                                </Link>
                                <br />
                                <Link
                                    href="/login_signup/login"
                                    class="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-cyan-500 rounded hover:bg-cyan-600 focus:outline-none focus:ring"
                                >
                                    Ke Halaman Login
                                </Link>
                            </div>
                        </div>
                    </div>
            }

            <Footer />
        </div>
    );
}

export default Page;