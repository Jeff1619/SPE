"use client"


import Image from "next/image"
import graph from '@/public/about/graph.png'
import vision from '@/public/about/vision.png'
import belive from '@/public/about/belive.png'
import mission from '@/public/about/mission.png'
import thinking from '@/public/about/thinking.png'
import cruveIcon from '@/public/about/cruveIcon.png'
import arrow from '@/public/about/arrowIcon.png'
import shylla from '@/public/about/shylla.jpg'
import people from '@/public/about/people.jpg'
import strategies from '@/public/about/strategies.jpg'
import mindset from '@/public/about/mindset.jpg'
import guidance from '@/public/about/guidance.jpg'
import goal from '@/public/about/goal.jpg'
import Achievement from '@/public/about/Achievement.jpg'
import Emotional from '@/public/about/Emotional .jpg'
import Obstacles from '@/public/about/Obstacles .jpg'
import Personal from '@/public/about/Personal .jpg'
import Success from '@/public/about/Success .jpg'
import workshop from '@/public/about/workshop.jpg'
import Daily from '@/public/about/Daily .png'
import Overcome from '@/public/about/Overcome .png'
import Routine from '@/public/about/Routine.png'
import Motivate from '@/public/about/Motivate.png'
import Measure from '@/public/about/Measure .png'
import Approach from '@/public/about/Approach.png'
import Techniques from '@/public/about/Techniques.png'
import Supportive from '@/public/about/Supportive .png'



import { motion } from "framer-motion"

