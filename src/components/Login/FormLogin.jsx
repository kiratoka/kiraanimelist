
import LoginAuth from "./LoginAuth";


const FormLogin = () => {
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-20 sm:px-6 lg:px-8 flex justify-center items-center">
            <div className="mx-auto widthCustom bgHitamTransparan shadow-2xl shadow-black mt-12 md:mt-16 lg:mt-6" >
                <h1 className="text-center text-2xl font-bold text-cyan-400 sm:text-3xl mt-7 pt-4">
                    Ayo mulai
                </h1>

                <p className="mx-auto mt-4 max-w-md text-center text-gray-400">
                    Form ini belum divalidasi ke database
                </p>

                <form
                    action=""
                    className="mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
                >
                    <p className="text-center text-lg font-medium">Masuk ke Akun Anda</p>

                    <div className="pt-2">
                        <label htmlFor="email" className="sr-only">Email</label>

                        <div className="relative">
                            <input
                                type="email"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm text-black"
                                placeholder="Masukkan email"
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>

                        <div className="relative">
                            <input
                                type="password"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm text-black"
                                placeholder="Masukkan Password"
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700"
                    >
                        Masuk
                    </button>
                    <br />
                    <LoginAuth />
                    <p className="text-center text-sm text-gray-500">
                        Ga punya akun?
                        <br />
                        <a className="underline" href="">Daftar</a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default FormLogin;