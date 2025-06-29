const CareerHero = () => {
    return (
        <section className="flex flex-col items-center justify-center px-4 py-16 text-center bg-gradient-to-br from-blue-50 to-green-50">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                Your Academic & Career <br className="hidden sm:block" />
                Support Hub
            </h1>

            <p className="mt-4 max-w-xl text-gray-600 text-base sm:text-lg">
                From academic support to career guidance - we're here to help you
                succeed at every step of your educational journey.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <button className="cursor-pointer  px-6 py-3 rounded-md bg-gradient-to-r from-blue-500 to-green-500 text-white font-medium hover:opacity-90 transition">
                    Explore Services
                </button>
                <button className="cursor-pointer px-6 py-3 rounded-md border border-gray-300 text-gray-800 hover:bg-gray-100 transition">
                    Get Instant Help
                </button>
            </div>
            <div className="image mt-10 rounded-xl overflow-hidden w-[700px] h-[420px]">
                <img src="/discussion.png" className="w-full" />
            </div>
        </section>
    );
};

export default CareerHero;
