
'use client'

import Image from 'next/image';
import logo1 from '@/public/logo/Sp-logo1.png'
import logo2 from '@/public/logo/Sp-logo2.png'
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Header({ handleToggle }: { handleToggle: () => void }) {


    const [menu, setMenu] = useState(false);

    const handleMenu = () => setMenu(!menu)


    return (
        <>

            <section className=' bg-slate-50 flex items-center sticky z-10 top-0  px-4 sm:px-10 md:px-12 h-20 sm:h-28 md:h-26 lg:h-24 justify-between shadow-xl'>
                <div className='lg:container lg:mx-auto  flex  items-center justify-between'>
                    <Link href='/' className='flex items-center'>
                        <Image className='w-20 sm:w-28 md:w-24' src={logo1} alt='SP-logo' />
                        <Image className='w-20 sm:w-28 md:w-32' src={logo2} alt='SP-logo' />
                    </Link>
                    <ul className='hidden lg:flex gap-10 items-center'>
                        <Link href='/' className='uppercase hover:text-yellow-400 ease duration-150 text-neutral-10 font-medium tracking-widest text-black text-sm'>Home</Link>
                        <Link href='/about' className='uppercase hover:text-yellow-400 ease duration-150 text-neutral-10 font-medium tracking-widest text-black text-sm'>About Us</Link>
                        <Link href='/coaching_services' className='uppercase hover:text-yellow-400 ease duration-150 text-neutral-10 font-medium tracking-widest text-black text-sm'>Coaching Services</Link>
                        <Link href='/gallery' className='uppercase hover:text-yellow-400 ease duration-150 text-neutral-10 font-medium tracking-widest text-black text-sm'>Gallery</Link>
                    </ul>
                    <div className='flex gap-4'>
                        <Link href='/contact' className='uppercase group active:bg-black ease duration-150 hidden lg:flex py-2 px-10 rounded-md font-medium border bg-yellow-400  text-black tracking-widest shadow-lg'><span className='group-active:text-yellow-400 ease duration-150 text-sm'>Contact</span></Link>

                    </div>
                </div>



                <div className="block  lg:hidden" onClick={() => handleMenu()}>
                    {/* FOR MOBILE - MENU */}

                    {
                        menu ? (


                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-9 sm:size-14 md:size-14 text-black active:text-white transition ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        ) :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-9 sm:size-14 md:ssize-14 text-black active:text-white transition ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                    }


                </div>
                {
                    menu && (
                        <motion.div
                            initial={{ y: "-30vw", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ type: 'tween', duration: 0.2 }}
                            className='lg:hidden absolute bg-slate-50 w-full left-0 top-20 sm:top-28 rounded-b-full pt-2 pb-10 px-6 shadow-xl'>
                            <ul className='flex mb-5 flex-col text-center gap-4'>
                                <Link onClick={() => setMenu(!menu)} href='/' className='uppercase active:text-yellow-400 ease text-neutral-10 font-medium tracking-widest text-sm md:text-base text-black'>Home</Link>
                                <Link onClick={() => setMenu(!menu)} href='/about' className='uppercase active:text-yellow-400 ease text-neutral-10 font-medium tracking-widest text-sm md:text-base text-black'>About Us</Link>
                                <Link onClick={() => setMenu(!menu)} href='/coaching_services' className='uppercase active:text-yellow-400 ease text-neutral-10 font-medium tracking-widest text-sm md:text-base text-black'>coaching services</Link>
                                <Link onClick={() => setMenu(!menu)} href='/gallery' className='uppercase active:text-yellow-400 ease text-neutral-10 font-medium tracking-widest text-sm md:text-base text-black'>Gallery</Link>


                            </ul>
                            <div>
                                <Link onClick={() => setMenu(!menu)} href='/contact' className='uppercase block group text-center w-40 mx-auto active:bg-black ease duration-150  lg:flex py-2 text-sm md:text-base  rounded-md font-medium border bg-yellow-400  text-black tracking-widest shadow-lg'><span className='group-active:text-yellow-400 ease duration-150'>Contact</span></Link>

                            </div>
                        </motion.div>


                    )
                }


            </section>

            {/* FLOWTING ICONS */}
            <div>
                {/* <button onClick={handleToggle} className='sm:hidden active:bg-yellow-500 uppercase flex items-center justify-center text-sm  fixed py-2 z-10 bottom-0 w-full bg-yellow-400 text-black font-medium'>
                    <span className='pr-2'>Apply Now</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </button>
                <button onClick={handleToggle} className='hidden sm:block group ease duration-100 active:bg-black  sm:p-5 fixed z-10 rounded-full  sm:bottom-20 md:bottom-44 lg:bottom-20 left-4  md:left-5 bg-yellow-400'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7 sm:size-10 text-black group-active:text-yellow-400">
                        <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                    </svg>

                </button> */}
                {/* <a href="tel:++91-#" className="p-3 sm:p-5 fixed z-10 rounded-full bottom-32 sm:bottom-32 md:bottom-60 lg:bottom-32 right-4  md:right-5 bg-green-100 group active:bg-green-600"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7 sm:size-10 text-green-600 group-active:text-green-100">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                </svg></a>
                <a href="https://wa.me/+91#" target='_blank' className="p-3 sm:p-5 fixed z-10 rounded-full bottom-16 sm:bottom-6 md:bottom-32 lg:bottom-8 right-4 md:right-5  bg-green-500 group active:bg-green-50">
                    <span className="[&>svg]:h-7 [&>svg]:w-7 sm:[&>svg]:h-10 sm:[&>svg]:w-10 text-green-50 group-active:text-green-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 448 512">
                            <path
                                d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                        </svg>
                    </span>
                </a> */}

            </div>

        </>


    );
}