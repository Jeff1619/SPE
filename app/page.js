
"use client"

import Image from "next/image";
import personal from '@/public/home/personal.jpg'
import professional from '@/public/home/professional.jpg'
import offer from '@/public/home/offer.png'
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <motion.section

        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "tween", duration: 1 }}

        className="h-max lg:h-screen bg-center bg-cover bg-[url('../public/home/people.jpeg')]">
        <div
          className="bg-gradient-to-r w-full h-max lg:h-screen from-black to-black/50 p-4 sm:p-6">

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", }}

            className="text-xs pt-5 lg:text-base  uppercase   text-center tracking-widest mb-4">Welcome to  </motion.h1>
          <motion.p

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-yellow-400 font-extralight uppercase  text-center text-2xl sm:text-5xl md:text-5xl lg:text-7xl tracking-wide">Surging Phoenix</motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}

            className="text-slate-100  text-lg font-normal uppercase sm:text-2xl md:text-3xl text-center mb-2 lg:mb-5 italic tracking-widest">Enterprises &#33;</motion.p>



          <div className="mt-6 sm:mt-8 lg:mt-16">
            <motion.p
              initial={{ x: '-30vw', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, type: "tween", duration: 1 }}

              className="josefin sm:text-2xl lg:text-2xl"><span className="text-yellow-400">We promise&#44;</span> We deliver &#33;</motion.p>
            <motion.p

              initial={{ x: '-30vw', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, type: "tween", duration: 1 }}

              className="text-sm mt-2  md:mt-5 lg:mt-10 sm:text-2xl md:text-2xl lg:text-3xl italic font-semibold">High quality guidance for your transformation and excellence
              &#46;</motion.p>

            <motion.p

              initial={{ x: '-30vw', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7, type: "tween", duration: 1 }}

              className="sm:text-2xl md:mt-5 text-yellow-400 italic md:text-2xl lg:text-3xl ">We are providing high quality courses
              for our students&#46;</motion.p>
            <motion.button
              initial={{ x: '30vw', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9, type: "tween", duration: 1 }}

              className="bg-yellow-400 px-5 py-2 lg:py-3 lg:px-9  text-black font-medium rounded-md mt-2 md:mt-5 sm:mt-4 active:bg-yellow-200 text-sm sm:text-xl ">Join Us</motion.button>
          </div>
        </div>

      </motion.section>


      <section className="overflow-hidden h-max lg:h-screen pt-8 px-3 md:px-0 md:pl-8 bg-yellow-400 ">
        <div className="md:flex">
          <div className="md:w-1/2  text-black ">
            <h1 className="md:mb-5 lg:mb-10 text-center text-black   text-2xl font-semibold josefin sm:text-4xl lg:text-5xl pb-2 lg:pb-0 lg:mt-8">What we offer &#63;</h1>
            <ul className="shadow-2xl py-5 px-2  bg-black text-slate-100 w-72 sm:w-96 md:w-full mx-auto rounded-tl-full rounded-br-full">
              <ul className="shadow-2xl py-5 px-2  bg-black text-slate-100 w-72 sm:w-96 md:w-full mx-auto rounded-tr-full rounded-bl-full">
                <li className="flex p-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 lg:size-20 pl-2 lg:pl-16">
                  <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                </svg>
                  <span className="sm:text-lg font-semibold md:text-lg lg:text-2xl pl-3 josefin">Individual counselling</span>
                </li>
                <li className="flex p-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 lg:size-20 pl-2 lg:pl-16">
                  <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                </svg>
                  <span className="sm:text-lg font-semibold md:text-lg lg:text-2xl pl-3 josefin">Motivational speech for school students</span>
                </li>
                <li className="flex p-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 lg:size-20 pl-2 lg:pl-16">
                  <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                </svg>
                  <span className="sm:text-lg font-semibold md:text-lg lg:text-2xl pl-3 josefin">Career guidance for college students</span>
                </li>
                <li className="flex p-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 lg:size-20 pl-2 lg:pl-16">
                  <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                </svg>
                  <span className="sm:text-lg font-semibold md:text-lg lg:text-2xl pl-3 josefin">Corporate training for excellence</span>
                </li>
                <li className="flex p-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 lg:size-20 pl-2 lg:pl-16">
                  <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                </svg>
                  <span className="sm:text-lg font-semibold md:text-lg lg:text-2xl pl-3 josefin">Assistance in Recruitment</span>
                </li>
              </ul>
            </ul>
          </div>
          <div className="md:w-1/2  text-black">
            <Image src={offer} className="h-60 sm:h-96 md:h-max  object-cover object-top" alt="#" />
          </div>
        </div>
      </section>

      <div className="my-5 h-24 sm:h-32 md:h-44 lg:h-60 bg-cover bg-top bg-[url('../public/home/cbanner.jpg')]">
        <div className="flex sm:h-32 md:h-44 lg:h-60 justify-center items-center h-24 bg-gradient-to-r  from-black/60 to-black/50">
          <h1 className="uppercase tracking-widest sm:text-lg md:text-2xl lg:text-3xl ">Counselling</h1>
        </div>
      </div>

    </>
  )
}


