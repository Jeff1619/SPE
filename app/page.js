
"use client"

import Image from "next/image";
import offer from '@/public/home/offer.png'
import conseling from '@/public/home/conseling.jpg'
import corporate from '@/public/home/corporate.jpg'
import personalDev from '@/public/home/personal.jpg'
import careerGrowth from '@/public/home/money.jpg'
import Health from '@/public/home/Health.jpg'
import relationship from '@/public/home/Relationships.jpg'
import tailoredCoaching from '@/public/home/TailoredCoaching.png'
import expertGuidance from '@/public/home/ExpertGuidance.png'
import holisticApproach from '@/public/home/HolisticApproach.png'
import transformationalResults from '@/public/home/TransformationalResults.png'
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
          <div className="container mx-auto flex justify-center md:mt-10 lg:mt-14">
            <p className="text-justify lg:w-5/6 md:text-center md:px-10 text-sm sm:text-base ">At <span className="text-yellow-400 font-bold font-sans italic animate-pulse">Surging Phoenix Enterprises</span>&#44; we believe that every individual has the potential to rise&#44; transform&#44; and achieve greatness&#46; Our mission is to guide you on a journey of personal evolution&#44; helping you navigate the complexities of life with clarity&#44; confidence&#44; and resilience&#46;
            </p>
          </div>


          <div className="container mx-auto mt-6 sm:mt-8 lg:mt-16">
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


      {/* <div className="container mx-auto my-8">
        <p className=" text-center josefin text-xl px-5 py-5 border-slate-100 border-y-2">Life is a dynamic and multifaceted journey, and we’re here to help you master it. As experienced life coaches, we offer comprehensive support across a wide range of areas, </p>
      </div> */}

      <h1 className="text-center font-semibold text-sm py-9 md:py-14 lg:py-20 px-8 josefin">Why Choose <span className="text-yellow-400 text-xl md:text-2xl great tracking-widest">Surging Phoenix Enterprises</span>&#63;</h1>

      <div className="container mx-auto">

        <div className="lg:flex">
          <div className="md:mb-10 lg:mb-0 md:flex md:mx-auto  md:w-3/4">
            <div className="w-60 mx-auto mb-8 md:mb-0">
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
            </div>
            <div className="w-60 mx-auto mb-8 md:mb-0">
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
            </div>
          </div>
          <div className="md:flex md:mx-auto  md:w-3/4 ">
            <div className="w-60 mx-auto mb-8 md:mb-0">
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
            </div>
            <div className="w-60 mx-auto mb-8 md:mb-0">
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
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">

        <div className="px-5 py-9 md:py-16 md:flex md:gap-8 md:items-center">
          <div className="md:w-1/2 ">
            <h1 className="tracking-widest font-semibold mb-2 text-2xl md:text-2xl  great ">Personal Development&#58;</h1>
            <p className="text-justify mb-4 text-sm sm:text-base">Unlock your true potential by enhancing self-awareness&#44; building confidence&#44; and setting meaningful goals&#46; We provide tailored coaching to help you cultivate positive habits&#44; overcome challenges&#44; and achieve personal fulfillment&#46;
            </p>
          </div>
          <Image src={personalDev} className="md:w-1/2 h-60 sm:h-80 lg:h-96 w-80 sm:w-96 mx-auto object-cover object-center" alt="#" />
        </div>
        <div className="px-5 py-9 md:py-16 md:flex md:gap-8 md:items-center">
          <div className="order-2 md:w-1/2 ">
            <h1 className="tracking-widest font-semibold mb-2 text-2xl md:text-2xl great">Career Growth&#58;</h1>
            <p className="text-justify mb-4 text-sm sm:text-base">
              Take control of your professional path with strategic guidance and support&#46; Whether you&#39;re seeking career advancement&#44; transitioning to a new role&#44; or starting a new venture&#44; we offer the tools and insights you need to succeed and thrive in your career&#46;

            </p>
          </div>
          <Image src={careerGrowth} className="order-1 md:w-1/2 h-60 sm:h-80 lg:h-96 w-80 sm:w-96 mx-auto object-cover object-center" alt="#" />

        </div>
        <div className="px-5 py-9 md:py-16 md:flex md:gap-8 md:items-center">
          <div className=" md:w-1/2 ">
            <h1 className="great tracking-widest font-semibold mb-2 text-2xl md:text-2xl">Health and Wellness&#58; </h1>
            <p className="text-justify mb-4 text-sm sm:text-base">
              Achieve a balanced and healthy lifestyle through personalized wellness plans and strategies&#46; Our coaching focuses on holistic well-being&#44; including physical health&#44; mental clarity&#44; and emotional resilience&#44; to help you live your best life

            </p>
          </div>
          <Image src={Health} className="md:w-1/2 h-60 sm:h-80 lg:h-96 w-80 sm:w-96 mx-auto object-cover object-center" alt="#" />

        </div>
        <div className="px-5 py-9 md:py-16 md:flex md:gap-8 md:items-center">
          <div className=" md:w-1/2 order-2">
            <h1 className="great tracking-widest font-semibold mb-2 text-2xl md:text-2xl"> Relationships and Communication&#58; </h1>
            <p className="text-justify mb-4 text-sm sm:text-base">
              Build stronger&#44; more meaningful connections with those around you&#46; We provide practical advice and techniques to improve your communication skills&#44; resolve conflicts&#44; and foster positive relationships in both personal and professional settings&#46;


            </p>
          </div>
          <Image src={relationship} className="order-1 md:w-1/2 h-60 sm:h-80 lg:h-96 w-80 sm:w-96 mx-auto object-cover object-center" alt="#" />

        </div>
        <div className="px-5 py-9 md:py-16 md:flex md:gap-8 md:items-center">
          <div className=" md:w-1/2">
            <h1 className="great tracking-widest font-semibold mb-2 text-2xl md:text-2xl">Time Management and Productivity&#58;  </h1>
            <p className="text-justify mb-4 text-sm sm:text-base">
              Master the art of effective time management and boost your productivity&#46; Our coaching helps you develop efficient routines&#44; prioritize tasks&#44; and overcome procrastination&#44; enabling you to achieve more with less stress&#46;
            </p>
          </div>
          <Image src={time} className=" md:w-1/2 h-60 sm:h-80 lg:h-96 w-80 sm:w-96 mx-auto object-cover object-center" alt="#" />

        </div>
      </div>

      {/* <section className="overflow-hidden h-max lg:h-screen pt-8 px-3 md:px-0 md:pl-8 bg-yellow-400 ">
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
        animate={{ opacity: 1 }}
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
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 1 }}
            className="mb-2 sm:mb-4 border-t-4 border-b-8 border-yellow-400 md:w-1/2 py-3 md:py-5">
            <p className="text-justify sm:text-lg">Individual counselling is a supportive and confidential process where a trained therapist works one&#45;on&#45;one with a client to explore and address personal challenges&#44; emotions&#44; and goals&#46; It&#39;s a collaborative effort aimed at fostering insight&#44; coping skills&#44; and overall well&#45;being&#46;</p>
            <div className="mt-2 flex items-center justify-end">
              <p className="mb-1 pr-3 text-yellow-400 uppercase text-xs sm:text-base sm:tracking-widest md:text-sm">For counselling &#45;</p>
              <button onClick={handleToggle} className="border-yellow-400 border flex text-yellow-400 px-2 py-1.5 rounded-lg ">

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
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
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 1 }}

          className="px-5 py-5 lg:py-14 text-center  sm:text-2xl text-yellow-200 josefin text-lg md:text-3xl lg:text-5xl">Guidance for school students to success</motion.h1>
        <div className=" container mx-auto bg-cover bg-top bg-[url('../public/home/sucess.jpg')]">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 1 }}
            className="bg-gradient-to-r  from-black/70 to-black/50 lg:from-black/90 lg:to-black/40">
            <p className="p-5 text-justify md:px-13 md:text-center lg:px-28 lg:py-20">Children are young individuals who are in the early stages of growth and development&#46; They bring joy&#44; curiosity&#44; and boundless energy to our lives&#46; Children possess unique personalities&#44; interests&#44; and talents that shape their journey of learning and discovery&#46; It is our privilege and responsibility to nurture and guide them with love&#44; care&#44; and support as they navigate their way through childhood and beyond&#46;</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="bg-yellow-400 p-5 ">
            <p className="text-black text-center josefin text-lg font-semibold md:px-10">We mainly focus on giving session for students to be more responsible at the early age and excel in their career</p>
            <button onClick={handleToggle} className="mt-2 border-black border-2 flex mx-auto text-black px-2 py-1.5 rounded-lg ">


              <span className="font-light pr-1">Apply Now</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M12 1.5a.75.75 0 0 1 .75.75V4.5a.75.75 0 0 1-1.5 0V2.25A.75.75 0 0 1 12 1.5ZM5.636 4.136a.75.75 0 0 1 1.06 0l1.592 1.591a.75.75 0 0 1-1.061 1.06l-1.591-1.59a.75.75 0 0 1 0-1.061Zm12.728 0a.75.75 0 0 1 0 1.06l-1.591 1.592a.75.75 0 0 1-1.06-1.061l1.59-1.591a.75.75 0 0 1 1.061 0Zm-6.816 4.496a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68ZM3 10.5a.75.75 0 0 1 .75-.75H6a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 10.5Zm14.25 0a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H18a.75.75 0 0 1-.75-.75Zm-8.962 3.712a.75.75 0 0 1 0 1.061l-1.591 1.591a.75.75 0 1 1-1.061-1.06l1.591-1.592a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, type: "tween", duration: 1 }}
        className="mt-5 md:mt-8">
        <div className="bg-cover bg-top bg-[url('../public/home/college.jpg')]">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 1 }}
            className="bg-gradient-to-r  from-black/70 to-black/50">
            <div className="container mx-auto p-5">
              <h1 className="md:py-4 lg:py-8 text-xl text-center josefin font-semibold sm:text-2xl md:text-3xl lg:text-5xl">Career guidance for college students</h1>
              <p className="text-justify md:text-center py-5 lg:px-28 ">Navigating your career path can be both exciting and challenging&#46; As you embark on this journey&#44; it&#39;s essential to equip yourself with the necessary tools and insights to make informed decisions about your future&#46; Career guidance provides you with valuable resources&#44; advice&#44; and support to help you explore your interests&#44; define your goals&#44; and prepare for the opportunities ahead&#46;</p>
              <p className="text-center rounded-lg  px-4 py-4 backdrop-brightness-50 josefin md:text-lg">Let&#39;s embark on this journey together to discover your potential and pave the way for a fulfilling career&#46;</p>

              <button onClick={handleToggle} className="mt-2 border-slate-100 border-2 flex mx-auto text-slate-100 px-2 py-1.5 rounded-lg ">


                <span className="font-light pr-1">Apply Now</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path fillRule="evenodd" d="M12 1.5a.75.75 0 0 1 .75.75V4.5a.75.75 0 0 1-1.5 0V2.25A.75.75 0 0 1 12 1.5ZM5.636 4.136a.75.75 0 0 1 1.06 0l1.592 1.591a.75.75 0 0 1-1.061 1.06l-1.591-1.59a.75.75 0 0 1 0-1.061Zm12.728 0a.75.75 0 0 1 0 1.06l-1.591 1.592a.75.75 0 0 1-1.06-1.061l1.59-1.591a.75.75 0 0 1 1.061 0Zm-6.816 4.496a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68ZM3 10.5a.75.75 0 0 1 .75-.75H6a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 10.5Zm14.25 0a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H18a.75.75 0 0 1-.75-.75Zm-8.962 3.712a.75.75 0 0 1 0 1.061l-1.591 1.591a.75.75 0 1 1-1.061-1.06l1.591-1.592a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </motion.section >

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 1 }}
        className="my-5 h-24 sm:h-32 md:h-44 lg:h-60 bg-cover bg-top bg-[url('../public/home/corbanner.jpg')]">
        <div className="flex sm:h-32 md:h-44 lg:h-60 justify-center items-center h-24 bg-gradient-to-r  from-black/60 to-black/50">
          <h1 className="text-yellow-200 uppercase tracking-widest sm:text-lg md:text-2xl lg:text-3xl ">Corporate training</h1>
        </div>
      </motion.div>

      <div

        className="bg-cover bg-top bg-[url('../public/home/corbackgrnd.jpg')]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 1 }}
          className="bg-gradient-to-r  from-black/60 to-black/50">
          <div className="md:flex p-5 md:items-center md:gap-5  container mx-auto">

            <p className="md:w-1/2 text-justify md:text-center">In today&#39;s dynamic business environment&#44; continuous learning and development are essential for staying competitive and achieving organizational goals&#46; Corporate training plays a pivotal role in equipping our team with the skills&#44; knowledge&#44; and tools necessary to excel in their roles and contribute effectively to our collective success&#46;</p>
            <Image src={corporate} className="md:w-1/2 mt-4 md:mt-0" alt="#" />
          </div>
        </motion.div>
      </div>

      <section className="md:flex md:items-center container p-5  mx-auto my-5 bg-yellow-400 text-black rounded-3xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, }}
          className="md:w-1/2 flex flex-col gap-5">
          <p className="text-center italic border-t-4 border-black rounded-full pt-10">Through tailored programs and workshops&#44; we aim to empower each of you with the expertise and capabilities needed to navigate challenges&#44; embrace opportunities&#44; and drive innovation within our organization&#46;</p>
          <p className="border-b-2 border-black text-center text-lg lg:text-xl josefin font-semibold">Let&#39;s embark on this journey of growth and excellence together&#46;</p>
        </motion.div>
        <div className="md:w-1/2 mt-3 md:mt-0">
          <h1 className="text-center caveat text-3xl lg:text-5xl mb-4 md:mb-5  lg:py-7">Come join us</h1>
          <motion.button
            initial={{ x: '-20vw', opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, }}
            onClick={handleToggle} className="active:bg-yellow-400 ease duration-100 flex mx-auto rounded-md bg-black py-1.5 sm:py-2 md:py-3 px-4 text-yellow-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>

            <span className="px-2">Apply Today</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </motion.button>
        </div>
      </section>

      {
        // FOR FORM 
        active && (
          <div className="w-full h-full fixed  bg-yellow-400">

            <section className="container mx-auto  flex justify-center ">
              <motion.div
                initial={{ y: '-10vw', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, }}
                className=" fixed z-20 top-1/4  py-14 sm:py-20 px-3 sm:px-10 bg-slate-50 mx-4 flex flex-col gap-5 sm:gap-6 rounded-lg  ">
                <button onClick={handleToggle}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 sm:size-8 text-black absolute top-3 right-3 ease active:text-yellow-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>

                </button>
                <h1 className="fixed top-7 sm:top-10 text-black pl-5 josefin text-xl sm:text-2xl">Looking For &#44;</h1>
                <a href="" target="_blank" className="bg-yellow-400 text-black py-2 sm:py-4 px-3 sm:px-6 text-center flex rounded-lg items-center justify-between shadow-md josefin text-lg sm:text-xl group ease duration-100 active:bg-black"><span className="group-active:text-yellow-400">Guidance For School &#47; College Students</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 group-active:text-yellow-400">
                  <path fillRule="evenodd" d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                </svg>
                </a>
                <h1 className="text-black text-center">OR</h1>
                <a href="" target="_blank" className="bg-yellow-400 text-black py-2 sm:py-4 px-3 sm:px-6 text-center flex rounded-lg items-center justify-between shadow-md josefin text-lg sm:text-xl group ease duration-100 active:bg-black"><span className="group-active:text-yellow-400">Counselling &#47; Corporate training</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 group-active:text-yellow-400">
                  <path fillRule="evenodd" d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                </svg>
                </a>
              </motion.div>
            </section>

          </div>
        )
      } */}


    </>

  )
}


