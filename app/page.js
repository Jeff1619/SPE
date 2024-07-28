
"use client"

import Image from "next/image";
import offer from '@/public/home/offer.png'
import conseling from '@/public/home/conseling.jpg'
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



          <div className="container mx-auto mt-6 sm:mt-8 lg:mt-16">
            <motion.p
              initial={{ x: '-30vw', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, type: "tween", duration: 1 }}

              className="josefin sm:text-2xl lg:text-2xl"><span className="text-yellow-400">We promise&#44;</span> We deliver &#33;</motion.p>
            <motion.p

              initial={{ x: '-30vw', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, type: "tween", duration: 1 }}

              className="text-sm mt-2  md:mt-5 lg:mt-10 sm:text-2xl md:text-2xl lg:text-3xl italic font-semibold">High quality guidance for your transformation and excellence&#46;</motion.p>

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
        <div className="container mx-auto md:flex">
          <div className="md:w-1/2  text-black ">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 1 }}
              className="md:mb-5 lg:mb-10 text-center text-black   text-2xl font-semibold josefin sm:text-4xl lg:text-5xl pb-2 lg:pb-0 lg:mt-8">What we offer &#63;</motion.h1>
            <motion.ul
              initial={{ rotate: 45 }}
              whileInView={{ rotate: 0 }}
              transition={{ duration: 3.5, type: 'spring' }}

              className="shadow-2xl py-5 px-2  bg-black text-slate-100 w-72 sm:w-96 md:w-full mx-auto rounded-tl-full rounded-br-full">
              <motion.ul
                initial={{ rotate: -45 }}
                whileInView={{ rotate: 0 }}
                transition={{ delay: 0.3, duration: 3.5, type: 'spring' }}
                className="shadow-2xl py-5 px-2  bg-black text-slate-100 w-72 sm:w-96 md:w-full mx-auto rounded-tr-full rounded-bl-full">
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
              </motion.ul>
            </motion.ul>
          </div>
          <div className="md:w-1/2  text-black">
            <Image src={offer} className="h-60 sm:h-96 md:h-max  object-cover object-top" alt="#" />
          </div>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 1 }}
        className="my-5 h-24 sm:h-32 md:h-44 lg:h-60 bg-cover bg-top bg-[url('../public/home/cbanner.jpg')]">
        <div className="flex sm:h-32 md:h-44 lg:h-60 justify-center items-center h-24 bg-gradient-to-r  from-black/60 to-black/50">
          <h1 className="uppercase tracking-widest sm:text-lg md:text-2xl lg:text-3xl ">Counselling</h1>
        </div>
      </motion.div>
      <div

        className="container mx-auto">
        <section className="mx-5 sm:mx-8 md:mx-8 md:flex md:items-center md:gap-5">

          <motion.div
            initial={{ x: '-10vw', opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 1 }}
            className="mb-2 sm:mb-4 border-t-4 border-b-8 border-yellow-400 md:w-1/2 py-3 md:py-5">
            <p className="text-justify sm:text-lg">Individual counselling is a supportive and confidential process where a trained therapist works one&#45;on&#45;one with a client to explore and address personal challenges&#44; emotions&#44; and goals&#46; It&#39;s a collaborative effort aimed at fostering insight&#44; coping skills&#44; and overall well&#45;being&#46;</p>
            <div className="mt-2 flex items-center justify-end">
              <p className="mb-1 pr-3 text-yellow-400 uppercase text-xs sm:text-base sm:tracking-widest md:text-sm">For counselling &#45;</p>
              <button className="border-yellow-400 border flex text-yellow-400 px-2 py-1.5 rounded-lg ">

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                <span className="font-light">Apply Now</span>
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 1 }}
            className="md:w-1/2">
            <Image src={conseling} alt="#" />
          </motion.div>
        </section>
      </div>

      <div>
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 1 }}

          className="px-5 py-5 lg:py-14 text-center  sm:text-2xl text-yellow-200 josefin text-lg md:text-3xl lg:text-5xl">Guidance for school students to success</motion.h1>
        <div className=" container mx-auto sticky bg-cover bg-top bg-[url('../public/home/sucess.jpg')]">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 1 }}
            className="bg-gradient-to-r  from-black/70 to-black/50 lg:from-black/90 lg:to-black/40">
            <p className="p-5 text-justify md:px-13 md:text-center lg:px-20 lg:py-20">Children are young individuals who are in the early stages of growth and development&#46; They bring joy&#44; curiosity&#44; and boundless energy to our lives&#46; Children possess unique personalities&#44; interests&#44; and talents that shape their journey of learning and discovery&#46; It is our privilege and responsibility to nurture and guide them with love&#44; care&#44; and support as they navigate their way through childhood and beyond&#46;</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="bg-yellow-400 p-5 ">
            <p className="text-black text-center josefin text-lg font-semibold md:px-10">We mainly focus on giving session for students to be more responsible at the early age and excel in their career</p>
            <button className="mt-2 border-black border-2 flex mx-auto text-black px-2 py-1.5 rounded-lg ">


              <span className="font-light pr-1">Apply Now</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M12 1.5a.75.75 0 0 1 .75.75V4.5a.75.75 0 0 1-1.5 0V2.25A.75.75 0 0 1 12 1.5ZM5.636 4.136a.75.75 0 0 1 1.06 0l1.592 1.591a.75.75 0 0 1-1.061 1.06l-1.591-1.59a.75.75 0 0 1 0-1.061Zm12.728 0a.75.75 0 0 1 0 1.06l-1.591 1.592a.75.75 0 0 1-1.06-1.061l1.59-1.591a.75.75 0 0 1 1.061 0Zm-6.816 4.496a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68ZM3 10.5a.75.75 0 0 1 .75-.75H6a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 10.5Zm14.25 0a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H18a.75.75 0 0 1-.75-.75Zm-8.962 3.712a.75.75 0 0 1 0 1.061l-1.591 1.591a.75.75 0 1 1-1.061-1.06l1.591-1.592a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>

    </>
  )
}


