"use client"

import Image from "next/image"
import personal from '@/public/coaching/personal.png'
import career from '@/public/coaching/career.png'
import life from '@/public/coaching/life.png'
import time from '@/public/coaching/timeAndPro.png'
import oneOnone from '@/public/coaching/oneOnone.png'
import { motion } from "framer-motion"


export default function Courses() {


    return (

        <>
            <div className="conatiner mx-auto">
                <div className=" md:bg-fixed bg-[url('../public/coaching/offer.jpg')] bg-cover bg-center">
                    <div className="bg-gradient-to-r from-black/75 to-black/25">

                        <div className="pt-5 md:pt-10 lg:pt-20">
                            <h1 className="josefin pt-4 md:pt-0  text-center  font-semibold josefin text-lg md:text-3xl tracking-widest">what we</h1>
                            <h1 className="text-center great great text-3xl md:text-5xl lg:text-6xl tracking-widest  font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-yellow-400 object-cover py-2">Offer</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><path fill="#101820ff" fill-opacity="1" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path></svg>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-center text-yellow-400 py-3 md:py-5 font-semibold text-xs uppercase md:text-sm">&#45; Our Coaching &#45;</h1>
                    <div className="container mx-auto flex justify-center">
                        <div className="space-y-7 md:flex md:flex-wrap md:gap-10 md:mx-10 md:justify-center md:space-y-0">
                            <div className=" w-48 h-56 bg-slate-100 rounded-lg shadow-lg shadow-slate-200 ">
                                <Image src={personal} className="w-52 h-4/5 object-contain mx-auto" alt="#" />
                                <h1 className="h-1/5 flex items-center text-center  text-black uppercase font-semibold justify-center text-sm">Personal Development</h1>
                            </div>
                            <div className=" w-48 h-56 bg-slate-100 rounded-lg shadow-lg shadow-slate-200">

                                <Image src={career} className="w-48 h-4/5 object-contain mx-auto" alt="#" />
                                <h1 className="h-1/5 flex items-center justify-center  text-black uppercase font-semibold text-sm">Career Coaching</h1>

                            </div>
                            <div className=" w-48 h-56 bg-slate-100 rounded-lg shadow-lg shadow-slate-200 ">

                                <Image src={time} className="h-4/5 object-contain mx-auto" alt="#" />
                                <h1 className="h-1/5 flex items-center justify-center text-center  text-black uppercase font-semibold text-sm">Time Management and Productivity</h1>

                            </div>
                            <div className=" w-48 h-56 bg-slate-100 rounded-lg shadow-lg shadow-slate-200 ">

                                <Image src={life} className="h-4/5 object-contain mx-auto" alt="#" />
                                <h1 className="h-1/5 flex items-center justify-center  text-black uppercase font-semibold text-sm">Life Transition</h1>

                            </div>
                            <div className=" w-48 h-56 bg-slate-100 rounded-lg shadow-lg shadow-slate-200 ">

                                <Image src={oneOnone} className="w-52 h-4/5 object-contain mx-auto" alt="#" />
                                <h1 className="h-1/5 flex items-center justify-center  text-black uppercase font-semibold text-sm">One-on-One</h1>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}