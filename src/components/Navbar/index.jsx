import InputSearch from "./InputSearch"
import InputSearchMobile from "./InputSearchMobile"




const Navbar = () => {

    return (
        <div>

            <nav class=" bg-gray-800 py-2">
                <div class="flex flex-wrap md:items-center md:justify-between md:flex-row flex-col mx-auto p-4 md:ml-8">
                    <a href="/" class="flex justify-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 w-10 md:h-8 md:mr-3" alt="Flowbite Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap text-white hover:hover:text-cyan-500">KiraAnimeList</span>
                    </a>
                    <div className="flex flex-wrap">
                        <div class="flex md:order-2 ml-4">
                            <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="hidden text-gray-400  hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
                                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <span class="sr-only">Search</span>
                            </button>
                            <InputSearch />
                            <button data-collapse-toggle="navbar-search" type="button" class="items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg hidden  focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                                <span class="sr-only">Open main menu</span>
                                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                                </svg>
                            </button>
                        </div>
                        <InputSearchMobile />
                    </div>


                </div>
            </nav>

        </div>
    )

}

export default Navbar