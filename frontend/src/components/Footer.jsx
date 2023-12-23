
export default function Footer() {
    return (
        <>
            <footer
                className="px-40 py-16 w-full bg-black text-white flex flex-col justify-evenly text-center gap-12 animate__animated animate__fadeIn">
                <div className="flex flex-row justify-evenly gap-12">
                    <div className="flex-col mr-20">
                        <h1 className="text-4xl pb-4 ">LOGO</h1>
                        <p className="font-normal text-xl text-gray-300">yahan per badiya si quote daldo</p>
                        <p>socials</p>
                    </div>
                    <div className="flex-col">
                        <h1 className="text-2xl font-medium pb-2">Services</h1>
                        <p className="font-normal text-xl text-gray-300">Bread</p>
                        <p className="font-normal text-xl text-gray-300">Butter</p>
                        <p className="font-normal text-xl text-gray-300">Meow?</p>
                    </div>
                    <div className="flex-col">
                        <h1 className="text-2xl font-medium pb-2">Company</h1>
                        <p className="font-normal text-xl text-gray-300">About</p>
                        <p className="font-normal text-xl text-gray-300">Meet the team</p>
                        <p className="font-normal text-xl text-gray-300">Sponsors</p>
                    </div>
                    <div className="flex-col">
                        <h1 className="text-2xl font-medium pb-2">Helpful Links</h1>
                        <p className="font-normal text-xl text-gray-300">Contact</p>
                        <p className="font-normal text-xl text-gray-300">FAQs</p>
                        <p className="font-normal text-xl text-gray-300">Live Chat</p>
                    </div>
                    <div className="flex-col">
                        <h1 className="text-2xl font-medium pb-2">Legal</h1>
                        <p className="font-normal text-xl text-gray-300">Accessibility</p>
                        <p className="font-normal text-xl text-gray-300">Refund Policy</p>
                        <p className="font-normal text-xl text-gray-300">Hiring Formalities</p>
                    </div>
                </div>
                <h4 className="text-xl text-gray-300">&copy; 2023. Clap Rural. All Rights Reserved</h4>
            </footer>
        </>
    )
}