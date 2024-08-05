'use client'

import { useState } from "react"


const Form = () => {


    const [active, setActive] = useState(false)

    const handleToggle = () => {
        setActive(!active)
    }

    return (
        <div>
            <button onClick={() => handleToggle()} className='sm:hidden active:bg-yellow-500 uppercase flex items-center justify-center text-sm  fixed py-1.5 z-10 bottom-0 w-full bg-yellow-400 text-black font-medium'>
                <span className='pr-2'>Apply Now</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
            </button>
            <button onClick={() => handleToggle()} className='hidden sm:block  sm:p-5 fixed z-10 rounded-full  sm:bottom-20 md:bottom-44 lg:bottom-20 left-4  md:left-5 bg-yellow-400'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7 sm:size-10 text-black">
                    <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                </svg>

            </button>

            {
                active && (
                    <section className="container mx-auto flex justify-center  shadow-xl">
                        <div className="border fixed z-20 py-14 sm:py-20 px-3 sm:px-10 bg-slate-50 mx-4 flex flex-col gap-5 sm:gap-6 rounded-lg ">
                            <button onClick={() => handleToggle()}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 sm:size-8 text-black absolute top-3 right-3 ease active:text-yellow-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>

                            </button>
                            <h1 className="absolute top-7 sm:top-10 text-black pl-5 josefin text-xl sm:text-2xl">Looking For &#44;</h1>
                            <a href="" className="bg-yellow-400 text-black py-2 sm:py-4 px-3 sm:px-6 text-center flex rounded-lg items-center justify-between shadow-md josefin text-lg sm:text-xl group ease duration-100 active:bg-black"><span className="group-active:text-yellow-400">Guidance For School &#47; College Students</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 group-active:text-yellow-400">
                                <path fillRule="evenodd" d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                                <path fillRule="evenodd" d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                            </svg>
                            </a>
                            <h1 className="text-black text-center">OR</h1>
                            <a href="" className="bg-yellow-400 text-black py-2 sm:py-4 px-3 sm:px-6 text-center flex rounded-lg items-center justify-between shadow-md josefin text-lg sm:text-xl group ease duration-100 active:bg-black"><span className="group-active:text-yellow-400">Counselling &#47; Corporate training</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 group-active:text-yellow-400">
                                <path fillRule="evenodd" d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                                <path fillRule="evenodd" d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                            </svg>
                            </a>
                        </div>
                    </section>
                )
            }

        </div>

    )
}

export default Form