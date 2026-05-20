import Link from 'next/link'
import Women from '/public/image/women.png'
import Men from '/public/image/men.png'
import Image from 'next/image'

const OurProduct = () => {
  return (
    <div className='text-center py-12 px-4 bg-[#F5F4EC]'>
      <h3 className='text-2xl font-semibold raleway mb-2'>Our Products</h3>
      <p className='mb-8 raleway text-gray-400 text-sm max-w-md mx-auto'>Designing impeccable fits for both, we blend precision tailoring with timeless style</p>
      <div className='flex flex-row justify-center gap-6 sm:gap-12'>
        <Link href="/Women" className='group flex flex-col items-center text-gray-900 raleway'>
          <div className='relative w-36 h-48 sm:w-52 sm:h-64 overflow-hidden rounded-xl shadow-sm'>
            <Image src={Women} alt="women" fill className='object-cover object-top transition-transform duration-300 group-hover:scale-105' />
          </div>
          <span className='mt-3 text-sm sm:text-base font-medium tracking-wide'>Women</span>
        </Link>
        <Link href="/Men" className='group flex flex-col items-center text-gray-900 raleway'>
          <div className='relative w-36 h-48 sm:w-52 sm:h-64 overflow-hidden rounded-xl shadow-sm'>
            <Image src={Men} alt="men" fill className='object-cover object-top transition-transform duration-300 group-hover:scale-105' />
          </div>
          <span className='mt-3 text-sm sm:text-base font-medium tracking-wide'>Men</span>
        </Link>
      </div>
    </div>
  )
}

export default OurProduct
