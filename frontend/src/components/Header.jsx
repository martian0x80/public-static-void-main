
export default function Header() {

    return (
        <>
            <header
                className="bg-white z-10 w-full px-40 py-4 top-0 flex flex-row justify-evenly sticky max-xl:px-20 max-lg:px-8 max-md:justify-between animate__animated animate__fadeInDown">
                <div className="basis-1/3 max-md:basis-0">
                    <h1 className="py-1 text-black font-extrabold font-sans text-4xl max-sm:text-3xl max-md:py-0">Desi
                        Gig</h1>
                </div>
                <div className="basis-2/3 flex flex-row justify-end gap-10 max-md:hidden">
                    <a href="/home"
                       className="cursor-pointer py-2 text-black font-semibold font-sans text-3xl nav-item">Search Jobs</a>
                    <a href="#about"
                       className="cursor-pointer py-2 text-black font-semibold font-sans text-3xl nav-item">About</a>
                    <a href="#services"
                       className="cursor-pointer py-2 text-black font-semibold font-sans text-3xl nav-item">Services</a>
                    <a href="/signin"
                       className="cursor-pointer rounded px-6 py-2 bg-black text-white font-semibold font-sans text-2xl hover:bg-gray-800 transition duration-300 nav-item">Login</a>
                </div>
            </header>
        </>
    )
}