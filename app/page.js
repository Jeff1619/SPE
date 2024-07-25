
"use client"

import Image from "next/image";
import personal from '@/public/home/personal.jpg'
import professional from '@/public/home/professional.jpg'
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
            className="text-yellow-400 font-extralight uppercase  text-center text-2xl sm:text-5xl md:text-5xl lg:text-7xl tracking-wide">Surging Phoeix</motion.p>
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

              className="josefin sm:text-2xl lg:text-2xl">We promise &#44;We deliver &#33;</motion.p>
            <motion.p

              initial={{ x: '-30vw', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, type: "tween", duration: 1 }}

              className="text-sm mt-2 md:mt-5 lg:mt-10 sm:text-2xl md:text-2xl lg:text-3xl italic">Your skills to nail the professional Career&#44;</motion.p>
            <motion.p

              initial={{ x: '-30vw', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7, type: "tween", duration: 1 }}

              className="sm:text-2xl md:mt-2 text-yellow-400 italic md:text-2xl lg:text-3xl">We are providing high quality courses
              for our students&#46;</motion.p>
            <motion.button
              initial={{ x: '30vw', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9, type: "tween", duration: 1 }}

              className="bg-yellow-400 px-5 py-2 lg:py-3 lg:px-9  text-black font-medium rounded-md mt-2 md:mt-5 sm:mt-4 active:bg-yellow-200 text-sm sm:text-xl ">Join Us</motion.button>
          </div>
        </div>

      </motion.section>


      <section className="mx-4 md:mx-6">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}

          className="p-4 sm:p-8 text-yellow-100 uppercase josefin text-sm text-center sm:text-base">What we do 	&#63;</motion.h1>

        <div className="md:flex md:gap-7 md:justify-center">
          <motion.div

            initial={{ x: "-10vw", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 0.5 }}

            className="mb-8 md:mb-0 md:w-1/2">
            <div>
              <i className="flex justify-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-9 sm:size-16 md:size-16">
                <path fillRule="evenodd" d="M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-15Zm4.125 3a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.873 8.703a4.126 4.126 0 0 1 7.746 0 .75.75 0 0 1-.351.92 7.47 7.47 0 0 1-3.522.877 7.47 7.47 0 0 1-3.522-.877.75.75 0 0 1-.351-.92ZM15 8.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15ZM14.25 12a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15Z" clipRule="evenodd" />
              </svg>

              </i>
              <h1 className="text-center p-2 text-xl md:px-11 font-semibold sm:p-4 md:p-4 sm:text-3xl md:text-3xl josefin">Personal Development</h1>
            </div>

            <div>
              <ul className="bg-yellow-400 py-5 lg:pl-20 rounded-t-lg">
                <li className="flex p-1 items-center text-black text-sm sm:text-lg  justify-left"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 pl-2">
                  <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                </svg>
                  <span className="md:text-lg pl-3">Personal development topic</span>
                </li>
                <li className="flex p-1 items-center text-black text-sm sm:text-lg  justify-left"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 pl-2">
                  <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                </svg>
                  <span className="md:text-lg pl-3">Anything else of interest to the group</span>
                </li>
                <li className="flex p-1 items-center text-black text-sm sm:text-lg  justify-left"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 pl-2">
                  <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                </svg>
                  <span className="md:text-lg pl-3">Improve your Confidence </span>
                </li>

              </ul>

              <Image src={personal} className="w-full h-40 sm:h-56 lg:h-72 rounded-b-lg object-cover object-bottom" alt="#" />

            </div>
          </motion.div>

          <motion.div

            initial={{ x: "-50vw", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, type: "tween", duration: 0.5 }}

            className="md:w-1/2">
            <div>
              <i className="flex justify-center"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-9 sm:size-16 md:size-16">
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>

              </i>
              <h1 className="text-center p-2 text-xl font-semibold sm:p-4 md:p-4 sm:text-3xl md:text-3xl josefin">Professional Development</h1>
            </div>

            <div>
              <ul className="py-5 lg:pl-20 bg-yellow-400 rounded-t-lg">
                <li className="flex p-1 items-center text-black text-sm sm:text-lg  justify-left"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 pl-2">
                  <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                </svg>
                  <span className="md:text-lg pl-3">Identify what their dream job is</span>
                </li>
                <li className="flex p-1 items-center text-black text-sm sm:text-lg  justify-left"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 pl-2">
                  <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                </svg>
                  <span className="md:text-lg pl-3">Get a valuable skillset in that job</span>
                </li>
                <li className="flex p-1 items-center text-black text-sm sm:text-lg  justify-left"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 pl-2">
                  <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                </svg>
                  <span className="md:text-lg pl-3">Learn to excel in their current job</span>
                </li>

              </ul>

              <Image src={professional} className="w-full h-40 rounded-b-lg sm:h-56 lg:h-72 object-cover object-bottom" alt="#" />

            </div>
          </motion.div>
        </div>
      </section >
    </>
  );
}


