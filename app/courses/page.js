
import Image from "next/image"
import support from '@/public/objectives/support.jpg'
import challenge from '@/public/objectives/challenge.jpg'
import financial from '@/public/objectives/financial.jpg'
export default function Courses() {


    return (

        <>
            <section className="bg-cover bg-center bg-[url('../public/objectives/banner.jpg')] w-full h-44 sm:h-72 md:h-60">
                <div className="bg-gradient-to-r w-full h-44 sm:h-72 md:h-60 from-black/70 to-black/40">
                    <p className="sm:text-2xl text-white text-center josefin uppercase pt-14 sm:pt-32 tracking-widest md:pt-24 ">&quot;Turning setbacks into success&quot;</p>
                </div>
            </section>
            <div className="p-4 sm:p-6 border-b-2">
                <h1 className="caveat text-3xl sm:text-5xl text-center text-yellow-400 tracking-wider">&quot;Surging Phoenix&quot;</h1>
                <h1 className="text-center  text-lg sm:text-2xl font-bold uppercase tracking-wider">would likely focus on several key objectives&#58;
                </h1>
            </div>

            <div className="mx-4 sm:mx-8 my-5 sm:my-8">
                <div className="md:flex md:justify-center md:mb-10 md:gap-7">
                    <div className="md:w-1/2 mb-7 md:mb-0">
                        <div className="border border-yellow-100 rounded-lg">
                            <h1 className="border-y-4 border-yellow-300 text-yellow-400 rounded-lg  text-center p-2 text-xl font-semibold sm:p-4 md:p-4 sm:text-3xl md:text-3xl josefin">Student Employment</h1>

                            <p className="text-justify p-3 sm:p-5 italic md:mb-6 lg:mb-0  sm:text-xl md:text-base">Facilitating opportunities for students to gain meaningful employment&#44; internships&#44; or career development support&#46;</p>
                            <div>


                                <Image src={support} className="w-full h-40 rounded-b-lg sm:h-56 lg:h-72 object-cover object-bottom" alt="#" />

                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 mb-7 md:mb-0">
                        <div className=" border border-yellow-100 rounded-lg">
                            <h1 className="border-y-4 border-yellow-300 text-yellow-400 rounded-lg  text-center p-2 text-xl font-semibold sm:p-4 md:p-4 sm:text-3xl md:text-3xl josefin">Overcoming Failure</h1>

                            <p className="text-justify p-3 sm:p-5 italic  sm:text-xl md:text-base">Providing resources&#44; mentorship&#44; or programs that help individuals bounce back from setbacks&#44; failures&#44; or challenges in their academic or personal lives&#46;</p>
                            <div>


                                <Image src={challenge} className="w-full h-40 rounded-b-lg sm:h-56 lg:h-72 object-cover object-bottom" alt="#" />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-3/5 md:mx-auto mb-7 md:mb-0">
                    <div className=" border border-yellow-100 rounded-lg">
                        <h1 className="border-y-4 border-yellow-300 text-yellow-400 rounded-lg  text-center p-2 text-xl font-semibold sm:p-4 md:p-4 sm:text-3xl md:text-3xl josefin">Financial Independence</h1>

                        <p className="text-justify p-3 sm:p-5 italic  sm:text-xl md:text-base">Equipping individuals with the skills&#44; knowledge&#44; and support needed to achieve financial stability and independence&#44; possibly through financial literacy programs&#44; job readiness training&#44; or entrepreneurship initiatives&#46;</p>
                        <div>


                            <Image src={financial} className="w-full h-40 rounded-b-lg sm:h-56 lg:h-72 object-cover object-bottom" alt="#" />

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}