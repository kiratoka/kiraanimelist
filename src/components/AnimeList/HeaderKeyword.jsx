import Link from "next/link"

const HeaderKeyword = ({ title, linkHref, linkTitle }) => {
  return (
    <div>
      <div className='flex items-center h-52 bgHeaderPopuler mb-20 text-center justify-center'>
        <div className="flex backgroundTransparan2 h-64 items-center justify-center">
          <h1 className='max-md:text-xl text-2xl font-bold text-color-primary text-center'>{title}</h1>
          {
            linkHref && linkTitle
              ?
              <Link href={linkHref} className='md:text-xl text-md underline hover:text-cyan-500' >{linkTitle}</Link>
              : null
          }

        </div>


      </div>
    </div>

  )
}

export default HeaderKeyword