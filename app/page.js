
"use client"

import Image from "next/image";
import personalDev from '@/public/home/personal.jpg'
import careerGrowth from '@/public/home/money.jpg'
import Health from '@/public/home/Health.jpg'
import relationship from '@/public/home/Relationships.jpg'
import tailoredCoaching from '@/public/home/TailoredCoaching.png'
import expertGuidance from '@/public/home/ExpertGuidance.png'
import holisticApproach from '@/public/home/HolisticApproach.png'
import transformationalResults from '@/public/home/TransformationalResults.png'
import flowerIcon from '@/public/home/flowerIcon.png'
import leafIcon from '@/public/home/leafIcon.png'
import cruveLine from '@/public/home/cruveLine.png'
import time from '@/public/home/time.jpg'
import { motion } from "framer-motion";
import { useState } from "react";



export default function Home() {


  const [active, setActive] = useState(false)

  const handleToggle = () => {
    setActive(!active)
  }

  return (
    <>
      <motion.section

        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "tween", duration: 1 }}

        className="overflow-hidden h-max lg:h-screen bg-center bg-cover bg-[url('../public/home/people.jpeg')]">
        <div
          className="bg-gradient-to-r w-full h-max lg:h-screen from-black to-black/55 p-4 sm:p-6">

          <div className="container mx-auto">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "spring", }}

              className="text-xs py-5 md:py-10 lg:text-base  uppercase   text-center md:text-left md:ml-24 tracking-widest ">Welcome to  </motion.h1>
          </div>
          <motion.p

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-yellow-400 cinzel font-semibold uppercase  text-center text-2xl sm:text-5xl md:text-5xl lg:text-6xl tracking-wide pb-2 md:pb-5">Surging Phoenix</motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}

            className="text-slate-100  text-lg cinzel uppercase sm:text-2xl md:text-3xl text-center mb-2 lg:mb-5  tracking-widest">Enterprises</motion.p>

          <Image src={flowerIcon} className=" pointer-events-none mt-2 mb-6 sm:mt-5 w-36 sm:w-56 mx-auto" alt="#" />

          <div className="container mx-auto flex justify-center md:mt-10 lg:mt-10">
            <p className="text-justify md:text-center md:px-10 text-sm sm:text-base lg:w-1/2 lg:mx-auto">At <span className="text-yellow-400 font-bold font-sans italic animate-pulse">Surging Phoenix Enterprises</span>&#44; we believe that every individual has the potential to rise&#44; transform&#44; and achieve greatness&#46; Our mission is to guide you on a journey of personal evolution&#44; helping you navigate the complexities of life with clarity&#44; confidence&#44; and resilience&#46;
            </p>
          </div>


          <div className="container mx-auto mt-6 sm:mt-8 lg:mt-12">
            <motion.p
              initial={{ x: '-30vw', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, type: "tween", duration: 1 }}

              className="flex justify-center josefin sm:text-2xl lg:text-2xl mb-2 lg:mb-6">&#45; Empowering Your Journey &#45;
            </motion.p>


            <motion.a href="/about" className="bg-yellow-400 text-black px-6 rounded-tr-full rounded-bl-full py-1 lg:py-2 text-sm md:text-base w-32 md:w-44 flex mx-auto group ease duration-150 hover:bg-black active:bg-black"
              initial={{ x: '10vw', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, type: "tween", duration: 1 }}

            ><span className="mx-auto group-hover:text-yellow-400 active:text-yellow-400">Learn More</span></motion.a>

          </div>
        </div>

      </motion.section>


      <div className="bg-fixed bg-contain bg-no-repeat bg-[url('../public/home/goldenbg.png')]">

        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center font-semibold text-sm py-9 md:py-14 lg:py-20 px-8 josefin md:text-lg">Why Choose <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-100 to-yellow-400 text-xl md:text-3xl great tracking-widest">Surging Phoenix Enterprises</span>&#63;</motion.h1>


        <div className="container mx-auto">

          <div className="lg:flex">
            <div className="md:mb-10 lg:mb-0 md:flex md:mx-auto  md:w-3/4">
              <motion.div
                initial={{ x: "-10vw", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 120, duration: 1 }}
                className="w-60 mx-auto mb-8 md:mb-0">
                <div className="group w-44 h-72 [perspective:1000px] rounded-lg ">
                  <div className="bg-pink-300 shadow-lg shadow-pink-400   relative h-72 w-60 rounded-xl  transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute  inset-0 p-4">
                      <Image src={tailoredCoaching} className="h-4/5 object-contain" alt="#" />
                      <h1 className="h-1/5 josefin text-pink-700 justify-center text-base uppercase font-semibold flex items-center">Tailored Coaching</h1>
                    </div>
                    <div className="absolute inset-0 h-72 w-60  rounded-xl bg-pink-800 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                      <p className="p-5 text-justify text-pink-100">
                        We understand that every individual&#39;s journey is unique&#46; Our coaching is customized to address your specific needs&#44; challenges&#44; and aspirations&#44; ensuring a personalized approach that delivers real results&#46;
                      </p>

                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ x: "-10vw", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 120, duration: 1 }}
                className="w-60 mx-auto mb-8 md:mb-0">
                <div className="group w-44 h-72 [perspective:1000px] rounded-lg">
                  <div className="bg-blue-200   relative h-72 w-60 rounded-xl shadow-blue-300 shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute  inset-0 p-4">
                      <Image src={expertGuidance} className="h-4/5 object-contain" alt="#" /><h1 className="h-1/5 flex items-center justify-center text-base uppercase font-semibold  josefin text-blue-500">Expert Guidance</h1>
                    </div>
                    <div className="absolute inset-0 h-72 w-60  rounded-xl bg-blue-800 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                      <p className="p-5 text-justify text-blue-100">
                        Our team of skilled coaches brings extensive experience and a deep understanding of various life aspects&#44; offering you insights and strategies grounded in both theory and practice&#46;
                      </p>

                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="md:flex md:mx-auto  md:w-3/4 ">
              <motion.div
                initial={{ x: "-10vw", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, type: "spring", stiffness: 120, duration: 1 }}
                className="w-60 mx-auto mb-8 md:mb-0">
                <div className="group w-44 h-72 [perspective:1000px] rounded-lg">
                  <div className="bg-slate-200  relative h-72 w-60 rounded-xl shadow-slate-300 shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute  inset-0 p-4">
                      <Image src={holisticApproach} className="h-4/5 object-contain " alt="#" />
                      <h1 className="h-1/5 flex items-center justify-center text-base uppercase font-semibold  josefin text-black">Holistic Approach</h1>
                    </div>
                    <div className="absolute inset-0 h-72 w-60  rounded-xl bg-slate-800 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                      <p className="p-5 text-justify text-slate-100">
                        We focus on the whole person&#44; integrating multiple facets of life to foster comprehensive growth and balance&#46; Our holistic approach ensures that improvements in one area positively impact all other areas&#46;
                      </p>

                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ x: "-10vw", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 120, duration: 1 }}
                className="w-60 mx-auto mb-8 md:mb-0">
                <div className="group w-44 h-72 [perspective:1000px] rounded-lg">
                  <div className="bg-green-200  relative h-72 w-60 rounded-xl shadow-green-300 shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute p-4  inset-0">
                      <Image src={transformationalResults} className="h-4/5 object-contain" alt="#" /><h1 className="h-1/5 flex items-center justify-center text-center text-base uppercase font-semibold  josefin text-green-500">Transformational Results</h1>
                    </div>
                    <div className="absolute inset-0 h-72 w-60  rounded-xl bg-green-800 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                      <p className="p-5 text-justify text-green-100">
                        Our goal is not just to help you navigate life&#39;s challenges but to inspire lasting transformation&#46; We&#39;re dedicated to supporting you every step of the way as you achieve your goals and realize your full potential&#46;
                      </p>

                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="container mx-auto my-16 md:my-20">

            <div className="px-5 py-5 md:py-10 border-slate-100 border-y-2">
              <p className=" text-center josefin text-xl mb-5 md:w-1/2 mx-auto">Life is a dynamic and multifaceted journey&#44; and we&#39;re here to help you master it&#46; As experienced life coaches&#46; we offer comprehensive support across a wide range of areas&#46;
              </p>
              <Image src={leafIcon} className=" pointer-events-none w-48 mx-auto" alt="#" />
            </div>

          </motion.div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><path fill="#facc15" fill-opacity="1" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path></svg>

      </div>


      <div>
        <svg className="rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><path fill="#facc15" fill-opacity="1" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path></svg>
        <div className="container mx-auto">

          <h1 className="flex gap-2 justify-center uppercase tracking-widest text-lg md:text-xl text-center items-center font-light "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
          </svg>
            <span>including</span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </h1>

          <div className="bg-fixed bg-center sm:bg-contain bg-no-repeat bg-[url('../public/home/goldenice.png')]">
            <motion.div
              initial={{ y: "10vw", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="px-5 py-9 md:py-16 md:flex md:gap-8 md:items-center">
              <div className="md:w-1/2 ">
                <h1 className="tracking-widest font-semibold mb-5  text-2xl md:text-3xl  great text-yellow-400 underline underline-offset-8">Personal Development&#58;</h1>
                <p className="text-justify mb-4 text-sm sm:text-base">Unlock your true potential by enhancing self-awareness&#44; building confidence&#44; and setting meaningful goals&#46; We provide tailored coaching to help you cultivate positive habits&#44; overcome challenges&#44; and achieve personal fulfillment&#46;
                </p>
              </div>
              <Image
                src={personalDev} className="md:w-1/2 h-60 sm:h-80 lg:h-96 w-80 sm:w-96 mx-auto object-cover object-center" alt="#" />
            </motion.div>


            <motion.div
              initial={{ y: "10vw", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="px-5  py-9 md:py-16 md:flex md:gap-8 md:items-center">
              <div className="order-2 md:w-1/2 ">
                <h1 className="tracking-widest font-semibold mb-5 text-2xl md:text-3xl great text-yellow-400 underline underline-offset-8">Career Growth&#58;</h1>
                <p className="text-justify mb-4 text-sm sm:text-base">
                  Take control of your professional path with strategic guidance and support&#46; Whether you&#39;re seeking career advancement&#44; transitioning to a new role&#44; or starting a new venture&#44; we offer the tools and insights you need to succeed and thrive in your career&#46;

                </p>
              </div>
              <Image src={careerGrowth} className="order-1 md:w-1/2 h-60 sm:h-80 lg:h-96 w-80 sm:w-96 mx-auto object-cover object-center" alt="#" />

            </motion.div>

            <motion.div
              initial={{ y: "10vw", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="px-5 py-9 md:py-16 md:flex md:gap-8 md:items-center">
              <div className=" md:w-1/2 ">
                <h1 className="great tracking-widest font-semibold mb-5 text-2xl md:text-3xl text-yellow-400 underline underline-offset-8">Health and Wellness&#58; </h1>
                <p className="text-justify mb-4 text-sm sm:text-base">
                  Achieve a balanced and healthy lifestyle through personalized wellness plans and strategies&#46; Our coaching focuses on holistic well-being&#44; including physical health&#44; mental clarity&#44; and emotional resilience&#44; to help you live your best life

                </p>
              </div>
              <Image src={Health} className="md:w-1/2 h-60 sm:h-80 lg:h-96 w-80 sm:w-96 mx-auto object-cover object-center" alt="#" />

            </motion.div>
            <motion.div
              initial={{ y: "10vw", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="px-5 py-9 md:py-16 md:flex md:gap-8 md:items-center">
              <div className=" md:w-1/2 order-2">
                <h1 className="great tracking-widest font-semibold mb-5 text-2xl md:text-3xl text-yellow-400 underline underline-offset-8"> Relationships and Communication&#58; </h1>
                <p className="text-justify mb-4 text-sm sm:text-base">
                  Build stronger&#44; more meaningful connections with those around you&#46; We provide practical advice and techniques to improve your communication skills&#44; resolve conflicts&#44; and foster positive relationships in both personal and professional settings&#46;


                </p>
              </div>
              <Image src={relationship} className="order-1 md:w-1/2 h-60 sm:h-80 lg:h-96 w-80 sm:w-96 mx-auto object-cover object-center" alt="#" />

            </motion.div>
            <motion.div
              initial={{ y: "10vw", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="px-5 py-9 md:py-16 md:flex md:gap-8 md:items-center">
              <div className=" md:w-1/2">
                <h1 className="great tracking-widest font-semibold mb-5 text-2xl md:text-3xl text-yellow-400 underline underline-offset-8">Time Management and Productivity&#58;  </h1>
                <p className="text-justify mb-4 text-sm sm:text-base">
                  Master the art of effective time management and boost your productivity&#46; Our coaching helps you develop efficient routines&#44; prioritize tasks&#44; and overcome procrastination&#44; enabling you to achieve more with less stress&#46;
                </p>
              </div>
              <Image src={time} className=" md:w-1/2 h-60 sm:h-80 lg:h-96 w-80 sm:w-96 mx-auto object-cover object-center" alt="#" />

            </motion.div>
          </div>

        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><path fill="#facc15" fill-opacity="1" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path></svg>
      </div>



      <section className="bg-fixed bg-cover  bg-no-repeat bg-[url('../public/home/goldenfire.png')]">


        <svg className="rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><path fill="#facc15" fill-opacity="1" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path></svg>
        <h1 className="pt-4 md:pt-0  text-center tracking-wide  font-semibold josefin text-lg md:text-3xl">&#45; Start Your <span className="great text-2xl md:text-5xl lg:text-6xl tracking-widest  font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-100 to-yellow-400">Journey</span> Today &#45;</h1>
        <div className="conatiner mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-72 md:w-96 md:text-base pt-5 pb-5 md:pt-10 text-center mx-auto italic text-sm">Are you ready to embrace change and take control of your life&#63; At Surging Phoenix Enterprises&#44; we&#39;re committed to helping you rise above limitations and soar to new heights&#46; Connect with us today to start your transformative journey and discover how our life coaching can make a profound difference in your life&#46;
          </motion.p>
          <Image src={cruveLine} className="w-56 lg:w-64 mx-auto" alt="#" />

          <section className="container mx-auto my-6 md:my-14 lg:my-20 md:flex">

            <div className="md:w-1/2">
              <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 1 }}
                className="pb-1 md:pb-3 text-center text-3xl text-yellow-400   josefin md:text-4xl lg:text-6xl tracking-wider great">Contact Us</motion.h1>
              <form className="mt-5 grid place-items-center ">
                <motion.input
                  initial={{ x: '-10vw', opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 1, type: 'spring', stiffness: 120 }}
                  className="text-black outline-none w-2/3 border-b-2  shadow-md   px-4 py-2 rounded-lg text-xs sm:py-3 sm:text-lg mb-5 md:text-sm md:py-2 lg:py-3 lg:text-base tracking-widest" type="text" placeholder="Name" />
                <motion.input
                  initial={{ x: '10vw', opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 1, type: 'spring', stiffness: 120 }}
                  className="text-black outline-none w-2/3 border-b-2  shadow-md   px-4 py-2 rounded-lg text-xs sm:py-3 sm:text-lg mb-5 md:text-sm md:py-2 lg:py-3 lg:text-base tracking-widest" type="text" placeholder="Phone Number" />
                <motion.input
                  initial={{ x: '-10vw', opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 1, type: 'spring', stiffness: 120 }}
                  className="text-black outline-none w-2/3 border-b-2  shadow-md   px-4 py-2 rounded-lg text-xs sm:py-3 sm:text-lg mb-5 md:text-sm md:py-2 lg:py-3 lg:text-base tracking-widest" type="email" placeholder="Email" />
                <motion.textarea
                  initial={{ x: '10vw', opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 1, type: 'spring', stiffness: 120 }}
                  className="text-black outline-none w-2/3 border-b-2  shadow-md   px-4 py-2 h-28 rounded-lg sm:py-3 sm:text-lg text-sm mb-5 md:text-sm md:py-2 lg:py-3 lg:text-base tracking-widest" type="text" placeholder="Message" />
                <motion.input
                  initial={{ x: '-10vw', opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1, type: 'spring', stiffness: 120 }}
                  type="submit" value="Submit" className="py-2 px-6 text-xs font-medium tracking-wide shadow-md cursor-pointer bg-yellow-400 text-black rounded sm:text-lg sm:py-3 sm:px-10 md:text-base md:py-2 lg:text-lg" />
              </form>
            </div>
            <motion.div
              initial={{ x: '-10vw', opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 1, type: 'tween', stiffness: 120 }}
              className="mt-5 bg-yellow-400 pt-16 rounded-t-full   md:rounded-l-full shadow-2xl   lg:mt-0 md:w-1/2 ">
              <h1 className="px-10 text-xl  text-black  font-semibold text-center sm:text-3xl   md:mt-10 lg:text-2xl">Don&apos;t be a stranger just say hello &#33;</h1>
              <p className="text-xs mt-2 px-8 lg:px-10 text-black text-center md:text-base md:mt-10 lg:mt-3">Explore our range of services&#44; book a consultation&#44; or get in touch with our team to learn more&#46; Your path to growth and success begins here</p>



            </motion.div>
          </section>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><path fill="#facc15" fill-opacity="1" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path></svg>
        </div>
      </section>
    </>

  )
}


