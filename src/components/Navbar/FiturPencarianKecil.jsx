"use client"
import { useRouter } from "next/navigation"
import { useRef } from "react"


const FiturPencarianKecil = () => {
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) => {
        if (event.key === "Enter" || event.type === "click") {
            event.preventDefault()
            const keyword = searchRef.current.value
            if (keyword.trim() == "") {
                null
            }
            else {
                router.push(`/search/${keyword}`)
            }

        }


    }

    return (  
        <div>
            <input type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm  border gray-50 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Cari Anime" ref={searchRef} onKeyDown={handleSearch} />
        </div>
    );
}
 
export default FiturPencarianKecil;