'use client'

import React from 'react'
import Image from 'next/image'
import gbanner from '@/public/gallery/gbanner.png'
import p_1 from '@/public/gallery/p-1.jpg'
import p_2 from '@/public/gallery/p-2.jpg'
import p_3 from '@/public/gallery/p-3.jpg'
import p_4 from '@/public/gallery/p-4.jpg'
import p_5 from '@/public/gallery/p-5.jpg'
import p_6 from '@/public/gallery/p-6.jpg'
import p_8 from '@/public/gallery/p-8.jpg'
import bgicon from '@/public/gallery/bgicon.png'
import shineicon from '@/public/gallery/shineicon.png'
import { motion } from "framer-motion";


const Gallery = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className=" bg-fixed bg-left-bottom bg-cover bg-[url('../public/gallery/gallerybg.jpg')] overflow-hidden">
                <h1 className='text-yellow-400 text-center mix-blend-screen relative top-2 md:top-5 lg:top-10 py-6 md:py-14 great text-4xl md:text-7xl -tracking-tighter font-semibold'>Gallery</h1>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><path fill="#101820ff" fill-opacity="1" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path></svg>

            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="w-full h-full  bg-center bg-cover bg-[url('../public/gallery/backgrnd.jpg')]">
                <div className='w-full h-full bg-gradient-to-r from-black to-black/50 '>
                    <div className='container mx-auto px-4 py-5'>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.4 }}
                            className='px-4'
                        >
                            <Image src={p_1} className='rounded-xl object-cover w-96 md:w-4/5 lg:h-96 object-top mx-auto' alt='#' />
                        </motion.div>
                        <div className='py-3 md:py-5 flex flex-col gap-2 sm:gap-4'>
                            <motion.h1
                                initial={{ x: "-4vw", opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.4 }}
                                className='text-center font-bold text-lg text-yellow-400 sm:text-2xl md:text-3xl lg:text-5xl'>SPE <span className='text-slate-100 animate-pulse'>Tribe</span>&#46;</motion.h1>
                            <motion.h1
                                initial={{ x: "4vw", opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.4 }}
                                className='text-center font-bold text-lg text-slate-200 sm:text-2xl md:text-3xl'>Our <span className='text-yellow-400'>Tribe</span>&#44; Our <span className='text-yellow-400'>Pride</span></motion.h1>
                            <motion.button
                                initial={{ x: "-4vw", opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.4 }}
                                className='uppercase flex mx-auto bg-yellow-400 text-black py-2  rounded-b-full  text-sm px-8 tracking-wide josefin animate-pulse'>Join Our Tribe</motion.button>
                        </div>
                        <div className='lg:flex lg:gap-14 lg:justify-center'>
                            <div className='mt-6 sm:mt-10 flex gap-4 sm:gap-9 justify-center'>
                                <motion.div
                                    initial={{ rotate: 45, opacity: 0 }}
                                    whileInView={{ rotate: 0, opacity: 1 }}
                                    transition={{ duration: 4, type: 'spring', stiffness: 120 }}
                                >
                                    <Image src={p_2} className='rounded-full size-32 sm:size-52 md:size-60 object-cover' alt='#' />
                                </motion.div>
                                <motion.div
                                    initial={{ rotate: -45, opacity: 0 }}
                                    whileInView={{ rotate: 0, opacity: 1 }}
                                    transition={{ delay: 0.2, duration: 4, type: 'spring', stiffness: 120 }}
                                >
                                    <Image src={p_3} className='rounded-full size-32 sm:size-52 md:size-60 object-cover object-left' alt='#' />
                                </motion.div>
                            </div>
                            <div className='flex justify-center items-center'>
                                <Image src={bgicon} alt='#' className='pointer-events-none absolute  w-44 md:w-72' />
                            </div>
                            <div className='mt-4 sm:mt-8 flex gap-4 sm:gap-9 justify-center'>
                                <motion.div
                                    initial={{ rotate: 45, opacity: 0 }}
                                    whileInView={{ rotate: 0, opacity: 1 }}
                                    transition={{ delay: 0.4, duration: 4, type: 'spring', stiffness: 120 }}
                                >
                                    <Image src={p_4} className='rounded-full size-32 sm:size-52 md:size-60 object-cover' alt='#' />
                                </motion.div>
                                <motion.div
                                    initial={{ rotate: -45, opacity: 0 }}
                                    whileInView={{ rotate: 0, opacity: 1 }}
                                    transition={{ delay: 0.6, duration: 4, type: 'spring', stiffness: 120 }}
                                >
                                    <Image src={p_5} className='rounded-full size-32 sm:size-52 md:size-60 object-cover object-left' alt='#' />
                                </motion.div>
                            </div>
                        </div>
                        <motion.h1
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className='text-center py-6 sm:py-10 lg:py-14 text-slate-100 josefin text-lg sm:text-3xl '>&#34;Together&#44; we turn challenges into opportunities and dreams into reality&#46;&#34;</motion.h1>
                        <div className='lg:flex lg:gap-8'>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className='lg:w-1/2'
                            >
                                <Image src={shineicon} className='pointer-events-none absolute w-20' alt='#' />
                                <Image src={p_8} className='rounded-tl-full mb-6 sm:mb-9 w-80 sm:w-96 lg:w-full lg:h-96 mx-auto lg:object-cover lg:object-top' alt='#' />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className='lg:w-1/2'
                            >
                                <Image src={p_6} className='rounded-br-full w-80 sm:w-96 lg:w-full  lg:h-96 mx-auto lg:object-cover lg:object-top' alt='#' />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Gallery