import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaPinterest } from "react-icons/fa";

function Footer() {
    // Data untuk icon sosial media
    const icons = [
        { icon: <FaFacebookF />, url: "https://www.facebook.com" },
        { icon: <FaTwitter />, url: "https://www.twitter.com" },
        { icon: <FaYoutube />, url: "https://www.youtube.com" },
        { icon: <FaPinterest />, url: "https://www.pinterest.com" },
    ];

    return (
        <footer className="bg-gray-900 text-white py-8 px-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Bagian kiri footer */}
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <p className="text-xl font-bold">Kiratoka</p>
                    <p className="text-sm">Website yang dibuat oleh Kiratoka</p>
                </div>
                {/* Bagian kanan footer */}
                <div className="flex gap-4">
                    {/* Looping data untuk menampilkan icon sosial media */}
                    {icons.map((item, index) => (
                        <a
                            key={index}
                            href={item.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-2xl hover:text-cyan-400"
                        >
                            {item.icon}
                        </a>
                    ))}
                </div>
            </div>
            {/* Garis pemisah */}
            <hr className="border-gray-700 my-4" />
            {/* Bagian bawah footer */}
            <div className="container mx-auto text-center text-sm">
                <p>
                    © {new Date().getFullYear()} Kiratoka. Hak Cipta Dilindungi Undang-Undang.
                </p>
                {/* Menambahkan kalimat disclaimer hak cipta */}
                <p>
                    Website ini mengandung konten yang mungkin tidak dimiliki oleh Kiratoka. Kiratoka tidak bertanggung jawab atas pelanggaran hak cipta yang terjadi akibat penggunaan konten tersebut. Kiratoka menghormati hak cipta pemilik asli dan berusaha untuk tidak melanggar hak cipta mereka.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
