
import Image from "next/image"
import support from '@/public/objectives/support.jpg'
import challenge from '@/public/objectives/challenge.jpg'
import financial from '@/public/objectives/financial.jpg'
export default function objectives() {


    return (

        <>
            <section className="bg-cover bg-center bg-[url('../public/objectives/banner.jpg')] w-full h-44 sm:h-72 md:h-60">
                <div className="bg-gradient-to-r w-full h-44 sm:h-72 md:h-60 from-black/70 to-black/40">
                    <p className="sm:text-2xl text-white text-center josefin uppercase pt-14 sm:pt-32 tracking-widest md:pt-24 ">"Turning setbacks into success"</p>
                </div>
            </section>
            <div className="p-4 sm:p-6 border-b-2">
                <h1 className="caveat text-3xl sm:text-5xl text-center text-yellow-400 tracking-wider">"Surging Phoenix"</h1>
                <h1 className="text-center  text-lg sm:text-2xl font-bold uppercase tracking-wider">would likely focus on several key objectives:
                </h1>
            </div>
            <section className=" m-4 md:flex md:gap-5">
                <div className="mb-6 sm:mb-8 md:w-1/2">
                    <h1 className="h-16 border-yellow-100 border-4 border-b-0 rounded-full font-mono uppercase tracking-wide font-bold  flex items-center justify-center text-yellow-300 text-lg sm:text-4xl md:text-lg lg:text-xl">Student Employment</h1>
                    <div className="border-yellow-100 rounded-md border-2  p-3 sm:p-9 md:p-2 md:h-5/6">
                        <p className="text-center mb-3 sm:text-xl md:text-base ">Facilitating opportunities for students to gain meaningful employment, internships, or career development support.</p>
                        <Image src={support} className="flex mx-auto w-full h-32 sm:h-60 md:h-40 lg:h-52 opacity-90 object-cover" alt="" />
                    </div>
                </div>
                <div className="mb-6 sm:mb-8 md:w-1/2">
                    <h1 className="h-16 border-yellow-100 border-4 border-b-0 rounded-full font-mono uppercase tracking-wide font-bold  flex items-center justify-center text-yellow-300 text-lg sm:text-4xl md:text-lg lg:text-xl">Overcoming Failure</h1>
                    <div className="border-yellow-100 rounded-md border-2  p-3 sm:p-9 md:p-2 md:h-5/6">
                        <p className="text-center mb-3 sm:text-xl md:text-base ">Providing resources, mentorship, or programs that help individuals bounce back from setbacks, failures, or challenges in their academic or personal lives.

                        </p>
                        <Image src={challenge} className="flex mx-auto w-full h-32 sm:h-60 md:h-36 lg:h-52 opacity-90 object-cover" alt="" />
                    </div>
                </div>
                <div className="mb-6 sm:mb-8 md:w-1/2">
                    <h1 className="h-16 border-yellow-100 border-4 border-b-0 rounded-full font-mono uppercase tracking-wide font-bold  flex items-center justify-center text-yellow-300 text-lg sm:text-4xl md:text-lg lg:text-xl">Financial Independence</h1>
                    <div className="border-yellow-100 rounded-md border-2  p-3 sm:p-9 md:p-2 md:h-5/6">
                        <p className="text-center mb-3 sm:text-xl md:text-base">Equipping individuals with the skills, knowledge, and support needed to achieve financial stability and independence, possibly through financial literacy programs, job readiness training, or entrepreneurship initiatives.</p>
                        <Image src={financial} className="flex mx-auto w-full h-32 sm:h-60 md:h-28 lg:h-52 opacity-90 object-cover" alt="" />
                    </div>
                </div>

            </section>
        </>
    )
}