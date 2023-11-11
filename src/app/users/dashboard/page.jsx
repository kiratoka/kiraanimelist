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
                        <div className="bg-primary min-h-screen flex flex-col items-center justify-center">
                            <div className="max-w-md w-full p-4 shadow-lg rounded-lg bg-primary-dark">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <Image
                                            src={fotoUser}
                                            alt={namaUser}
                                            width={80}
                                            height={80}
                                            className="rounded-full"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h1 className="text-2xl font-bold text-label-dark">
                                            {user.name}
                                        </h1>
                                        <p className="text-sm  text-gray-400">
                                            {user.email}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
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