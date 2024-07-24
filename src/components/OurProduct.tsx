import Link from 'next/link'
import Women from '/public/image/women.png'
import Men from '/public/image/men.png'
import Image from 'next/image'

const OurProduct = () => {
  return (
    <div className='text-center p-12 bg-[#F5F4EC] rounded-lg'>
      <h3 className='text-2xl font-400 raleway '>Our Products</h3>
      <p className='mb-5 raleway text-gray-400'>Designing impeccable fits for both, we blend precision tailoring with timeless style</p>
      <div className='flex flex-wrap justify-center gap-8'>
        <div className='flex gap-20 rounded-lg'>
          <Link
            href="/Women"
            className='text-gray-900 raleway'
          > <Image src={Women} alt="women" width={100} height={100} />
            Women
          </Link>
          <Link
            href="/Men"
            className='text-gray-900 raleway'
          ><Image src={Men} alt="men" width={100} height={100} className='object-top object-cover max-h-[150px]' />
            Men
          </Link>
        </div>
      </div>
    </div>

  )
}

export default OurProduct