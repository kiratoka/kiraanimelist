"use client"
import { useRouter } from "next/navigation"

const Header2 = ({ title, linkHref, linkTitle }) => {

  const router = useRouter();
  const handleRefresh = () => {

    router.refresh();
  };
  return (

    <div className='flex justify-between p-4 items-center'>
      <h1 className='text-2xl font-bold text-color-primary'>{title}</h1>
    
      <button onClick={handleRefresh} className='md:text-xl text-md underline hover:text-cyan-500' >Lihat yang lain</button>




    </div>
  )
}

export default Header2