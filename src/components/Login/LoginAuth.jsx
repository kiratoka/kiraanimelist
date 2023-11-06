import Link from "next/link";
import { authUserSession } from "@/libs/authlibs";

const LoginAuth = async () => {
    const user = await authUserSession()
    const actionLabel = user ? "Keluar Akun" : "Masuk Akun Menggunakan Metode yang Lainnya"
    const actionURL = user ? "/api/auth/signout" : "/api/auth/signin"

    return (
        <div>
            <Link href={actionURL} className="flex justify-center text-center items-center bg-cyan-800 rounded-lg text-white hover:bg-cyan-900" >

                <div className="flex flex-col justify-center pt-3 pb-2">
                    <p>Masuk Menggunakan</p>
                    <div className="flex">
                        <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="" width="20px" className="mx-3 flex self-center py-3" />
                        <p className="flex items-center">Google</p>
                        <p className="flex items-center mx-2">atau</p>
                        <img src="https://cdn-icons-png.flaticon.com/512/3291/3291695.png" alt="" width="20px" className="mr-3 ml-1 flex self-center py-3" /> <p className="flex items-center">Github</p>

                    </div>
                </div>

            </Link>
        </div>
    );
}

export default LoginAuth;