import { authUserSession } from "@/libs/authlibs";
import Image from "next/image";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa"

const LoginAuthNavbar = async () => {
    const user = await authUserSession()
    const actionLabel = user ? "Keluar Akun" : "Masuk Akun"
    const actionURL = user ? "/api/auth/signout" : "/login_signup/login"
    return (
        <div>
            {
                user ?
                    <div>
                        <Link href={actionURL} className="block py-2 pl-3 pr-4  rounded    md:p-0 text-white hover:text-red-500 md:hover:bg-transparent border-gray-700 ">

                            {actionLabel}
                        </Link>
                    </ div>
                    :
                    <div>
                        <Link href={actionURL} className="py-2 pl-3 pr-4  rounded md:p-0 text-white hover:text-cyan-500 md:hover:bg-transparent border-gray-700  inline-flex hover:bg-gray-700">
                            <FaUserCircle className="text-2xl mr-2" />
                            {actionLabel}
                        </Link>
                    </div >
            }
        </div>
    );
}

export default LoginAuthNavbar;