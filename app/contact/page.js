

export default function Contact() {


    return (
        <section className="mt-10 md:flex">

            <div className="md:w-1/2">
                <h1 className="px-5 text-center text-lg text-yellow-400  sm:text-4xl josefin md:text-3xl lg:text-4xl">Send Us A Message&#44;
                    We Will Be In Touch</h1>
                <form className="mt-5 grid place-items-center ">
                    <input className="outline-none w-2/3 border-b-2  shadow-md   px-4 py-2 rounded-lg text-xs sm:py-3 sm:text-lg mb-5 md:text-sm md:py-2 lg:py-3 lg:text-base tracking-widest" type="text" placeholder="Name" />
                    <input className="outline-none w-2/3 border-b-2  shadow-md   px-4 py-2 rounded-lg text-xs sm:py-3 sm:text-lg mb-5 md:text-sm md:py-2 lg:py-3 lg:text-base tracking-widest" type="text" placeholder="Phone Number" />
                    <input className="outline-none w-2/3 border-b-2  shadow-md   px-4 py-2 rounded-lg text-xs sm:py-3 sm:text-lg mb-5 md:text-sm md:py-2 lg:py-3 lg:text-base tracking-widest" type="email" placeholder="Email" />
                    <textarea className="outline-none w-2/3 border-b-2  shadow-md   px-4 py-2 h-28 rounded-lg sm:py-3 sm:text-lg text-sm mb-5 md:text-sm md:py-2 lg:py-3 lg:text-base tracking-widest" type="text" placeholder="Message" />
                    <input type="submit" value="Submit" className="py-2 px-6 text-xs font-medium tracking-wide shadow-md cursor-pointer bg-yellow-400 text-black rounded sm:text-lg sm:py-3 sm:px-10 md:text-base md:py-2 lg:text-lg" />
                </form>
            </div>
            <div className="mt-5 bg-yellow-400 pt-16 rounded-t-full   md:rounded-l-full shadow-2xl   lg:mt-0 md:w-1/2 ">
                <h1 className="px-10 text-xl  text-black  font-semibold text-center sm:text-3xl   md:mt-10 lg:text-2xl">Don&apos;t be a stranger just say hello &#33;</h1>
                <p className="text-xs mt-2 px-5 text-black text-center sm:text-lg md:text-sm md:mt-10 lg:text-base lg:mt-3">Thank you for your interest in contacting us&#46;</p>



            </div>

        </section>
    )
}