export default function About() {


    return (
        <>

            <div

                className="pt-9 md:pt-20  bg-fixed bg-center  bg-cover bg-[url('../public/about/banner.jpg')]">
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-yellow-400 cinzel font-semibold uppercase  text-center text-2xl sm:text-5xl md:text-5xl lg:text-6xl tracking-wide pb-2 md:pb-5">surging Phoenix</motion.h1>
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 1 }}
                    className="text-slate-100  text-lg cinzel uppercase sm:text-2xl md:text-3xl text-center mb-2 lg:mb-5  tracking-widest">Enterprise</motion.h1>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><path fill="#facc15" fill-opacity="1" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path></svg>

            </div>

            <div
                className="bg-fixed bg-center md:bg-left-top bg-cover bg-[url('../public/about/squarebg.png')] pt-9 space-y-6">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 1 }}
                    className="text-black px-5 md:px-0 text-center text-sm md:w-1/2 md:mx-auto md:text-base">Welcome to <span className="text-black  font-bold italic  md:text-lg">Surging Phoenix Enterprises</span>	&#44; a dynamic and innovative company dedicated to unlocking the potential within every individual&#46; At Surging Phoenix&#44; we specialise in comprehensive personality development programs designed for all ages and stages of life&#46; Our mission is to empower individuals to achieve their personal and professional goals through tailored training and development initiatives&#46;</motion.p>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 1 }}
                ><Image src={cruveIcon} className="w-28 md:w-36 mx-auto" alt="#" /></motion.div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><path fill="#101820ff" fill-opacity="1" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path></svg>
            </div>


            <section>
                <div className="container mx-auto">
                    <div className="px-5 md:py-5 lg:py-8 lg:w-3/4 lg:mx-auto">
                        <div className="grid grid-cols-1 gap-10 md:gap-0 md:grid-cols-3 place-items-center pt-8">
                            <motion.div

                                initial={{ x: '-10vw', opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.4, type: "tween", duration: 1 }}

                                className="bg-blue-100 w-56 h-52  shadow-xl rounded-lg border-b-8 border-blue-300">

                                <Image src={vision} className="h-3/5 w-40 mx-auto  object-contain" alt="vision.logo" />
                                <div className="h-2/5  flex items-center">
                                    <div className="text-center px-3 space-y-1">
                                        <h1 className=" text-blue-400 font-light uppercase">Our Vision</h1>
                                        <p className=" text-blue-400 text-xs font-semibold">Inspire a Billion
                                            by Leading with Wisdom&#46;</p>
                                    </div>
                                </div>


                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4, duration: 1 }}

                                className="bg-green-100 w-56 h-52  border-0 border-b-8  border-green-500 shadow-xl rounded-lg py-2">

                                <Image src={belive} className="h-3/5 w-40 mx-auto  object-contain" alt="belive.logo" />
                                <div className="h-2/5  flex items-center">
                                    <div className="text-center px-3 space-y-1">
                                        <h1 className=" text-green-600 font-light uppercase">Our Beliefs</h1>
                                        <p className="text-xs  text-green-600 font-semibold">
                                            We believe that we are all divided by boundaries but are United by Wisdom&#46;
                                        </p>

                                    </div>
                                </div>
                            </motion.div>
                            <motion.div

                                initial={{ x: '5vw', opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.4, type: "tween", duration: 1 }}

                                className="bg-red-100  w-56 h-52  border-b-8  border-red-500 text-center  shadow-xl rounded-lg">
                                <Image src={mission} className="h-3/5 w-32 object-contain mx-auto" alt="misson.logo" />
                                <div className="h-2/5  flex items-center">
                                    <div className="text-center px-3 space-y-0">
                                        <h1 className="text-red-600 font-light uppercase">Our Mission</h1>
                                        <p className=" text-xs font-semibold text-red-600">Co-Creating Leadership and Wellbeing Journeys for Individuals & Organizations&#46;</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

            </section>

            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}

                className="container mx-auto bg-yellow-400 h-max mt-10 pb-10 pt-10 sm:px-10 lg:px-20 rounded-3xl">
                <div className="  md:flex">
                    <div className=" md:w-1/2">
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8  w-52 text-black">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
                            </svg>
                            <p className="pr-3 text-black md:pr-0 text-sm sm:text-base  text-center mt-5">
                                Our services extend beyond personal growth&#46; We also provide expert placement and recruiting services to help businesses and job seekers find their perfect match&#46; By combining our expertise in personality development with strategic recruitment solutions&#44; <span className="text-base md:text-lg animate-pulse  font-semibold italic">Surging Phoenix Enterprises</span> is your trusted partner in building a brighter future&#46;
                            </p>
                        </div>
                    </div>
                    <div className="md:flex md:items-center md:w-1/2">
                        <Image src={graph} className="opacity-65 mx-auto w-2/3" alt="" />
                    </div>
                </div>
            </motion.section>


            <section className="container mx-auto my-20 px-5">
                <motion.h1
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.1 }}
                    className="text-sm sm:text-3xl md:text-4xl text-center   tracking-wide uppercase josefin text-slate-50">why are we Fail in</motion.h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" size-6 sm:size-10 md:size-12 mx-auto ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                </svg>



                <div className="md:hidden mt-5 flex flex-col gap-3">
                    <motion.div
                        initial={{ x: "-10vw", opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1, type: "spring", duration: 0.2, stiffness: 120 }}

                        className="w-60 sm:w-80 md:w-96 mx-auto rounded-full shadow-lg text-center pt-2 pb-2 text-xs sm:text-base md:text-lg  font-medium tracking-wide border-b-4 text-white"> Lack of Self-Awareness</motion.div>
                    <motion.div
                        initial={{ x: "5vw", opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1, type: "spring", duration: 0.2, stiffness: 120 }}
                        className="w-60 sm:w-80 md:w-96 mx-auto rounded-full shadow-lg text-center pt-2 pb-2 text-xs sm:text-base md:text-lg  font-medium tracking-wide border-b-4 text-white"> Fear of Change</motion.div>
                    <motion.div
                        initial={{ x: "-10vw", opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1, type: "spring", duration: 0.2, stiffness: 120 }}
                        className="w-60 sm:w-80 md:w-96 mx-auto rounded-full shadow-lg text-center pt-2 pb-2 text-xs sm:text-base md:text-lg  font-medium tracking-wide border-b-4 text-white"> Negative Self-Beliefs</motion.div>
                    <motion.div
                        initial={{ x: "5vw", opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1, type: "spring", duration: 0.2, stiffness: 120 }}
                        className="w-60 sm:w-80 md:w-96 mx-auto rounded-full shadow-lg text-center pt-2 pb-2 text-xs sm:text-base md:text-lg  font-medium tracking-wide border-b-4 text-white">External Pressures and Expectations</motion.div>
                    <motion.div
                        initial={{ x: "-10vw", opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1, type: "spring", duration: 0.2, stiffness: 120 }}
                        className="w-60 sm:w-80 md:w-96 mx-auto rounded-full shadow-lg text-center pt-2 pb-2 text-xs sm:text-base md:text-lg  font-medium tracking-wide border-b-4 text-white">Lack of Support and Resources</motion.div>
                    <motion.div
                        initial={{ x: "5vw", opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1, type: "spring", duration: 0.2, stiffness: 120 }}
                        className="w-60 sm:w-80 md:w-96 mx-auto rounded-full shadow-lg text-center pt-2 pb-2 text-xs sm:text-base md:text-lg  font-medium tracking-wide border-b-4 text-white">Procrastination and Lack of Motivation</motion.div>
                    <motion.div
                        initial={{ x: "-10vw", opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1, type: "spring", duration: 0.2, stiffness: 120 }}

                        className="w-60 sm:w-80 md:w-96 mx-auto rounded-full shadow-lg text-center pt-2 pb-2 text-xs sm:text-base md:text-lg  font-medium tracking-wide border-b-4 text-white">Fear of Failure</motion.div>
                    <motion.div
                        initial={{ x: "5vw", opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1, type: "spring", duration: 0.2, stiffness: 120 }}
                        className="w-60 sm:w-80 md:w-96 mx-auto rounded-full shadow-lg text-center pt-2 pb-2 text-xs sm:text-base md:text-lg  font-medium tracking-wide border-b-4 text-white">Emotional and Psychological Barriers</motion.div>
                    <motion.div
                        initial={{ x: "-10vw", opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1, type: "spring", duration: 0.2, stiffness: 120 }}
                        className="w-60 sm:w-80 md:w-96 mx-auto rounded-full shadow-lg text-center pt-2 pb-2 text-xs sm:text-base md:text-lg  font-medium tracking-wide border-b-4 text-white">Poor Time Management</motion.div>
                    <motion.div
                        initial={{ x: "5vw", opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1, type: "spring", duration: 0.2, stiffness: 120 }}
                        className="w-60 sm:w-80 md:w-96 mx-auto rounded-full shadow-lg text-center pt-2 pb-2 text-xs sm:text-base md:text-lg  font-medium tracking-wide border-b-4 text-white"> Inconsistent Effort</motion.div>
                    <motion.div
                        initial={{ x: "-10vw", opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1, type: "spring", duration: 0.2, stiffness: 120 }}
                        className="w-60 sm:w-80 md:w-96 mx-auto rounded-full shadow-lg text-center pt-2 pb-2 text-xs sm:text-base md:text-lg  font-medium tracking-wide border-b-4 text-white">Lack of Clear Goals</motion.div>
                    <Image src={thinking} className=" absolute m-auto left-0 right-0 pt-10 -z-10 opacity-35" alt="?" />
                </div>

                <div className="hidden md:block mt-5 ">
                    <div className="flex gap-5">
                        <div className="w-1/2">
                            <motion.div
                                initial={{ x: "-10vw", opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.1, type: "spring", duration: 0.2, stiffness: 120 }}

                                className=" md:w-80 mx-auto rounded-full shadow-lg text-center pt-4 pb-4 mb-5  md:text-base  font-medium tracking-wide border-b-4 font-sans text-white"> Lack of Self-Awareness</motion.div>
                            <motion.div
                                initial={{ x: "-10vw", opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.3, type: "spring", duration: 0.2, stiffness: 120 }}

                                className=" md:w-80 mx-auto rounded-full shadow-lg text-center pt-4 pb-4 mb-5  md:text-base  font-medium tracking-wide border-b-4 font-sans text-white"> Fear of Change</motion.div>
                            <motion.div
                                initial={{ x: "-10vw", opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.5, type: "spring", duration: 0.2, stiffness: 120 }}
                                className=" md:w-80 mx-auto rounded-full shadow-lg text-center pt-4 pb-4 mb-5  md:text-base  font-medium tracking-wide border-b-4 font-sans text-white"> Negative Self-Beliefs</motion.div>
                            <motion.div
                                initial={{ x: "-10vw", opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.7, type: "spring", duration: 0.2, stiffness: 120 }}
                                className=" md:w-80 mx-auto rounded-full shadow-lg text-center pt-4 pb-4 mb-5  md:text-base  font-medium tracking-wide border-b-4 font-sans text-white">External Pressures and Expectations</motion.div>
                            <motion.div
                                initial={{ x: "-10vw", opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.9, type: "spring", duration: 0.2, stiffness: 120 }}
                                className=" md:w-80 mx-auto rounded-full shadow-lg text-center pt-4 pb-4 mb-5  md:text-base  font-medium tracking-wide border-b-4 font-sans text-white">Lack of Support and Resources</motion.div>
                        </div>
                        <div className="w-1/2">
                            <motion.div
                                initial={{ x: "5vw", opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.1, type: "spring", duration: 0.2, stiffness: 120 }}
                                className="md:w-80 mx-auto rounded-full shadow-lg text-center pt-4 pb-4 mb-5  md:text-base  font-medium tracking-wide border-b-4 font-sans text-white">Lack of Clear Goals</motion.div>
                            <motion.div
                                initial={{ x: "5vw", opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.3, type: "spring", duration: 0.2, stiffness: 120 }}
                                className="md:w-80 mx-auto rounded-full shadow-lg text-center pt-4 pb-4 mb-5  md:text-base  font-medium tracking-wide border-b-4 font-sans text-white">Fear of Failure</motion.div>
                            <motion.div
                                initial={{ x: "5vw", opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.5, type: "spring", duration: 0.2, stiffness: 120 }}

                                className="md:w-80 mx-auto rounded-full shadow-lg text-center pt-4 pb-4 mb-5  md:text-base  font-medium tracking-wide border-b-4 font-sans text-white">Emotional and Psychological Barriers</motion.div>
                            <motion.div
                                initial={{ x: "5vw", opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.7, type: "spring", duration: 0.2, stiffness: 120 }}
                                className="md:w-80 mx-auto rounded-full shadow-lg text-center pt-4 pb-4 mb-5  md:text-base  font-medium tracking-wide border-b-4 font-sans text-white">Poor Time Management</motion.div>
                            <motion.div
                                initial={{ x: "5vw", opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.9, type: "spring", duration: 0.2, stiffness: 120 }}
                                className="md:w-80 mx-auto rounded-full shadow-lg text-center pt-4 pb-4 mb-5  md:text-base  font-medium tracking-wide border-b-4 font-sans text-white"> Inconsistent Effort</motion.div>
                        </div>
                        <Image src={thinking} className=" absolute m-auto left-0 right-0 -z-10 opacity-70" alt="?" />
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.11, duration: 0.2 }}
                        className=" md:w-96 mx-auto rounded-full shadow-lg text-center md:pt-4 md:pb-4  md:text-base mt-5 font-sans  font-medium tracking-wide border-b-4 text-white">Procrastination and Lack of Motivation</motion.div>
                </div>



            </section>


            <div className="my-8 bg-fixed bg-center  bg-cover bg-[url('../public/about/people.jpg')]">

                <div className="bg-gradient-to-r from-black to-black/40">
                    <svg className="rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><path fill="#101820ff" fill-opacity="1" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path></svg>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="container mx-auto py-5 space-y-3 md:space-y-5">


                        <p className="px-5 md:px-0 md:w-1/2  md:mx-auto text-xs sm:text-base text-center text-yellow-50">
                            At <span className="text-xs md:text-lg animate-pulse font-semibold italic text-yellow-400">Surging Phoenix Enterprises</span>&#44; we understand these challenges and are committed to providing the support&#44; guidance&#44; and resources necessary to overcome them&#46; Our personalised programs are designed to help individuals navigate these obstacles and achieve their full potential&#46;
                        </p>

                        <Image src={arrow} className="pointer-events-none w-36 mx-auto" alt="#" />
                    </motion.div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><path fill="#101820ff" fill-opacity="1" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path></svg>
                </div>
            </div>


            {/* <motion.div
                initial={{ x: '-10vw', opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1, type: 'tween', stiffness: 120, duration: 1 }}
                className="mt-10 mb-10 px-5">
                <p className="text-center text-yellow-400 caveat text-xl sm:text-2xl lg:text-3xl font-semibold border-b-4 pb-5 border-black tracking-wide rounded-lg">Join us on a journey of transformation and success&#46; Discover the Surging Phoenix difference today &#33;</p>
            </motion.div> */}

            <div className="container mx-auto">
                <div className="lg:my-20 space-y-4 md:flex md:gap-5 md:justify-center md:items-center">
                    <motion.div
                        initial={{ y: "20vw", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/2">
                        <Image src={shylla} className="w-32 md:w-64  lg:w-96  mx-auto rounded-full md:rounded-none" alt="#" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className=" md:w-1/2">
                        <h1 className="text-sm md:text-base text-center">Meet <span className="uppercase text-yellow-400 text-lg md:text-3xl josefin tracking-wider">Shylla&#44;</span></h1>
                        <p className="text-center px-5 md:px-0 text-sm md:text-base font-semibold italic tracking-wide">Your Life Coach and Resiliency Expert</p>
                        <p className="px-6   md:mx-auto mt-5 text-center text-sm sm:text-base">Welcome to Surging Phoenix Enterprises&#33; I&#39;m <span className="text-yellow-400 font-semibold text-base md:text-lg italic animate-pulse">Shylla</span>&#44; and I&#39;m here to share my journey of transformation and guide you on your path to overcoming obstacles and achieving success&#46;
                        </p>
                        <h1 className="mt-8 pl-6">About <span className="great text-3xl tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-yellow-100 to-yellow-400 font-semibold">Shylla</span>&#58;</h1>
                        <p className="px-6 text-start md:text-justify mt-2 text-sm sm:text-base">Life has presented me with a myriad of challenges&#44; each of which has shaped me into the resilient and empathetic coach I am today&#46; From navigating personal setbacks to overcoming professional hurdles&#44; I&#39;ve faced and conquered obstacles that many consider insurmountable&#46; My journey has not only deepened my understanding of life&#39;s complexities but has also fueled my passion for helping others turn their struggles into stepping stones for success&#46;
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto md:my-6">
                <h1 className="text-center py-6 md:py-12 font-semibold">My <span className="great text-2xl md:text-4xl tracking-widest text-yellow-100 underline underline-offset-8">Approach</span>&#58;</h1>
                <div className="space-y-10 md:space-y-16 lg:w-4/5 lg:mx-auto">
                    <motion.div
                        initial={{ y: "10vw", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-4 md:flex md:items-center md:mx-10">
                        <div className="space-y-1 md:w-1/2">
                            <h1 className="px-6 josefin text-xl md:text-2xl font-semibold tracking-tight text-yellow-300 text-left">Practical Strategies&#58;</h1>
                            <p className="text-sm md:text-base px-6 text-justify"> Through my own experiences&#44; I&#39;ve developed a toolkit of effective strategies for overcoming adversity&#46; I&#39;ll share practical techniques and insights that have helped me and many others navigate tough times and emerge stronger&#46;
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            <Image src={strategies} className="w-64 md:w-72 lg:w-96 mx-auto" alt="#" />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ y: "10vw", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}


                        className="space-y-4 md:flex md:items-center md:mx-10">
                        <div className="order-2 space-y-1 md:w-1/2">
                            <h1 className="px-6 josefin text-xl md:text-2xl font-semibold tracking-tight text-yellow-300 text-left">Empathetic Guidance&#58;</h1>
                            <p className="text-sm md:text-base px-6 text-justify"> Understanding and empathy are at the core of my coaching&#46; I recognize the emotional and psychological impact of challenges and provide a supportive environment where you can openly explore your difficulties and aspirations&#46;

                            </p>
                        </div>
                        <div className="order-1 md:w-1/2">
                            <Image src={guidance} className="w-64 md:w-72 lg:w-96 mx-auto" alt="#" />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ y: "10vw", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}


                        className="space-y-4 md:flex md:items-center md:mx-10">
                        <div className="space-y-1 md:w-1/2">
                            <h1 className="px-6 josefin text-xl md:text-2xl font-semibold tracking-tight text-yellow-300 text-left">Resilient Mindset&#58;</h1>
                            <p className="text-sm md:text-base px-6 text-justify"> I&#39;ve learned firsthand the power of resilience&#46; My coaching approach is rooted in the belief that every challenge is an opportunity for growth&#46; I&#39;ll work with you to develop a resilient mindset&#44; helping you to view obstacles as opportunities to learn and evolve&#46;
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            <Image src={mindset} className="w-64 md:w-72 lg:w-96 mx-auto" alt="#" />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ y: "10vw", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}


                        className="space-y-4 md:flex md:items-center md:mx-10">
                        <div className="order-2 space-y-1 md:w-1/2">
                            <h1 className="px-6 josefin text-xl md:text-2xl font-semibold tracking-tight text-yellow-300 text-left">Goal-Oriented Support&#58;</h1>
                            <p className="text-sm md:text-base px-6 text-justify"> Together&#44; we&#39;ll set clear&#44; actionable goals tailored to your unique situation&#46; I&#39;ll provide the motivation&#44; accountability&#44; and resources you need to stay focused and make steady progress toward your objectives&#46;
                            </p>
                        </div>
                        <div className="order-1 md:w-1/2">
                            <Image src={goal} className="w-64 md:w-72 lg:w-96 mx-auto" alt="#" />
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto my-10 md:my-6">
                <h1 className="text-center py-8 md:py-12 font-semibold space-x-2"><span>My</span> <span className="great text-2xl md:text-4xl tracking-widest text-yellow-100 underline underline-offset-8">Services</span><span>Include&#58;</span></h1>
                <div className="space-y-10 md:space-y-16 lg:w-4/5 lg:mx-auto">
                    <motion.div
                        initial={{ y: "10vw", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-4 md:flex md:items-center md:mx-10">
                        <div className="space-y-1 md:w-1/2">
                            <h1 className="px-6 josefin text-xl md:text-2xl font-semibold tracking-tight text-yellow-300 text-center md:text-left">Overcoming Obstacles Coaching&#58;</h1>
                            <p className="text-sm md:text-base px-6 text-justify">Learn how to navigate life&#39;s challenges with resilience and confidence&#46; I&#39;ll guide you through strategies for overcoming personal&#44; professional&#44; and emotional hurdles&#46;

                            </p>
                        </div>
                        <div className="md:w-1/2">
                            <Image src={Obstacles} className="w-64 md:w-72 lg:w-96 mx-auto" alt="#" />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ y: "10vw", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-4 md:flex md:items-center md:mx-10">
                        <div className="order-2 space-y-1 md:w-1/2">
                            <h1 className="px-6 josefin text-xl md:text-2xl font-semibold tracking-tight text-yellow-300 text-center md:text-left">Success Mindset Development&#58;</h1>
                            <p className="text-sm md:text-base px-6 text-justify"> Cultivate a mindset geared toward success and growth&#46; Develop the mental fortitude to turn setbacks into opportunities and achieve your goals&#46;


                            </p>
                        </div>
                        <div className="order-1 md:w-1/2">
                            <Image src={Success} className="w-64 md:w-72 lg:w-96 mx-auto" alt="#" />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ y: "10vw", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-4 md:flex md:items-center md:mx-10">
                        <div className="space-y-1 md:w-1/2">
                            <h1 className="px-6 josefin text-xl md:text-2xl font-semibold tracking-tight text-yellow-300 text-center md:text-left">Personal and Professional Growth&#58;</h1>
                            <p className="text-sm md:text-base px-6 text-justify">Enhance your skills&#44; build confidence&#44; and set and achieve meaningful goals in all areas of your life&#46;

                            </p>
                        </div>
                        <div className="md:w-1/2">
                            <Image src={Personal} className="w-64 md:w-72 lg:w-96 mx-auto" alt="#" />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ y: "10vw", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-4 md:flex md:items-center md:mx-10">
                        <div className="order-2 space-y-1 md:w-1/2">
                            <h1 className="px-6 josefin text-xl md:text-2xl font-semibold tracking-tight text-yellow-300 text-center md:text-left">Stress and Emotional Management&#58;</h1>
                            <p className="text-sm md:text-base px-6 text-justify"> Equip yourself with tools to manage stress&#44; handle emotional setbacks&#44; and maintain a positive outlook&#46;

                            </p>
                        </div>
                        <div className="order-1 md:w-1/2">
                            <Image src={Emotional} className="w-64 md:w-72 lg:w-96 mx-auto" alt="#" />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ y: "10vw", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-4 md:flex md:items-center md:mx-10">
                        <div className="order-1 space-y-1 md:w-1/2">
                            <h1 className="px-6 josefin text-xl md:text-2xl font-semibold tracking-tight text-yellow-300 text-center md:text-left">
                                Empowerment and Achievement&#58;</h1>
                            <p className="text-sm md:text-base px-6 text-justify">ransform your aspirations into reality by setting clear goals&#44; creating actionable plans&#44; and celebrating your progress along the way&#46;


                            </p>
                        </div>
                        <div className="order-2 md:w-1/2">
                            <Image src={Achievement} className="w-64 md:w-72 lg:w-96 mx-auto" alt="#" />
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="bg-fixed bg-cover bg-right-top bg-[url('../public/about/goldenbck.png')]">
                <svg className="rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><path fill="#101820ff" fill-opacity="1" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path></svg>
                <h1 className="text-center py-4 josefin text-lg md:text-xl font-semibold">Why <span className="great text-3xl md:text-5xl tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-yellow-100 to-yellow-400">Work</span> With Me&#63;</h1>
                <div className="space-y-5">
                    <p className="text-yellow-100 text-sm sm:text-base px-6 md:px-0 md:w-1/2 md:mx-auto md:text-center italic text-justify">My personal journey of overcoming obstacles has equipped me with unique insights and practical strategies that I&#39;m eager to share with you&#46; I&#39;m committed to helping you navigate your own challenges&#44; build resilience&#44; and achieve the success you envision&#46; My goal is to empower you with the tools and mindset necessary to transform difficulties into opportunities for growth&#46;
                    </p>
                    <div>
                        <Image src={shylla} className="w-52 mx-auto py-10" alt="#" />
                        {/* <Image src={shylla} className="absolute w-28 " alt="#" />
                    <Image src={shylla} className="absolute w-28" alt="#" />
                    <Image src={shylla} className="absolute w-28" alt="#" /> */}
                    </div>
                    <p className="text-sm sm:text-base  text-center px-5 md:px-0 md:w-2/5 md:mx-auto md:text-center">Let&#39;s embark on this empowering journey together&#46; Contact me today to start transforming your obstacles into stepping stones for success and achieving the life you dream of&#46;</p>
                    <Image src={arrow} className="w-28 md:w-36 mx-auto" alt="#" />
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><path fill="#101820ff" fill-opacity="1" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path></svg>
            </div>


            <div className="bg-fixed bg-center md:bg-left-top bg-cover bg-[url('../public/about/squarebg.png')] ">
                <svg className="rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><path fill="#101820ff" fill-opacity="1" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path></svg>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 1 }}
                    className="py-9 space-y-2 md:space-y-6">
                    <h1 className="text-center text-black font-semibold text-lg md:text-2xl">21-DaY</h1>
                    <h1 className="text-center text-black font-semibold great text-2xl tracking-widest md:text-5xl">Consistency Workshop</h1>
                    <p className="md:w-1/2 md:mx-auto text-center px-8 text-black  font-semibold josefin  md:text-lg">Turning Skills into Practice
                        Are you ready to transform your aspirations into consistent habits?
                    </p>
                    <p className="md:w-2/3 md:text-center md:mx-auto text-justify px-6 text-black text-sm md:text-base">
                        At <span className="text-base font-semibold italic md:text-lg">Surging Phoenix Enterprises</span>, we understand that practicing consistency is one of the most significant challenges in personal and professional growth. That&#39;s why we&#39;ve designed our 21-Day Consistency Workshop to help you turn your desired skills into daily practices, ensuring that you achieve your goals and maintain lasting progress.
                    </p>
                    <Image src={arrow} className="pt-3 w-28 md:w-36 mx-auto" alt="#" />
                </motion.div>

            </div>

            <div>
                <svg className="rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><path fill="#facc15" fill-opacity="1" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path></svg>
                <div className="container mx-auto">

                    <div className="py-4 space-y-5 lg:space-y-10">
                        <div>
                            <h1 className="text-center uppercase josefin font-semibold md:text-lg">About the</h1>
                            <h1 className="text-center great text-4xl tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-yellow-100 to-yellow-400 font-semibold md:text-6xl">Workshop</h1>
                        </div>
                        <Image src={workshop} className="w-72 md:w-96 lg:w-1/2 mx-auto" alt="#" />
                    </div>
                    <div>
                        <h1 className="font-extralight mb-3 text-center md:text-left md:py-8 md:px-20 md:text-xl">What You&#39;ll Achieve:</h1>
                        <div className="px-6 space-y-10 md:px-14">
                            <motion.div
                                initial={{ y: "20vw", opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                className="space-y-4 md:space-x-4 md:px-14 md:flex md:items-center">
                                <div

                                    className=" md:w-1/2 md:space-y-5">
                                    <h1 className="font-semibold text-lg md:text-xl">Develop <span className="great text-3xl tracking-widest text-cyan-300 md:text-4xl">Daily</span> Habits&#58;</h1>
                                    <p className="text-sm md:text-base">Learn how to integrate your chosen skill into your daily routine, transforming it from a mere aspiration into a consistent practice.
                                    </p>
                                </div>
                                <div className="md:w-1/2">

                                    <Image src={Daily} className="w-52 md:mx-auto md:w-60 mx-auto" alt="#" />
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ y: "20vw", opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                className="space-y-4 md:px-14 md:flex md:items-center">
                                <div className="order-2 md:w-1/2 md:space-y-5">
                                    <h1 className="font-semibold text-lg md:text-xl"><span className="great text-3xl tracking-widest text-yellow-300 md:text-4xl">Overcome</span> Procrastination&#58;</h1>
                                    <p className="text-sm md:text-base">Identify and address common barriers to consistency, such as procrastination and lack of motivation, with practical strategies.

                                    </p>
                                </div>
                                <Image src={Overcome} className="order-1 w-52 md:mx-auto md:w-60 mx-auto" alt="#" />

                            </motion.div>
                            <motion.div
                                initial={{ y: "20vw", opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                className="space-y-4 md:px-14 md:flex md:items-center">
                                <div className=" md:w-1/2 md:space-y-5">
                                    <h1 className="font-semibold text-lg md:text-xl">Build a <span className="great text-3xl tracking-widest text-pink-300 md:text-4xl">Routine</span>&#58;</h1>
                                    <p className="text-sm md:text-base">Create a personalized, manageable routine that incorporates your skill practice, making it an effortless part of your daily life.
                                    </p>
                                </div>
                                <Image src={Routine} className="w-96 md:mx-auto md:w-80 mx-auto" alt="#" />
                            </motion.div>
                            <motion.div
                                initial={{ y: "20vw", opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                className="space-y-4 md:px-14 md:flex md:items-center">
                                <div className="order-2 md:w-1/2 md:space-y-5">
                                    <h1 className="font-semibold text-lg md:text-xl"><span className="great text-3xl tracking-widest text-red-600 md:text-4xl">Track</span> and Measure Progress&#58;</h1>
                                    <p className="text-sm md:text-base">Use tools and techniques to track your progress, measure your achievements, and adjust your approach as needed.
                                    </p>
                                </div>
                                <Image src={Measure} className="order-1 w-52 md:mx-auto md:w-60 mx-auto" alt="#" />

                            </motion.div>
                            <motion.div
                                initial={{ y: "20vw", opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                className="space-y-4 md:px-14 md:flex md:items-center">
                                <div className=" md:w-1/2 md:space-y-5">
                                    <h1 className="font-semibold text-lg md:text-xl">Stay <span className="great text-3xl tracking-widest text-blue-300 md:text-4xl">Motivated</span>&#58;</h1>
                                    <p className="text-sm md:text-base">Receive ongoing support and encouragement to stay motivated and committed throughout the 21&#45;day journey.
                                    </p>
                                </div>
                                <Image src={Motivate} className="w-60 md:mx-auto md:w-60 mx-auto" alt="#" />

                            </motion.div>
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><path fill="#facc15" fill-opacity="1" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path></svg>
            </div>
            <div>
                <svg className="rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><path fill="#facc15" fill-opacity="1" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path></svg>
                <div className="conatiner mx-auto space-y-5" >
                    <div className="py-4">
                        <div>
                            <h1 className="text-center text-sm uppercase josefin font-semibold md:text-lg"> Why Choose This </h1>
                            <h1 className="text-center great text-4xl tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-yellow-100 to-yellow-400 font-semibold md:text-6xl">Workshop?</h1>
                        </div>
                    </div>

                    <div className="container mx-auto">
                        <div className="px-6 space-y-10 md:px-14">
                            <motion.div
                                initial={{ y: "20vw", opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                className="space-y-4 md:space-x-4 md:px-14 md:flex md:items-center">
                                <div className=" md:w-1/2 md:space-y-5">
                                    <h1 className="text-orange-200 font-semibold text-lg md:text-xl">Focused <span className="great text-orange-300 text-3xl tracking-widest md:text-4xl">Approach</span>&#58;</h1>
                                    <p className="text-sm md:text-base">Our 21-day format is specifically designed to help you establish and maintain consistency with dedicated, manageable steps.
                                    </p>
                                </div>
                                <div className="md:w-1/2">
                                    <Image src={Approach} className="w-52 md:mx-auto md:w-72 mx-auto" alt="#" />
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ y: "20vw", opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                className="space-y-4 md:space-x-4 md:px-14 md:flex md:items-center">
                                <div className="order-2  md:w-1/2 md:space-y-5">
                                    <h1 className="text-orange-300 font-semibold text-lg md:text-xl">Proven <span className="great text-orange-300 text-3xl tracking-widest md:text-4xl">Techniques</span>&#58;</h1>
                                    <p className="text-sm md:text-base">We use evidence-based methods to help you develop effective habits and overcome challenges related to consistency.

                                    </p>
                                </div>
                                <div className="order-1 md:w-1/2">

                                    <Image src={Techniques} className="w-52 md:mx-auto md:w-72 mx-auto" alt="#" />
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ y: "20vw", opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                className="space-y-4 md:space-x-4 md:px-14 md:flex md:items-center">
                                <div className=" md:w-1/2 md:space-y-5">
                                    <h1 className="text-orange-300 font-semibold text-lg md:text-xl">Supportive <span className="great text-orange-300 text-3xl tracking-widest md:text-4xl">Environment</span>&#58;</h1>
                                    <p className="text-sm md:text-base">Our workshop provides a supportive and motivating environment, ensuring you have the resources and encouragement needed to succeed.
                                    </p>
                                </div>
                                <div className="md:w-1/2">

                                    <Image src={Supportive} className="w-52 md:mx-auto md:w-72 mx-auto" alt="#" />
                                </div>
                            </motion.div>
                        </div>
                    </div>

                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><path fill="#facc15" fill-opacity="1" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path></svg>
            </div>
        </>
    )
}

