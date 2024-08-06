'use client'

import { motion } from "framer-motion";



const Form = ({ handleToggle }: { handleToggle: () => void }) => {



    return (
        <div>

            <section className="container mx-auto  flex justify-center ">
                <motion.div
                    initial={{ y: '-10vw', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2, }}
                    className=" fixed z-20 top-52 py-14 sm:py-20 px-3 sm:px-10 bg-slate-50 mx-4 flex flex-col gap-5 sm:gap-6 rounded-lg  ">
                    <button onClick={handleToggle}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 sm:size-8 text-black absolute top-3 right-3 ease active:text-yellow-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>

                    </button>
                    <h1 className="absolute top-7 sm:top-10 text-black pl-5 josefin text-xl sm:text-2xl">Looking For &#44;</h1>
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
}

export default Form
