"use client"


import Image from "next/image"
import graph from '@/public/about/graph.png'
import vision from '@/public/about/vision.png'
import belive from '@/public/about/belive.png'
import mission from '@/public/about/mission.png'
import thinking from '@/public/about/thinking.png'
import people from '@/public/about/people.jpeg'

import { motion } from "framer-motion"

export default function About() {


    return (
        <>

            <section>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: "tween", duration: 1 }}

                    className="bg-center bg-cover bg-[url('../public/about/banner.jpg')] h-max pb-20 md:pb-28 lg:h-1/2  rounded-b-full border-b-8  border-yellow-400 md:rounded-b-full">

                    <div className="sm:px-16 md:px-12 lg:px-28">

                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}

                            className="pt-10  text-center uppercase  text-yellow-500 text-xl sm:text-4xl md:text-5xl tracking-widest orbitron">surging Phoenix</motion.h1>
                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}

                            className=" sm:pt-5 md:pt-5 text-center font-bold text-lg sm:text-3xl md:text-3xl tracking-widest uppercase orbitron text-slate-50">Enterprise</motion.h2>
                        <motion.p

                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}

                            className="text-slate-50 text-center px-2 sm:px-5 md:px-16 lg:px-20  text-xs md:text-lg  mt-5 md:mt-10 font-medium">Welcome to <span className="text-yellow-400 font-bold italic text-sm md:text-lg">Surging Phoenix Enterprises</span>, a dynamic and innovative company dedicated to unlocking the potential within every individual. At Surging Phoenix, we specialise in comprehensive personality development programs designed for all ages and stages of life. Our mission is to empower individuals to achieve their personal and professional goals through tailored training and development initiatives.
                        </motion.p>
                    </div>
                </motion.div>
                <div>
                    <div className="px-5 sm:px-12 md:px-12 lg:px-28">
                        <div className="grid grid-cols-1 gap-10 md:gap-0 md:grid-cols-3 place-items-center pt-8">
                            <motion.div

                                initial={{ x: '-10vw', opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.4, type: "tween", duration: 1 }}


                                className="bg-blue-100 w-64 sm:w-96 md:w-5/6 lg:w-5/6 h-48 sm:h-80 md:h-64 lg:h-80 border-0 border-b-8 border-blue-300 text-center p-4 lg:pb-6 flex flex-col justify-center shadow-xl rounded-lg">

                                <Image src={vision} className=" w-36 sm:w-56 md:w-52 lg:w-52 flex mx-auto" alt="vision.logo" />
                                <h1 className="text-lg md:text-xl lg:text-2xl text-blue-400 font-light uppercase">Our Vision</h1>
                                <p className="pt-2 text-xs md:text-sm lg:text-lg text-blue-400">Inspire a Billion
                                    by Leading with Wisdom.</p>


                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4, duration: 1 }}

                                className="bg-green-100 w-64 sm:w-96 md:w-5/6 lg:w-5/6 h-48 sm:h-80 md:h-64 lg:h-80 border-0 border-b-8  border-green-500 text-center px-4 pb-4 lg:pb-6 flex flex-col justify-center shadow-xl rounded-lg">

                                <Image src={belive} className="w-20 sm:w-36 md:w-28 lg:w-32 flex mx-auto" alt="belive.logo" />
                                <h1 className="text-lg md:text-xl lg:text-2xl text-green-600 font-light uppercase">Our Beliefs</h1>
                                <p className="pt-2 text-xs md:text-sm lg:text-lg text-green-600">
                                    We believe that we are all divided by boundaries but are United by Wisdom.
                                </p>

                            </motion.div>
                            <motion.div

                                initial={{ x: '5vw', opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.4, type: "tween", duration: 1 }}

                                className="bg-red-100 w-64 sm:w-96 md:w-5/6 lg:w-5/6 h-48 sm:h-80 md:h-64 lg:h-80 border-0 border-b-8  border-red-500 text-center px-4 pb-4 lg:pb-6 flex flex-col justify-center shadow-xl rounded-lg">
                                <Image src={mission} className="w-24 sm:w-44 md:w-28 lg:w-36 flex mx-auto" alt="misson.logo" />
                                <h1 className="text-lg md:text-xl lg:text-2xl text-red-600 font-light uppercase">Our Mission</h1>
                                <p className="pt-2 text-xs md:text-sm lg:text-lg text-red-600">Co-Creating Leadership and Wellbeing Journeys for Individuals & Organizations.</p>
                            </motion.div>
                        </div>
                    </div>
                </div>

            </section>

            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}

                className="bg-yellow-400 h-max mt-10 pb-10 pt-10 mx-5 sm:px-10 lg:px-20 rounded-3xl">
                <div className="  md:flex">
                    <div className=" md:w-1/2">
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8  w-52 text-black">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
                            </svg>
                            <p className="pr-3 text-black md:pr-0 text-xs sm:text-base lg:text-lg text-center mt-5">
                                Our services extend beyond personal growth. We also provide expert placement and recruiting services to help businesses and job seekers find their perfect match. By combining our expertise in personality development with strategic recruitment solutions, <span className="text-xs md:text-lg lg:text-xl font-semibold italic">Surging Phoenix Enterprises</span> is your trusted partner in building a brighter future.
                            </p>
                        </div>
                    </div>
                    <div className="md:flex md:items-center md:w-1/2">
                        <Image src={graph} className="opacity-65 mx-auto w-2/3" alt="" />
                    </div>

                </div>

            </motion.section>


            <section className="mt-10 px-5 ">
                <motion.h1
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.1 }}
                    className="text-sm sm:text-3xl md:text-4xl text-center   tracking-wide uppercase josefin text-slate-50">why are we not successful in</motion.h1>
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
                        <Image src={thinking} className=" absolute m-auto left-0 right-0 -z-10 opacity-90" alt="?" />
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.11, duration: 0.2 }}
                        className=" md:w-96 mx-auto rounded-full shadow-lg text-center md:pt-4 md:pb-4  md:text-base mt-5 font-sans  font-medium tracking-wide border-b-4 text-white">Procrastination and Lack of Motivation</motion.div>
                </div>



            </section>

            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="border-yellow-400 border-2 h-max mt-10 pb-10 pt-10 mx-5 sm:px-10 lg:px-20 rounded-3xl ">
                <div className=" md:flex md:items-center">
                    <div className="md:w-1/2">


                        <p className="pr-3 md:pr-0 text-yellow-400 text-xs sm:text-base lg:text-lg text-center mt-5">
                            At <span className="text-xs md:text-lg lg:text-xl font-semibold italic">Surging Phoenix Enterprises</span>, we understand these challenges and are committed to providing the support, guidance, and resources necessary to overcome them. Our personalised programs are designed to help individuals navigate these obstacles and achieve their full potential.
                        </p>

                    </div>
                    <div className="md:flex md:items-center md:w-1/2">
                        <Image src={people} className=" pt-6 md:pt-0 mx-auto w-64 sm:w-9/12 md:w-80 lg:w-11/12 opacity-95" alt="achieve.png" />
                    </div>

                </div>
            </motion.section>

            <motion.div
                initial={{ x: '-10vw', opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1, type: 'tween', stiffness: 120, duration: 1 }}
                className="mt-10 mb-10 px-5">
                <p className="text-center text-white caveat text-xl sm:text-2xl lg:text-3xl font-semibold border-b-4 pb-5 border-black tracking-wide rounded-lg">Join us on a journey of transformation and success. Discover the Surging Phoenix difference today!</p>
            </motion.div>

        </>
    )
}

