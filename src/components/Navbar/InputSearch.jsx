"use client"

import { useRouter } from "next/navigation"
import { useRef } from "react"
import { useState } from 'react';


const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()
    // state untuk menyimpan nilai input
    // const [value, setValue] = useState('');

    // const handleChange = (e) => {
    //     setValue(e.target.value);
    // };

    // // FUNGSI BIAR BISA TEKEN ENTER DI SEARCH BAR
    // // fungsi untuk menangani event onKeyDown
    // const handleKeyDown = (e) => {
    //     // cek apakah tombol yang ditekan adalah enter
    //     if (e.key === 'Enter') {
    //         // lakukan aksi yang diinginkan, misalnya mengirim data ke API
    //         e.preventDefault()
    //         const keyword = searchRef.current.value
    //         router.push(`/search/${keyword}`)

    //         // JIKA INGIN KOSONGKAN VALUE SETELAH ENTER


    //         // setValue('');
    //     }
    // };

    // FUNGSI BIAR BISA TEKEN ENTER DI SEARCH BAR END


    const handleSearch = (event) => {
        if (event.key === "Enter" || event.type === "click") {
            event.preventDefault()
            const keyword = searchRef.current.value
            if (keyword == "") {
                null
            } 
            else {
                router.push(`/search/${keyword}`)
            }
           
        }



    }
    return (

        <div class="relative hidden md:block">


            {/* INI ADALAH BUTTON SEARCH */}
            <button class="rounded-md absolute inset-y-0 left-0 flex items-center pl-3 cursor-pointer bg-blue-700 hover:bg-blue-500 hover:rounded-md" onClick={handleSearch}>

                <div>
                    <svg class="w-4 h-4 mr-2 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                    <span class="sr-only">Search icon</span>
                </div>
            </button>

            {/* BUTTON SEARCH END\ */}

            <input type="text" id="search-navbar" class="block w-full p-2 pl-11 text-sm  border  rounded-xl  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 " placeholder="Ini Alat Untuk Mencari" ref={searchRef}
                onKeyDown={handleSearch}
            />


        </div>
    )
}

export default InputSearch