
export default function Index() {

    return (
        <>
            <main>
                <div id="home"
                     className="px-40 py-36 flex flex-row justify-evenly gap-12 max-xl:flex-col max-xl:text-center max-xl:items-center max-xl:gap-12 max-xl:py-20 max-xl:px-20 max-sm:px-8 max-sm:py-8 max-sm:gap-4 animate__animated animate__fadeInLeft">
                    <div>
                        <h1 className="pt-4 text-black font-bold font-sans text-6xl max-sm:text-5xl">Poverty Go
                            Yeet</h1>
                        <h2 className="py-2 text-black font-semibold font-sans text-4xl max-sm:text-4xl"></h2>
                        <p className="py-3 text-gray-600 font-normal font-sans text-3xl max-sm:text-xl">Empowering lives
                            through work, <span className="font-medium text-indigo-700">DesiGig</span> is not just a
                            platform; it's a movement. We bridge the gap for those below the poverty line, offering not
                            just jobs but a pathway to self-discovery, skill enhancement, and community support. Connect
                            with dignity, thrive with purpose, and be part of a transformative journey toward
                            sustainable livelihoods.</p>
                    </div>
                    <img className="w-96 img-animation animate__animated animate__fadeInRight"
                         src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1696852847761-574450.jpeg"/>
                </div>
            </main>
            <section id="about"
                     className="bg-black px-40 py-24 my-12 flex flex-col justify-evenly gap-3 text-center shadow-2xl max-xl:px-20 max-sm:px-8 max-md:py-16 animate__animated animate__fadeIn">
                <h1 className="text-white font-bold font-sans text-6xl max-sm:text-4xl">About</h1>
                <p className="py-5 text-gray-300 font-sans text-3xl max-sm:text-xl">At DesiGig, we believe in
                    transforming lives through meaningful employment. Dedicated to uplifting individuals below the
                    poverty line, we provide accessible and dignified job opportunities. Our platform connects skilled
                    workers with a range of low-level jobs, fostering economic empowerment and community
                    development.</p>
            </section>
            <section id="services"
                     className="px-40 my-24 flex flex-col justify-evenly text-center max-xl:px-20 max-sm:px-8 max-md:mt-8 animate__animated animate__fadeIn">
                <h1 className="text-black font-bold font-sans text-6xl max-sm:text-4xl">What we offer ?</h1>
                <p className="py-5 text-gray-600 font-normal font-sans text-left text-3xl max-sm:text-xl"><br/>
                    🛠️ <b>Diverse Job Opportunities:</b> Explore a variety of low-level jobs tailored to your skills,
                    ranging from domestic services to basic technical tasks.
                    <br/>
                    💼 <b>Skill Enhancement Programs:</b> Elevate your capabilities with our training programs designed
                    to enhance your skills and increase your employability.
                    <br/>
                    🤝 <b>Community Support:</b> Join a supportive community where individuals below the poverty line
                    come together, share experiences, and uplift one another.
                    <br/>
                    💸 <b>Fair Compensation:</b> We believe in fair pay for honest work. Receive competitive compensation
                    for your contributions to ensure financial stability.
                    <br/>
                    🌐 <b>Access to Resources:</b> Benefit from resources and information that can help you navigate your
                    employment journey and improve your overall well-being.
                    <br/><br/>
                    Join ClapRural today and embark on a journey towards empowerment and sustainable livelihoods.</p>
                <div
                    className="py-5 flex flex-row justify-evenly items-center max-xl:gap-12 max-lg:flex-col max-lg:gap-0">
                    <div
                        className="card overflow-hidden border-2 border-solid rounded border-black mx-6 shadow-2xl animate__animated animate__fadeIn">
                        <img className="w-60 img-animation"
                             src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1652172643970-9ad67b.png"/>
                        <h3 className="text-2xl my-1 font-semibold font-sans text-black">WAP</h3>
                        <p className="text-xl mb-2 font-normal font-sans text-gray-600">bread itni badiya hai</p>
                    </div>
                    <div
                        className="card overflow-hidden border-2 border-solid rounded border-black mx-6 shadow-2xl animate__animated animate__fadeIn">
                        <img className="w-60 img-animation"
                             src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1701149688871-2980d1.jpeg"/>
                        <h3 className="text-2xl my-1 font-semibold font-sans text-black">Switch</h3>
                        <p className="text-xl mb-2 font-normal font-sans text-gray-600">bread itni badiya hai</p>
                    </div>
                    <div
                        className="card overflow-hidden border-2 border-solid rounded border-black mx-6 shadow-2xl animate__animated animate__fadeIn">
                        <img className="w-60 img-animation"
                             src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1653983252697-ae30db.png"/>
                        <h3 className="text-2xl my-1 font-semibold font-sans text-black">Picasso</h3>
                        <p className="text-xl mb-2 font-normal font-sans text-gray-600">bread itni badiya hai</p>
                    </div>
                    <div
                        className="card overflow-hidden border-2 border-solid rounded border-black mx-6 shadow-2xl animate__animated animate__fadeIn">
                        <img className="w-60 img-animation"
                             src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1653892249137-8848bb.png"/>
                        <h3 className="text-2xl my-1 font-semibold font-sans text-black">Wood</h3>
                        <p className="text-xl mb-2 font-normal font-sans text-gray-600">bread itni badiya hai</p>
                    </div>
                </div>
            </section>
            <section id="featured-jobs"
                     className="px-40 my-24 flex flex-col justify-evenly text-center max-xl:px-20 max-sm:px-8 max-md:mt-8 animate__animated animate__fadeIn">
                <h1 className="text-black font-bold font-sans text-6xl max-sm:text-4xl">Featured Jobs</h1>
            </section>
        </>
    )
}