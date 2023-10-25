import { useRef, useState } from "react"


const Pagination = ({ page, lastPage, setPage }) => {
    const searchRef = useRef()

    const handleSearch = (event) => {
        if (event.key === "Enter") {
            event.preventDefault()
            const keyword = searchRef.current.value
            if (keyword == "" || keyword < 1 || keyword > lastPage) {
                null
            }
            else {
                setPage(keyword)
            }
        }

    }


    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }


    const handleNextPage = () => {
        setPage((prevState) => Number(prevState) + 1)
        scrollTop()
    }
    const handlePrevPage = () => {
        setPage((prevState) => prevState - 1)
        scrollTop()
    }



    return (



        <div className="flex justify-center items-center py-6">
            <div class="flex flex-col gap-3 py-10">
                {/* <!-- Previous Button --> */}
                <div className="flex">
                    {page > 1 && (
                        <button onClick={handlePrevPage} href="#" class="flex items-center justify-center px-3 h-11 text-base font-medium border  rounded-lg   bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">
                            Sebelumnya
                        </button>
                    )}

                    <div className="text-xl font-medium items-center p-2">
                        <p>{page} of {lastPage}</p>
                    </div>
                    {page < lastPage && (
                        // {/* <!-- Next Button --> */}
                        <button onClick={handleNextPage} href="#" class="flex items-center justify-center px-3 h-11 text-base font-medium   border  rounded-lg   bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">
                            Selanjutnya
                        </button>
                    )
                    }
                </div>

                <div className="flex justify-center items-center ">
                    <input className="flex items-center justify-center px-3 h-11 text-xl font-medium   border  rounded-lg   bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white" type="number" name="" id="" placeholder="Pencarian Nomor Page" ref={searchRef} onKeyDown={handleSearch}
                    />
                </div>

            </div>
        </div>
    )
}

export default Pagination;