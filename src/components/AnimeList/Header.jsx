import Link from "next/link"

const Header = ({title, linkHref, linkTitle}) => {
    return (
        <div className='flex justify-between p-4 items-center mt-80 md:mt-96'>
        <h1 className='text-2xl font-bold text-color-primary'>{title}</h1>
        {
          linkHref && linkTitle
          ?
          <Link href={linkHref} className='md:text-xl text-md underline hover:text-cyan-500' >{linkTitle}</Link>
          : null
        }
        

      </div>
    )
}

export default Header