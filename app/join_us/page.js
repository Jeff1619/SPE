


export default function Join() {

    return (
        <>
            <section className="mx-2 mt-20">
                <div className="py-6 h-maxmd:w-3/5 mx-auto border bg-yellow-400 rounded-xl">
                    <h1 className="text-center mb-6 text-2xl lg:text-4xl josefin text-black md:p-7 border-b-2 border-black">Request a <span className="italic text-yellow-700">QUOTE</span></h1>
                    <form>
                        <div className="md:flex px-4 md:justify-around md:py-5">
                            <input type="text" className="w-full px-4 py-3 mb-3 md:w-80 tracking-widest flex mx-auto rounded-md md:px-7 bg-black md:py-3" placeholder="Enter your Name" required />
                            <input type="number" className="w-full px-4 py-3 mb-3 md:w-80 tracking-widest flex mx-auto rounded-md md:px-7 bg-black md:py-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" placeholder="Enter your Mobile No" required />
                        </div>
                        <div className="md:flex px-4 md:justify-around md:py-5">
                            <input type="email" className="md:w-80 w-full px-4 py-3 mb-3 tracking-widest flex mx-auto rounded-md md:px-7 bg-black md:py-3" placeholder="Enter your Email" required />
                            <select className="w-full px-4 py-3 mb-3 md:w-80 tracking-widest rounded-md md:px-7 bg-black md:py-3">
                                <option>Select Program</option>
                                <option value="Personal Development">Personal Development</option>
                                <option value="Professional Development">Professional Development</option>
                            </select>
                        </div>

                        <div className="md:py-8">
                            <input type="file" className="w-52 md:w-80 tracking-widest  rounded-md md:px-4 bg-black md:py-3  fileUpload text-white flex mx-auto" required />
                            <input type="submit" value="Submit" className=" tracking-widest rounded-md md:px-8 bg-green-500 cursor-pointer font-semibold md:py-3 flex mx-auto  text-white mt-8" />
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}