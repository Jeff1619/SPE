"use client"

import Image from "next/image"
import person from '@/public/coaching/personal.png'
import career from '@/public/coaching/career.png'
import time from '@/public/coaching/time.png'
import { motion } from "framer-motion"


export default function Courses() {


    return (

        <>
            <div className="conatiner mx-auto">
                <div className=" md:bg-fixed bg-[url('../public/coaching/offer.jpg')] bg-cover bg-center">
                    <div className="bg-gradient-to-r from-black/75 to-black/25">

                        <div className="pt-5 md:pt-10 lg:pt-20">
                            <h1 className="josefin pt-4 md:pt-0  text-center  font-semibold josefin text-lg md:text-3xl tracking-widest">what we</h1>
                            <h1 className="text-center great great text-3xl md:text-5xl lg:text-6xl tracking-widest  font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-100 to-yellow-400 object-cover py-2">Offer</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><path fill="#101820ff" fill-opacity="1" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path></svg>
                        </div>
                    </div>
                </div>
                <div className="">
                    <h1 className="text-center text-black py-3 md:py-5 font-semibold text-xs uppercase md:text-sm">&#45; We Offer &#45;</h1>
                    <div className="container mx-auto">
                        <div className="space-y-8 lg:flex md:space-y-8 lg:space-y-0 lg:items-center lg:space-x-6 lg:justify-center">
                            <div className="space-y-8 md:space-y-0 md:flex mx-5 lg:mx-0 lg:space-x-6">
                                <div className="bg-slate-100 mx-auto w-60 md:w-52 h-max p-4 rounded-lg shadow-xl shadow-black/25">
                                    <Image src={person} className="h-4/5 mb-2" alt="#" />
                                    <h1 className="h-1/5 flex items-center text-black justify-center px-2 text-center uppercase">Personal Development</h1>
                                </div>
                                <div className="bg-slate-100 w-60 md:w-52 mx-auto h-max p-4 rounded-lg shadow-xl shadow-black/25">
                                    <Image src={career} className="h-40 object-contain mb-2" alt="#" />
                                    <h1 className=" flex items-center text-black justify-center px-2 text-center uppercase">Career Coaching</h1>
                                </div>
                                <div className="bg-slate-100 w-60 md:w-52 mx-auto h-max p-4 rounded-lg shadow-xl shadow-black/25">
                                    <Image src={time} className="h-36 object-contain mb-2" alt="#" />
                                    <h1 className="h-1/5 flex items-center text-black justify-center px-2 text-center uppercase">Time Management and Productivity</h1>
                                </div>
                            </div>
                            <div className="space-y-8 md:space-y-0  md:mx-auto md:px-2 lg:px-0 lg:space-x-6 md:flex">
                                <div className="bg-slate-100 w-60 md:w-52 mx-auto h-max p-4 rounded-lg shadow-xl shadow-black/25">
                                    <Image src={person} className="h-4/5 mb-2" alt="#" />
                                    <h1 className="h-1/5 flex items-center text-black justify-center px-2 text-center uppercase">Life Transition Coaching</h1>
                                </div>
                                <div className="bg-slate-100 w-60 md:w-52 mx-auto h-max p-4 rounded-lg shadow-xl shadow-black/25">
                                    <Image src={person} className="h-4/5 mb-2" alt="#" />
                                    <h1 className="h-1/5 flex items-center text-black justify-center px-2 text-center uppercase">One-on-One Coaching</h1>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}