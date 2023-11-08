import { authUserSession } from "@/libs/authlibs";
import Link from "next/link";

const LoginAuthNavbar = async () => {
    const user = await authUserSession()
    const actionLabel = user ? "Keluar Akun" : "Masuk Akun"
    const actionURL = user ? "/api/auth/signout" : "/login_signup/login"
    return (
        <div>
            {
                user ?
                    <li>
                        <Link href={actionURL} className="block py-2 pl-3 pr-4  rounded    md:p-0 text-white md:hover:text-red-500 hover:text-white md:hover:bg-transparent border-gray-700">
                            {actionLabel}
                        </Link>
                    </li >
                    :
                    <li>
                        <Link href={actionURL} className="block py-2 pl-3 pr-4  rounded    md:p-0 text-white md:hover:text-cyan-500 hover:text-white md:hover:bg-transparent border-gray-700">
                            {actionLabel}
                        </Link>
                    </li >
            }
        </div>
    );
}

export default LoginAuthNavbar;