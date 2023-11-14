"use client"

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CarouselMobile = () => {

    const images = [
        "https://cs1.animestore.docomo.ne.jp/anime_kv/img/26/42/3/26423_1_9_8b.png?1685064649048",
        "https://a.storyblok.com/f/178900/1127x634/720330ad1f/f46ec80b578890984488e844b207f0761596807350_main.png/m/filters:quality(95)format(webp)",
        "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/10c91fb27baa9162df89dbbfa43a7f7e.jpe",
        "https://a.storyblok.com/f/178900/640x360/08d5f36cff/df4c85bc3ba64872a8e967d0d75d0e3a1559257327_full.png/m/1200x675",
        "https://a.storyblok.com/f/178900/836x470/26129818b4/4802bd7a599f52c2df66ab505ce23b231663153760_main.jpg/m/filters:quality(95)format(webp)",
        "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/0879534a677ac269a8d6498f6cd23add.jpe",
        "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/1f9f9c9be8e2c41b17168a6454f849ff.jpe",
        "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/068f9d799bd17b21ca875e8591d3d64d.jpe",
    ];

    // State untuk menyimpan indeks item yang sedang aktif
    const [index, setIndex] = useState(0);
    const [timerId, setTimerId] = useState(null);
    // Fungsi untuk mengubah indeks item sesuai dengan arah tombol
    const changeIndex = (direction) => {

        if (timerId) {
            clearTimeout(timerId);
        }
        // Jika arah adalah "next", maka tambahkan indeks dengan 1
        // Jika arah adalah "prev", maka kurangi indeks dengan 1
        // Jika indeks melebihi panjang array images, maka kembalikan ke 0
        // Jika indeks kurang dari 0, maka kembalikan ke panjang array images - 1
        if (direction === "next") {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        } else if (direction === "prev") {
            setIndex((prevIndex) =>
                prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
            );
        }
        const newTimerId = setTimeout(() => {
            changeIndex("next");
        }, 5000);

        // Menyimpan ID timer baru
        setTimerId(newTimerId);
    };

    useEffect(() => {
        // Fungsi untuk mengklik tombol "Next" setiap 3 detik
        // Mulai otomatis klik setelah 3 detik pertama
        const initialTimeout = setTimeout(() => {
            changeIndex("next");
        }, 5000);

        setTimerId(initialTimeout);
        // Membersihkan timeout jika komponen di-unmount
        return () => clearTimeout(initialTimeout);
    }, []);
    return (
        <div>
            <div className="relative w-full h-96">
                {/* Membungkus komponen dengan AnimatePresence untuk mengaktifkan animasi keluar */}
                <AnimatePresence>
                    {/* Membuat komponen item dengan motion.div dan memberikan properti animasi dan key */}
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute w-full h-full flex items-center"
                    >
                        {/* Menampilkan gambar sesuai dengan indeks item yang sedang aktif */}
                        <img src={images[index]} alt={`Image ${index + 1}`} className="max-md:h-[21vh] w-full h-full" />
                    </motion.div>
                </AnimatePresence>
                {/* Membuat tombol prev dan next dengan motion.button dan memberikan properti onClick */}
                <motion.button
                    onClick={() => changeIndex("prev")}
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black/40 text-white h-full w-[10vw]"
                >
                    <FaChevronLeft className="absolute left-1/2"/>
                </motion.button>
                <motion.button
                    onClick={() => changeIndex("next")}
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black/40 text-white h-full w-[10vw]"
                >
                  
                    <FaChevronRight className="absolute right-1/2"/>
                </motion.button>
            </div>
        </div>
    );
}

export default CarouselMobile;