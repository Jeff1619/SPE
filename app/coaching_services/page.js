"use client"

import Image from "next/image"
import personal from '@/public/coaching/personal.png'
import career from '@/public/coaching/career.png'
import life from '@/public/coaching/life.png'
import time from '@/public/coaching/timeAndPro.png'
import oneOnone from '@/public/coaching/oneOnone.png'
import phoenix from '@/public/coaching/phoenix.png'
import age6 from '@/public/coaching/children.jpg'
import Icon19 from '@/public/coaching/19icon.png'
import age20 from '@/public/coaching/age20.jpg'
import age19 from '@/public/coaching/age19grnd.jpg'
import age31 from '@/public/coaching/age31.jpg'
import parent from '@/public/coaching/parent.jpg'
import phoenix2 from '@/public/coaching/phoenix2.png'
import goldflower from '@/public/coaching/goldflower.png'
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
                <div className="mb-10 md:mb-12">
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

            <div className="conatiner mx-auto ">
                <div className="bg-yellow-400 overflow-hidden">
                    <svg className="rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><path fill="#101820ff" fill-opacity="1" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path></svg>
                    <div className="py-5">
                        <h1 className="text-black px-4 text-center font-semibold  md:text-lg space-x-1 md:space-x-4"><span className="great text-3xl md:text-5xl tracking-widest">Guidance</span> <span>and</span> <span className="great text-3xl md:text-5xl tracking-widest">Coaching</span></h1>
                        <h1 className="text-black font-semibold text-center md:text-lg">Services</h1>
                        <div className="mt-4 md:mt-5 lg:mt-8">
                            <p className="px-4 md:px-0 text-sm md:text-base text-justify md:text-center md:w-1/2 md:mx-auto text-black">
                                At <span className="italic font-sans font-medium">Surging Phoenix Enterprises</span>&#44; we understand that guidance needs to be age&#45;appropriate and developmentally relevant&#46; Our coaching services are designed to support individuals at every stage of life&#44; from childhood through adulthood&#46; Here&#39;s how we cater to different age groups&#46;

                            </p>
                            <Image src={phoenix} className="mx-auto w-14 mt-3" alt="#" />
                        </div>
                    </div>

                </div>

            </div>

            <div className="md:bg-cover md:bg-left-top bg-opacity-90 bg-fixed bg-[url('../public/coaching/age6grnd.png')]">
                <svg className="rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><path fill="#facc15" fill-opacity="1" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path></svg>
                <div className="container mx-auto">
                    <div className="py-4">
                        <h1 className="text-center font-sans font-medium text-xs md:text-lg text-yellow-100">Guidance for <span className="great text-3xl md:text-5xl lg:text-6xl tracking-widest  font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-100 to-yellow-400">Children</span></h1>
                        <h1 className="text-center font-sans font-medium text-yellow-100">&#40;Ages 6-12&#41;</h1>
                        <p className="my-6 text-sm md:text-base md:my-10 text-justify px-5 md:px-0 md:w-2/3 md:text-center md:mx-auto text-yellow-50"><span className="josefin text-lg md:text-xl font-semibold italic">Social Skills Development:</span> Teach children essential social skills, such as communication, empathy, and teamwork, to help them build positive relationships with peers and adults.
                            <span className="josefin text-lg md:text-xl font-semibold italic">Confidence Building:</span> Provide activities and exercises to boost self-esteem and encourage a positive self-image.
                            <span className="josefin text-lg md:text-xl font-semibold italic">Goal Setting and Achievement:</span> Introduce age-appropriate goal-setting techniques and help children develop a sense of accomplishment through small, manageable objectives.
                            <span className="josefin text-lg md:text-xl font-semibold italic">Study Skills and Organization:</span> Help children develop effective study habits, organizational skills, and time management strategies to support their academic success.
                            <span className="josefin text-lg md:text-xl font-semibold italic">Emotional Regulation:</span> Teach children strategies for managing emotions and dealing with stress in a healthy way.
                        </p>
                        <Image src={age6} className="w-64 md:h-60 lg:h-80 object-cover object-top md:w-1/2  mx-auto" alt="#" />
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><path fill="#facc15" fill-opacity="1" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path></svg>
            </div>


            <div className="md:bg-cover md:bg-left-top bg-opacity-90 bg-fixed bg-[url('../public/coaching/after20backgrnd.png')]">
                <svg className="rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><path fill="#facc15" fill-opacity="1" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path></svg>
                <div className="container mx-auto">
                    <div className="py-4">
                        <h1 className="text-center font-sans font-medium text-xs md:text-lg text-yellow-100">Guidance for <span className="great text-3xl md:text-5xl lg:text-6xl tracking-widest  font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-100 to-yellow-400">Teens</span></h1>
                        <h1 className="text-center font-sans font-medium text-yellow-100">&#40;Ages 13-19&#41;</h1>
                        <p className="my-6 text-sm md:text-base md:my-10 text-justify px-5 md:px-0 md:w-2/3 md:text-center md:mx-auto text-yellow-50"><span className="josefin text-lg md:text-xl font-semibold italic">
                            Academic and Career Planning:
                        </span>
                            Assist teens in exploring career interests, setting academic goals, and preparing for college or vocational training. <span className="josefin text-lg md:text-xl font-semibold italic">Self-Discovery and Identity:</span>


                            Support teens in understanding their values, strengths, and interests as they develop their personal identity.
                            <span className="josefin text-lg md:text-xl font-semibold italic">Stress and Anxiety Management:</span> Provide tools and techniques to manage academic pressures, social stressors, and anxiety.
                            <span className="josefin text-lg md:text-xl font-semibold italic">Healthy Relationships:</span> Educate teens about building healthy relationships, effective communication, and resolving conflicts.
                            <span className="josefin text-lg md:text-xl font-semibold italic">Life Skills Development:</span> Focus on practical life skills such as financial literacy, decision-making, and problem-solving.

                        </p>
                        <Image src={age19} className="w-64 md:h-60 lg:h-80 object-cover object-top md:w-1/2  mx-auto" alt="#" />
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><path fill="#facc15" fill-opacity="1" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path></svg>

            </div>


            <div className="md:bg-cover md:bg-left-top bg-opacity-90 bg-fixed bg-[url('../public/coaching/age6grnd.png')]">
                <svg className="rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><path fill="#facc15" fill-opacity="1" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path></svg>
                <div className="container mx-auto">
                    <div className="py-4">
                        <h1 className="text-center font-sans font-medium text-xs md:text-lg text-yellow-100">Guidance for
                            <span className="great text-3xl md:text-5xl lg:text-6xl tracking-widest  font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-100 to-yellow-400">Young Adults</span></h1>
                        <h1 className="text-center font-sans font-medium text-yellow-100">&#40;Ages 20-30&#41;</h1>
                        <p className="my-6 text-sm md:text-base md:my-10 text-justify px-5 md:px-0 md:w-2/3 md:text-center md:mx-auto text-yellow-50"><span className="josefin text-lg md:text-xl font-semibold italic">Career Development:</span> Offer guidance on career planning, job search strategies, and professional development to help young adults navigate the early stages of their careers.
                            <span className="josefin text-lg md:text-xl font-semibold italic">Personal Growth:</span> Support personal development through goal setting, self-improvement, and enhancing life skills.
                            <span className="josefin text-lg md:text-xl font-semibold italic">Work-Life Balance:</span> Help young adults find a balance between their personal and professional lives, and manage stress effectively.
                            <span className="josefin text-lg md:text-xl font-semibold italic">Relationship Building:</span> Provide insights and strategies for building and maintaining meaningful relationships, including romantic, familial, and professional connections.
                            <span className="josefin text-lg md:text-xl font-semibold italic">Transition Support: </span>Assist with life transitions such as moving out, starting a new job, or pursuing further education.
                        </p>
                        <Image src={age20} className="w-64 md:h-60 lg:h-80 object-cover object-top md:w-1/2  mx-auto" alt="#" />
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><path fill="#facc15" fill-opacity="1" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path></svg>
            </div>

            <div className="md:bg-cover md:bg-left-top bg-opacity-90 bg-fixed bg-[url('../public/coaching/after20backgrnd.png')]">
                <svg className="rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><path fill="#facc15" fill-opacity="1" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path></svg>
                <div className="container mx-auto">
                    <div className="py-4">
                        <h1 className="text-center font-sans font-medium text-xs md:text-lg text-yellow-100">Guidance for
                            <span className="great text-3xl md:text-5xl lg:text-6xl tracking-widest  font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-100 to-yellow-400">Adults</span></h1>
                        <h1 className="text-center font-sans font-medium text-yellow-100">&#40;Ages 31&#43;&#41;</h1>
                        <p className="my-6 text-sm md:text-base md:my-10 text-justify px-5 md:px-0 md:w-2/3 md:text-center md:mx-auto text-yellow-50"><span className="josefin text-lg md:text-xl font-semibold italic">Career Advancement:</span> Offer strategies for career growth, leadership development, and achieving professional goals.
                            <span className="josefin text-lg md:text-xl font-semibold italic">Personal and Professional Balance:</span> Support adults in managing their time, achieving work-life balance, and prioritizing personal well-being.
                            <span className="josefin text-lg md:text-xl font-semibold italic">Health and Wellness:</span> Provide guidance on maintaining physical, mental, and emotional health, and developing sustainable wellness practices.
                            <span className="josefin text-lg md:text-xl font-semibold italic">Life Transitions:</span> Assist with navigating major life changes such as starting a family, changing careers, or approaching retirement.
                            <span className="josefin text-lg md:text-xl font-semibold italic">Financial Planning:</span> Offer advice on financial management, budgeting, and planning for future financial goals.

                        </p>
                        <Image src={age31} className="w-64 md:h-60 lg:h-80 object-cover object-top md:w-1/2  mx-auto" alt="#" />
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><path fill="#facc15" fill-opacity="1" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path></svg>
            </div>

            <div className="md:bg-cover md:bg-left-top bg-opacity-90 bg-fixed bg-[url('../public/coaching/age6grnd.png')]">
                <svg className="rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><path fill="#facc15" fill-opacity="1" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path></svg>
                <div className="container mx-auto">
                    <div className="py-4">
                        <h1 className="text-center font-sans font-medium text-xs md:text-lg text-yellow-100 space-x-3 md:space-x-5">
                            <span className="great text-3xl md:text-5xl lg:text-6xl tracking-widest  font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-100 to-yellow-400">Family</span><span>and</span><span className="great text-3xl md:text-5xl lg:text-6xl tracking-widest  font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-100 to-yellow-400 ">Parent</span></h1>
                        <h1 className="text-center font-sans font-medium text-xs md:text-lg text-yellow-100 mb-2">Coaching</h1>

                        <p className="my-6 md:my-10 text-sm md:text-base text-justify px-5 md:px-0 md:w-2/3 md:text-center md:mx-auto text-yellow-50">
                            <span className="josefin text-lg md:text-xl font-semibold italic">Parenting Support:</span> Provide guidance on effective parenting strategies, communication with children, and fostering a positive family environment.
                            <span className="josefin text-lg md:text-xl font-semibold italic">Family Dynamics:</span> Assist families in improving communication, resolving conflicts, and strengthening family bonds.
                            <span className="josefin text-lg md:text-xl font-semibold italic">Educational Support:</span> Help parents support their children's academic and developmental needs through effective strategies and resources.


                        </p>
                        <Image src={parent} className="w-64 md:h-60 lg:h-80 object-cover object-top md:w-1/2  mx-auto" alt="#" />
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><path fill="#facc15" fill-opacity="1" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path></svg>
            </div>

            <div>
                <svg className="rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><path fill="#facc15" fill-opacity="1" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path></svg>
            </div>
            <div className="space-y-7 my-5 md:my-0 md:mb-10">
                <Image src={phoenix2} className="w-24 md:w-32 mx-auto" alt="#" />
                <p className="px-6 md:px-0 md:w-1/2 md:mx-auto text-center text-yellow-50 text-sm md:text-base">At <span className="animate-pulse font-semibold">Surging Phoenix Enterprises</span>, we are dedicated to providing targeted guidance that meets the needs of individuals at every stage of life. Whether you’re a child learning essential skills, a teen navigating adolescence, a young adult establishing your path, or an adult managing life’s complexities, our coaching services are designed to support and empower you. Contact us to explore how we can help you or your family achieve growth and success.</p>
                <Image src={goldflower} className="w-14 md:w-20 mx-auto" alt="#" />
            </div>
        </>
    )
}


