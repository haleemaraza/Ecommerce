import React from 'react'
import Logo from '/public/image/logo.png'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="text-[#000] body-font bg-[#E4DFD3] rounded-lg mt-10">
            <div className="container px-5  mx-auto flex items-center sm:flex-row flex-col rounded-lg">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <Image src={Logo} alt="logo" className='h-30 w-40 '/>
                </a>
                <p className="text-sm text-[#000] sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 ICICLE —
                    <a href="https://github.com/haleemaraza" className="text-[#000] ml-1" rel="noopener noreferrer" target="_blank">@haleema</a>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start ">
                    <a  href="https://www.linkedin.com/in/haleema-sadia-07524a2a2/" className="ml-3 text-[#000]">
                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                            <circle cx="4" cy="4" r="2" stroke="none"></circle>
                        </svg>
                    </a>
                </span>
            </div>
        </footer>)
}

export default Footer