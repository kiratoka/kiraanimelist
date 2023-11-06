import LoginAuthNavbar from "./LoginAuthNavbar"
import FiturPencarianKecil from "./FiturPencarianKecil"
import Link from "next/link"
import { authUserSession } from "@/libs/authlibs"

const InputSearchMobile = async () => {
    const user = await authUserSession()

    return (
        <div class="items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-search">
            <div class="relative mt-3 md:hidden">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg class="w-4 h-4  text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <FiturPencarianKecil />
            </div>
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  bg-gray-800 md:bg-transparent border-gray-700">
                <li>
                    <Link href="/" class="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 hover:text-cyan-500" aria-current="page">Home</Link>
                </li>
                <li>
                    <Link href="#" class="block py-2 pl-3 pr-4  rounded    md:p-0 md:hover:text-cyan-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">Tentang</Link>
                </li>
                {
                    user ? <Link href="/users/dashboard" class="block py-2 pl-3 pr-4  rounded    md:p-0 md:hover:text-cyan-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">
                        Dashboard
                    </Link> : null
                }

                <LoginAuthNavbar />
                <li>

                </li>
            </ul>
        </div>

    )
}

export default InputSearchMobile